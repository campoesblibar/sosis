Ext.define('SCH.module.DataMasterPPDB.MataPelajaran.view.MataPelajaran',{
    extend   : 'Ext.panel.Panel',
    title    : 'Master MataPelajaran',
    iconCls  : 'icon-mapel',
    alias    : 'widget.MataPelajaran',
    id       : 'MataPelajaran',
    layout   : 'fit',     
    requires : [
        'SCH.module.DataMasterPPDB.MataPelajaran.view.grid.GridMataPelajaran',
        'SCH.module.DataMasterPPDB.MataPelajaran.view.form.FormMataPelajaran'
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
        {xtype   : 'gridmatapelajaran', flex : 1.3},
        {xtype   : 'formmatapelajaran', flex : 0.8}         
    ]
});