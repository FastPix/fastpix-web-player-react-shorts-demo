# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0]

### Added
- Audio track switching: viewers can select from the available audio tracks for a short.
- Subtitle / caption track switching, including an "Off" option to disable subtitles.

### Fixed
- "Off" button in the subtitle menu now correctly turns captions off.

### Changed
- Upgraded `@fastpix/fp-player` to `^1.0.20`.
- Updated `src/App.tsx`, `src/shorts/ShortItem.tsx`, and `src/shorts/types.ts` to support the new track-switching UI.
- Refreshed README with audio/subtitle switching documentation.

## [1.0.0]

### Added
- Initial React 19 + Vite shorts-style demo app using `@fastpix/fp-player` (1.0.12).
- Vertical (9:16) shorts feed driven by a `SHORTS_FEED` JSON array in `src/shorts/types.ts`.
- FastPix web player integration for HLS playback via FastPix playback IDs.
