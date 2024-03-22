module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.md',
      options: {
        // Disable formatting for .md files
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
};
