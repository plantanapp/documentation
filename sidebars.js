module.exports = {
  someSidebar: {
    'Getting Started': [
      'Audience',
      'Versioning',
      {
        type: 'category',
        label: 'Actions',
        items: [
          'Actions/server-request', 
          'Actions/load-user',
          'Actions/load-users-from-sql',
          'Actions/run-sql',
          'Actions/send-email',
          'Actions/grant-user-role',
          'Actions/revoke-user-role'
        ],
      }
    ]
  },
};
