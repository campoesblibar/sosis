Ext.define('SCH.module.DataMasterPPDB.KategoriPelajaran.view.grid.GridKategoriPelajaran',{
	extend 		: 'Ext.grid.Panel',
	store 		: 'SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran',
	title 		: 'Grid Master KategoriPelajaran',
	iconCls 	: 'icon-grid',
	alias 		: 'widget.gridkategoripelajaran',
	id 			: 'gridkategoripelajaran',
	border   	: true,
    frame    	: true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'MULTI',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Nama',
            dataIndex: 'name',
            width    : '40%'
        },
        
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteKategoriPelajaran },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '85%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]	
});