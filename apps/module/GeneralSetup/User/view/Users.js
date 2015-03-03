Ext.define('SCH.module.GeneralSetup.User.view.Users', {
    extend   :  'Ext.panel.Panel',
    title    : 'Users',
    iconCls  : 'icon-user',
    alias    : 'widget.Users',
    id       : 'Users',
    layout   : 'fit',     
    requires : [
        'SCH.module.GeneralSetup.User.view.grid.GridUsers',
        'SCH.module.GeneralSetup.User.view.form.FormUsers'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridusers', flex : 1},
        {xtype   : 'formusers', flex : 1.8}         
    ]
});