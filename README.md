# textlint-rule-no-em-dash

A [textlint](https://textlint.github.io) rule to disallow [em dashes](https://www.thepunctuationguide.com/em-dash.html) (`—`)

[![CI](https://github.com/BearAlliance/textlint-rule-no-em-dash/actions/workflows/ci.yml/badge.svg)](https://github.com/BearAlliance/textlint-rule-no-em-dash/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/textlint-rule-no-em-dash.svg)](https://badge.fury.io/js/textlint-rule-no-em-dash)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-em-dash

## Usage

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "no-em-dash": true
  }
}
```

Via CLI

```
textlint --rule no-em-dash README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © Nick Cacace
