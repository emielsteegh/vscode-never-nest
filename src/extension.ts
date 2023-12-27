// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { clearDecorationsOf, addDecorationTo, showDecorationsOf } from './decorator';
import { config } from './config';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let activeEditor = vscode.window.activeTextEditor;

	// Trigger on load
	tryTriggerUpdateDecorations(activeEditor);

	// Trigger update decorations when active text editor changes
	vscode.window.onDidChangeActiveTextEditor((editor: vscode.TextEditor | undefined) => {
		activeEditor = editor;
		tryTriggerUpdateDecorations(activeEditor);
	}, null, context.subscriptions);

	// Trigger update decorations when document changes
	vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
		tryTriggerUpdateDecorations(activeEditor, event);
	}, null, context.subscriptions);

}

/**
 * Checks if the language of the current editor is included in the configuration.
 * @param editor - The active text editor
 * @returns true if the language is valid or false otherwise
 */
function checkLanguageValid(editor: vscode.TextEditor) {
	const includedLanguages = config("includedLanguages") as string[];
	if (includedLanguages.length === 0) { return true; }

	const currentLanguageId = editor.document.languageId;
	if (includedLanguages.includes(currentLanguageId)) { return true; }

	return false;
}


/**
 * Attempts to trigger update decorations if conditions are met.
 * @param editor - The active text editor
 * @param event - The document change event (optional)
 */
export function tryTriggerUpdateDecorations(editor: vscode.TextEditor | undefined, event?: vscode.TextDocumentChangeEvent) {

	if (!editor) {
		// No editor
		return;
	}
	if (!checkLanguageValid(editor)) {
		// Invalid language
		return;
	}
	if (event && event.document !== editor.document) {
		// Event document not editor document
		return;
	}

	updateDecorations(editor);
}

function updateDecorations(editor: vscode.TextEditor) {

	var documentText = editor.document.getText();

	const tabSizeRaw = editor?.options.tabSize;
	let tabSize: number;
	if (tabSizeRaw === undefined) { tabSize = 4; }
	else if (tabSizeRaw === "auto") { tabSize = 4; } // Optional, infer tab size from editor
	else { tabSize = +tabSizeRaw; }

	const tabViolationDepth = config("maxTabDepth") as number + 1;
	const spaceViolationDepth = tabSize * tabViolationDepth;

	const reViolation = new RegExp(`^(\t{${tabViolationDepth},}| {${spaceViolationDepth},})`, "gm");

	let match;

	clearDecorationsOf(editor);
	while (match = reViolation.exec(documentText)) {
		const posStart = editor.document.positionAt(match.index);
		const posEnd = editor.document.positionAt(match.index + match[0].length);
		addDecorationTo(editor, posStart, posEnd, tabSize);

	}
	showDecorationsOf(editor);
}