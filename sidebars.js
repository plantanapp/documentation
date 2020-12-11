module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Getting Started', 
      items: [
        'audience',
        'entities',
        'execution-context',
        'roles',
        'users',
        'versioning',
        'workflows',
      ],
    },
    {
      type: 'category',
      label: 'Actions',
      items: [
        'faq',
        'running-examples',
        'actions/common-parameters',
        {
          type: 'category',
          label: 'Code',
          items: [
            'actions/apply-tokens',
            'actions/execute-javascript-code',
            'actions/execute-javascript-server-side',
            'actions/execute-token',
          ],
        },
        {
          type: 'category',
          label: 'Context',
          items: [
            'actions/inject-data',
            'actions/load-user',
            'actions/load-users-from-sql',
          ],
        },
        {
          type: 'category',
          label: 'Data',
          items: [
            'actions/run-sql',
            'actions/server-request',
          ],
        },
        {
          type: 'category',
          label: 'DNN Sharp',
          items: [
            'actions/close-form-popup',
            'actions/close-tabs-popup',
            'actions/filter-action-grid',
            'actions/initialize-form',
            'actions/open-form-popup',
            'actions/open-tabs-popup',
            'actions/refresh-grid',
            'actions/tabs-change-tab',
          ],
        },
        {
          type: 'category',
          label: 'Documents',
          items: [
            'actions/generate-pdf',
            'actions/merge-pdf',
            'actions/overlay-pdf',
          ],
        },
        {
          type: 'category',
          label: 'Email',
          items: [
            'actions/send-email',
          ],
        },
        {
          type: 'category',
          label: 'Message',
          items: [
            'actions/display-error-message',
            'actions/display-message',
            'actions/display-toast-message',
          ],
        },
        {
          type: 'category',
          label: 'Parsing',
          items: [
            'actions/sanitize-html',
          ],
        },
        {
          type: 'category',
          label: 'Redirect',
          items: [
            'actions/redirect-to-portal-page',
            'actions/redirect-to-url',
            'actions/send-file-to-download',
          ],
        },
        {
          type: 'category',
          label: 'User',
          items: [
            'actions/authorize-user',
            'actions/clear-user-cache',
            'actions/delete-user',
            'actions/grant-user-role',
            'actions/revoke-user-role',
            'actions/unauthorize-user',
            'actions/update-user-profile',
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          items: [
            'actions/user-registration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        {
          type: 'category',
          label: 'Important Notes',
          items: [
            'modules/important-notes/embed-form-or-grid',
            'modules/important-notes/secure-input',
          ],
        }
      ],
      }
  ]
};