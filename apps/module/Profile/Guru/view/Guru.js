Ext.define('SCH.module.Profile.Guru.view.Guru',{
    extend   : 'Ext.panel.Panel',
    title    : 'Master Guru',
    iconCls  : 'icon-guru',
    alias    : 'widget.Guru',
    id       : 'Guru',
    layout   : 'fit',     
    requires : [
        'SCH.module.Profile.Guru.view.grid.GridGuru',
        'SCH.module.Profile.Guru.view.form.FormGuru'
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
        {xtype   : 'gridguru', flex : 1.3},
        {xtype   : 'formguru', flex : 0.8}         
    ]
});