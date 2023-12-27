# Never Nest

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/emielsteegh.never-nest)](https://marketplace.visualstudio.com/items?itemName=emielsteegh.never-nest)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/emielsteegh.never-nest?label=installs)](https://marketplace.visualstudio.com/items?itemName=emielsteegh.never-nest)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/emielsteegh.never-nest)](https://marketplace.visualstudio.com/items?itemName=emielsteegh.never-nest)

I'm a never nester, and you should be too.

> "... if you need more than 3 levels of indentation, you're screwed anyway, and should fix your program."
>
> -- Linus Torvalds

This extension makes it a little easier to avoid deep nesting, by highlighting your
errors when you forget. It was inspired by [Code Aesthetics' Never Nest Video](https://www.youtube.com/watch?v=CFRhGnuXG-4),
which I recommend watching if you're unfamiliar with the concept. Nesting too
deep is a common anti-pattern in programming, that makes code less readable and
harder to maintain.

**[👉 You can get here it in the VSCode Marketplace! 🛒](https://marketplace.visualstudio.com/items?itemName=emielsteegh.never-nest)**

<sub>S/O to [Code Aesthetics](https://www.youtube.com/@CodeAesthetic) for the inspiration and [Hans Raaf's  indent rainbow extension](https://github.com/oderwat/vscode-indent-rainbow) for laying the groundwork.
<sub>

## Extension Settings

This extension contributes the following settings:

* `neverNest.includedLanguages`: Languages for which never-nest should be activated. When empty will use for all languages.
* `neverNest.colorLight`: Color used to show nesting errors in light mode *(hex, rgba, etc)*.
* `neverNest.colorDark`: Color used to show nesting errors in dark mode *(hex, rgba, etc)*.
* `neverNest.maxTabDepth`: Maximum allowed nesting depth (consecutive tabs). Any more than this will count as a violation. Defaults to 3.
* `neverNest.violationStyle`: Style of violation highlighting. Can be either `full` or `separator`. Defaults to `full`.
  * `full` will highlight the entire line
  * `separator` will only highlight the tab indicator bars `|`.
* `neverNest.enableHoverMessage`: Whether to show a tooltip when hovering over the tab indicator. Defaults to `false`.

## Known Issues

* The extension works best with consistent tabs or spaces. I recommend using `editor.insertSpaces` as `true` to avoid issues and having a consistent tab width.

[You can log any other issues here](https://github.com/emielsteegh/vscode-never-nest/issues)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

## Release Notes

See the [Changelog](CHANGELOG.md) for all notable changes to the extension.

### 1.0.0

Initial release of Never Nest.
