// @ts-nocheck
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-match-pattern': [2, 'always', /^SC-\d+\s(feat|fix|docs|style|refactor|test|chore):\s.+/],
    'subject-empty': [2, 'always'],
    'type-empty': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-match-pattern': ({ header }): [boolean, string] => {
          const jiraAndTypeRegex: RegExp = /^SC-\d+\s(feat|fix|docs|refactor|test):\s.+/;
          return [
            jiraAndTypeRegex.test(header),
            'Header must contain a JIRA issue number starting with SC- followed by a type and description \n' +
              'example: SC-[number] [feat|fix|docs|refactor|test]: [message] [?version]',
          ];
        },
      },
    },
  ],
};
