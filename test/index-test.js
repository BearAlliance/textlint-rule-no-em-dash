'use strict';
import TextLintTester from 'textlint-tester';
const tester = new TextLintTester();
// rule
import rule from '../src/index';
// ruleName, rule, { valid, invalid }
tester.run('rule', rule, {
  valid: [
    'text',
    // Hyphens are cool
    '-',
    // en dashes are also cool
    '–',
  ],
  invalid: [
    // single match
    {
      text: 'It is something—bad',
      errors: [
        {
          message: 'en dashes (—) found.',
          line: 1,
          column: 16,
        },
      ],
    },

    // multiple match
    {
      text: `It has many things—bad things.

One more thing—you're gonna love it`,
      errors: [
        {
          message: 'en dashes (—) found.',
          line: 1,
          column: 19,
        },
        {
          message: 'en dashes (—) found.',
          line: 3,
          column: 15,
        },
      ],
    },
  ],
});
