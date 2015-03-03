Ext.define('SCH.module.DataMasterPPDB.Kelas.view.Kelas',{
    extend   : 'Ext.panel.Panel',
    title    : 'Master Kelas',
    iconCls  : 'icon-kelas',
    alias    : 'widget.Kelas',
    id       : 'Kelas',
    layout   : 'fit',     
    requires : [
        'SCH.module.DataMasterPPDB.Kelas.view.grid.GridKelas',
        'SCH.module.DataMasterPPDB.Kelas.view.form.FormKelas'
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
        {xtype   : 'gridkelas', flex : 1.3},
        {xtype   : 'formkelas', flex : 0.8}         
    ]
});