module.exports = {
  someSidebar: {
    'Getting Started': [
      'Audience',
      'execution-context',
      'Versioning',
      'Roles',
      {
        type: 'category',
        label: 'Actions',
        items: [
          'Actions/server-request', 
          'Actions/load-user',
          'Actions/load-users-from-sql',
          'Actions/execute-token',
          'Actions/apply-tokens',
          'Actions/faq',
          'Actions/send-email',
          'Actions/run-sql',
          'Actions/grant-user-role',
          'Actions/revoke-user-role'
        ],
      }
    ]
  },
};
