Ext.define('SCH.module.DataMasterPPDB.KategoriPelajaran.view.KategoriPelajaran',{
    extend   : 'Ext.panel.Panel',
    title    : 'Master KategoriPelajaran',
    iconCls  : 'icon-capel',
    alias    : 'widget.KategoriPelajaran',
    id       : 'KategoriPelajaran',
    layout   : 'fit',     
    requires : [
        'SCH.module.DataMasterPPDB.KategoriPelajaran.view.grid.GridKategoriPelajaran',
        'SCH.module.DataMasterPPDB.KategoriPelajaran.view.form.FormKategoriPelajaran'
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
        {xtype   : 'gridkategoripelajaran', flex : 1.3},
        {xtype   : 'formkategoripelajaran', flex : 0.8}         
    ]
});