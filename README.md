# textlint-rule-no-em-dash

a textlint rule to disallow em dashes

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
