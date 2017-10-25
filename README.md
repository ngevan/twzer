# Twzer

[![Travis CI](https://img.shields.io/travis/evanscloud/twzer.svg)](https://travis-ci.org/evanscloud/twzer)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)

Looking to shorten a URL like [iamtheproudownerofthelongestlongestlongestdomainnameinthisworld.com](http://www.iamtheproudownerofthelongestlongestlongestdomainnameinthisworld.com)? Or see what's behind a mysterious [http://bit.ly/2zMSEXP](http://bit.ly/2zMSEXP)? Look no further! Twzer is a URL shortening and expanding tool accessible right from the command-line.

## Installation

If you don't have yarn installed, enter:

```
npm install -g yarn
```

If you're ahead of the curve, enter the following to make twzer global:

```
  yarn global add twzer
```

Or if you prefer npm:

```
  npm install --global twzer
```

## Usage

Twzer gives you two commands: shorten a link or expand a shortened link. Along with each command are two options: use Bitly or Google as the client.

### Examples

Shorten a link using Bitly with `--bitly` or `-b`:

```
  twzer sh -b https://example.com
```

Expand a link using Google with `--google` or `-g`:

```
  twzer ex -g https://goo.gl/F0pE
```

If you need help, just run with `--help` or `-h`:

```
  twzer --help
```

## Testing

Run `yarn test` or `npm test`.

## Updates

Check [CHANGELOG](https://github.com/evanscloud/twzer/blob/master/CHANGELOG.md) for all updates.

### What the twzer?

Twzer is pronounced as 'twiz-er'. Like Twizzler, but without the 'L'.

### Why the funky name?

This project was originally called tweezer, but an npm package already existed with that name. I tried :sweat_smile:.

## Contributing

Suggestions, bug reports and pull requests are encouraged for those who would like to take part in improving this tool.

## License

MIT license - see [LICENSE](https://github.com/evanscloud/twzer/blob/master/LICENSE) for details.
