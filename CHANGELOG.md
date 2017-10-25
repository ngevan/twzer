# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2017-10-24
### Changed
- `validateCommand` ensures that the command entered is valid. Will throw an error if it isn't.

## [1.0.1] - 2017-10-24
### Changed
- Verify URLs before they are passed through Bitly. Previously didn't check them, leading to errors.

## [1.0.0] - 2017-10-24
### Changed
- Renamed `tweezer -> twzer` throughout (name taken already on npmjs.com).
- Update README with more than one word.

## [0.5.0] - 2017-10-24
### Added
- Test for Google's API.
- Add shorten function to Google client.
- Add expand function to Google client.
### Changed
- Update `shorten.js` to use Google API.
- Update `expand.js` to use Google API.

## [0.4.0] - 2017-10-24
### Added
- Create module to expand a url with Bitly.
### Changed
- Update `bitly.test.js` to test for expand function.
- Update `twzer.js` to have expand command.
- Update `bitly.js` with expand function.

## [0.3.0] - 2017-10-24
### Added
- Test for Bitly's API.
- Create module to shorten a url with Bitly.
### Changed
- Update `twzer.js` to have shorten command.
- Update `shorten.js` to use Bitly API.

## [0.3.0] - 2017-10-24
### Added
- Test for shortening url functionality (Bitly as a placeholder).
- Create shorten command in `commands/shorten.js`.

## [0.2.0] - 2017-10-24
### Added
- Use [Commander.js](https://github.com/tj/commander.js/) for command-line interface.
- Test for basic cli functionality.
- Create cli in `lib/twzer.js`.

## [0.1.0] - 2017-10-24
- Create initial project structure.
