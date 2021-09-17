export default function (context, options = {}) {
  const { Syntax, RuleError, report, getSource } = context;
  return {
    [Syntax.Str](node) {
      // "Str" node
      const text = getSource(node); // Get text
      const matches = /—/g.exec(text); // Found "bugs"
      if (!matches) {
        return;
      }
      const indexOfBugs = matches.index;
      const ruleError = new RuleError('em dash (—) found.', {
        index: indexOfBugs, // padding of index
      });
      report(node, ruleError);
    },
  };
}
