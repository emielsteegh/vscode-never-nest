(()=>{"use strict";var e={974:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0;const c=i(o(496)),a="neverNest";t.config=function(e){const t=c.workspace.getConfiguration(a);if(!t||void 0===t)throw new Error("Could not get configuration");if(!Object.keys(t).includes(e))throw new Error(`Configuration key "${e}" does not exist.\n\t\tShould be defined in package.json.\n\t\tCurrent keys: [${Object.keys(c.workspace.getConfiguration(a))}]`);return t.get(e)}},228:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.showDecorationsOf=t.clearDecorationsOf=t.addDecorationTo=t.getDecorationType=void 0;const c=i(o(496)),a=o(974);let s=c.window.activeColorTheme.kind;function u(){const e=1===s?(0,a.config)("colorLight"):(0,a.config)("colorDark");let t;return t="separator"===(0,a.config)("violationStyle")?c.window.createTextEditorDecorationType({borderStyle:"solid",borderWidth:"0 0 0 1px",borderColor:e}):c.window.createTextEditorDecorationType({backgroundColor:e}),t}c.window.onDidChangeActiveColorTheme((e=>{s=e.kind})),t.getDecorationType=u;let d=new Map,l=u(),f=c.window.createTextEditorDecorationType({});function g(e){return d.has(e)||d.set(e,{decorations:[],hovers:[]}),d.get(e)}c.workspace.onDidChangeConfiguration((e=>{if(e.affectsConfiguration("neverNest")){const e=u();!function(e,t){const o=d.keys();Array.from(o).forEach((o=>{if(o)if(void 0===o)d.delete(o);else if(o.document.isClosed)d.delete(o);else{const{decorations:n}=g(o);o.setDecorations(e,[]),o.setDecorations(t,n)}else d.delete(o)}))}(l,e),l=e}})),t.addDecorationTo=function(e,t,o,n){let{decorations:r,hovers:i}=g(e);const s=new c.Range(t,o);if(i.push({range:s,hoverMessage:"Indent depth violation, please reduce nesting level.\n\n- Extract code into new functions.\n- Return early instead of nesting statements.\n- Use higher order functions."}),"separator"===(0,a.config)("violationStyle")){const e=function(e,t){const o=[];let n=e.start,r=e.end;for(;n.isBefore(r);){const e=n.translate(0,t),r=new c.Range(n,e.translate(0,-1));o.push(r),n=e}return o}(s,n);for(const t of e){let e={range:t};r.push(e)}}else{const e={range:s};r.push(e)}},t.clearDecorationsOf=function(e){d.set(e,{decorations:[],hovers:[]})},t.showDecorationsOf=function(e){let{decorations:t,hovers:o}=g(e);e.setDecorations(l,t),e.setDecorations(f,o)}},937:function(e,t,o){var n=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&n(t,e,o);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.tryTriggerUpdateDecorations=t.activate=void 0;const c=i(o(496)),a=o(228),s=o(974);function u(e,t){console.log("tryTriggerUpdateDecorations"),e&&function(e){const t=(0,s.config)("includedLanguages");if(0===t.length)return!0;const o=e.document.languageId;return!!t.includes(o)}(e)&&(t&&t.document!==e.document||function(e){var t=e.document.getText();const o=e?.options.tabSize;let n;n=void 0===o||"auto"===o?4:+o;const r=(0,s.config)("maxTabDepth")+1,i=new RegExp(`^(\t{${r},}| {${n*r},})`,"gm");let c;for((0,a.clearDecorationsOf)(e);c=i.exec(t);){console.log(c);const t=e.document.positionAt(c.index),o=e.document.positionAt(c.index+c[0].length);(0,a.addDecorationTo)(e,t,o,n)}(0,a.showDecorationsOf)(e)}(e))}t.activate=function(e){let t=c.window.activeTextEditor;u(t),c.window.onDidChangeActiveTextEditor((e=>{t=e,u(t)}),null,e.subscriptions),c.workspace.onDidChangeTextDocument((e=>{u(t,e)}),null,e.subscriptions)},t.tryTriggerUpdateDecorations=u},496:e=>{e.exports=require("vscode")}},t={},o=function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}(937);module.exports=o})();