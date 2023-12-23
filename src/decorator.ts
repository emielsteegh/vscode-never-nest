import * as vscode from 'vscode';
import { config } from './config';


const HOVER_EXPLANATION = `Indent depth violation, please reduce nesting level.

- Extract code into new functions.
- Return early instead of nesting statements.
- Use higher order functions.`;

// Add listener for dark/lightmode change. This way we
// dont have to check the theme every time the
// decorations are updated.
let vscodeThemeKind = vscode.window.activeColorTheme.kind;
vscode.window.onDidChangeActiveColorTheme(e => {
    vscodeThemeKind = e.kind;
});


// returns the decoration type as described by the config
// the settings used here are: colorLight, colorDark, violationStyle
export function getDecorationType() {
    const violationColor = (vscodeThemeKind === 1 ? config("colorLight") : config("colorDark")) as string;

    let violationDecorationType: vscode.TextEditorDecorationType;

    if (config("violationStyle") === 'separator') {
        violationDecorationType = vscode.window.createTextEditorDecorationType({
            borderStyle: "solid",
            borderWidth: `0 0 0 1px`,
            borderColor: violationColor as string
        });
    } else {
        violationDecorationType = vscode.window.createTextEditorDecorationType({
            backgroundColor: violationColor as string
        });
    }

    return violationDecorationType;
}

// stores the decorations of all editors
let editorMap = new Map<vscode.TextEditor,
    {
        decorations: vscode.DecorationOptions[],
        hovers: vscode.DecorationOptions[]
    }>();

// this decoration type is used for the violation decoration, it changes
let currentDecorationType = getDecorationType();
// this decoration type is used for the hover message, it doesnt change
let hoverDecorationType = vscode.window.createTextEditorDecorationType({});

// if the config of neverNest changes, reload old decorations, update the decoration type,
vscode.workspace.onDidChangeConfiguration(e => {
    if (e.affectsConfiguration('neverNest')) {
        const newDecorationType = getDecorationType();
        reloadDecorations(currentDecorationType, newDecorationType);
        currentDecorationType = newDecorationType;
    }
});

function getOrCreateEditorMapEntry(editor: vscode.TextEditor) {
    if (!editorMap.has(editor)) {
        editorMap.set(editor, { decorations: [], hovers: [] });
    }
    return editorMap.get(editor) as { decorations: vscode.DecorationOptions[], hovers: vscode.DecorationOptions[] };
}

// adds an object to the editors decorations array
export function addDecorationTo(editor: vscode.TextEditor, posStart: vscode.Position, posEnd: vscode.Position, tabSize: number) {
    let { decorations, hovers } = getOrCreateEditorMapEntry(editor);

    const violationRange = new vscode.Range(posStart, posEnd);
    hovers.push({ range: violationRange, hoverMessage: HOVER_EXPLANATION });

    if (config("violationStyle") === 'separator') {
        const violationChunks = divideRangeIntoChunks(violationRange, tabSize);
        for (const chunkRange of violationChunks) {
            let decoration = { range: chunkRange };
            decorations.push(decoration);
        }
    } else {
        const decoration = { range: violationRange };
        decorations.push(decoration);
    }
}

// empties the decorations array of the editor
export function clearDecorationsOf(editor: vscode.TextEditor) {
    editorMap.set(editor, { decorations: [], hovers: [] });
}

// shows the objects to be decorated in the editor
export function showDecorationsOf(editor: vscode.TextEditor) {
    let { decorations, hovers } = getOrCreateEditorMapEntry(editor);
    editor.setDecorations(currentDecorationType, decorations);
    editor.setDecorations(hoverDecorationType, hovers);
}


// loops through all editors that have decorations
// cleans up old editors in the list
// living ones get their decorations reloaded
function reloadDecorations(oldDecorationType: vscode.TextEditorDecorationType, newDecorationType: vscode.TextEditorDecorationType): void {
    const affectedEditors = editorMap.keys();

    const affectedEditorsArray = Array.from(affectedEditors);
    affectedEditorsArray.forEach(editor => {
        if (!editor) {
            editorMap.delete(editor);
        } else if (editor === undefined) {
            editorMap.delete(editor);
        } else if (editor.document.isClosed) {
            editorMap.delete(editor);
        } else {
            // collect decorationsArray from oldDecorationType
            const { decorations } = getOrCreateEditorMapEntry(editor);
            editor.setDecorations(oldDecorationType, []);
            editor.setDecorations(newDecorationType, decorations);
        }
    });
}

// splits a range into chunks of size chunkSize
function divideRangeIntoChunks(range: vscode.Range, chunkSize: number): vscode.Range[] {
    const chunks: vscode.Range[] = [];
    let start = range.start;
    let end = range.end;

    while (start.isBefore(end)) {
        const chunkEnd = start.translate(0, chunkSize);
        const chunk = new vscode.Range(start, chunkEnd.translate(0, -1));
        chunks.push(chunk);
        start = chunkEnd;
    }

    return chunks;
}