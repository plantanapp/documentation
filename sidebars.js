module.exports = {
  someSidebar: {
    'Getting Started': [
      'audience',
      'entities',
      'execution-context',
      'faq',
      'roles',
      'running-examples',
      'users',
      'versioning',
      'workflows',
      {
        type: 'category',
        label: 'Actions',
        items: [
          'actions/apply-tokens',
          'actions/execute-token',
          'actions/generate-pdf',
          'actions/grant-user-role',
          'actions/inject-data',
          'actions/load-user',
          'actions/load-users-from-sql',
          'actions/merge-pdf',
          'actions/overlay-pdf',
          'actions/revoke-user-role',
          'actions/run-sql',
          'actions/sanitize-html',
          'actions/send-email',
          'actions/server-request',
        ],
      }
    ]
  },
};