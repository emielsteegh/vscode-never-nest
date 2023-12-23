import * as vscode from 'vscode';

const NEVER_NEST = 'neverNest';

// safe way to get config values
export function config(key: string) {
    const configuration = vscode.workspace.getConfiguration(NEVER_NEST);
    if (!configuration || configuration === undefined) {
        throw new Error('Could not get configuration');
    }
    if (!Object.keys(configuration).includes(key)) {
        throw new Error(`Configuration key "${key}" does not exist.
		Should be defined in package.json.
		Current keys: [${Object.keys(vscode.workspace.getConfiguration(NEVER_NEST))}]`);

    }

    return configuration.get(key);
}