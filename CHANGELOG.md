# Change Log

All notable changes to the "never-nest" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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