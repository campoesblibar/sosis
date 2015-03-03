Ext.define('SCH.module.Profile.Siswa.view.Siswa',{
    extend   : 'Ext.panel.Panel',
    title    : 'Master Siswa',
    iconCls  : 'icon-siswa',
    alias    : 'widget.Siswa',
    id       : 'Siswa',
    layout   : 'fit',     
    requires : [
        'SCH.module.Profile.Siswa.view.grid.GridSiswa',
        'SCH.module.Profile.Siswa.view.form.FormSiswa'
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
        {xtype   : 'gridsiswa', flex : 1.3},
        {xtype   : 'formsiswa', flex : 0.8}         
    ]
});