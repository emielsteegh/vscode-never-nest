# Change Log

All notable changes to the "never-nest" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.0] - 2025-01-24

### Added

- Added `neverNest.excludedLanguages` setting to disable the extension for specific languages.

### Changed

- Default `includedLanguages` is now empty (all languages enabled by default).
- Default `excludedLanguages` includes plaintext, markdown, json, jsonc, yaml, xml, html, css, and log.
- Default `violationStyle` changed from `full` to `separator`.
- Default colors updated: red for dark mode, soft red for light mode.
- Upgraded to ESLint 9 with new flat config.
- Minimum VS Code version bumped from 1.40 to 1.80.

## [1.3.0] - 2024-01-04

### Fixed

- Changed vscode dependency to `^1.40.0` to ensure compatibility with earlier versions.

## [1.2.0] - 2023-12-24

### Added

- Added `neverNest.enableHoverMessage` setting.
- Changing the theme (light/dark) now triggers a reload.

### Removed

- Removed redundant logging.
- Removed `dist` folder (esbuild uses `out`).

### Fixed

- Improved reload behavior, now does a full reload.
- Fixed changelog and readme mistakes.

## [1.1.1] - 2023-12-23

### Fixed

- Fixed the icon to also have violation highlighting.

## [1.1.0] - 2023-12-23

### Added

- Added an icon to the extension.

### Fixed

- Linked to changelog in README.

## [1.0.0] - 2023-12-23

### Added

- Initial release of Never Nest.
- Added `neverNest.includedLanguages` setting.
- Added `neverNest.colorLight` setting.
- Added `neverNest.colorDark` setting.
- Added `neverNest.violationStyle` setting.
- Added `neverNest.maxTabDepth` setting.
