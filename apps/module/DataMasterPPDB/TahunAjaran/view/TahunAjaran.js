Ext.define('SCH.module.DataMasterPPDB.TahunAjaran.view.TahunAjaran',{
    extend   : 'Ext.panel.Panel',
    title    : 'Master TahunAjaran',
    iconCls  : 'icon-thnajaran',
    alias    : 'widget.TahunAjaran',
    id       : 'TahunAjaran',
    layout   : 'fit',     
    requires : [
        'SCH.module.DataMasterPPDB.TahunAjaran.view.grid.GridTahunAjaran',
        'SCH.module.DataMasterPPDB.TahunAjaran.view.form.FormTahunAjaran'
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
        {xtype   : 'gridtahunajaran', flex : 1.3},
        {xtype   : 'formtahunajaran', flex : 0.8}         
    ]
});