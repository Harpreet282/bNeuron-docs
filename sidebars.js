module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'introduction', // Direct link
      label: 'Introduction',
    },
    
    {
      type: 'category',
      label: 'Admin',
      items: ['admin/login' ,{
          type: 'category',
          label: 'Dashboard',
          items: [
        
            'admin/dashboard/users',
                'admin/dashboard/roles-&-permissions',
                'admin/dashboard/tenants-&-orgs',
                'admin/dashboard/knowledge-base',
                'admin/dashboard/model-providers',
                'admin/dashboard/agents',
                'admin/dashboard/xplr-modules',
                'admin/dashboard/governance',
                'admin/dashboard/monitoring',
                'admin/dashboard/notifications-&-scheduler',
                'admin/dashboard/billing-&-licensing',
                'admin/dashboard/help-&-support',
                'admin/dashboard/scheduler',
                'admin/dashboard/invoices-&-payments',
                'admin/dashboard/license-keys',
          ],
        },],
    },
  ],
};
