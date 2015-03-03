Ext.define('SCH.module.DataMasterPPDB.MataPelajaran.view.grid.GridMataPelajaran',{
	extend 		: 'Ext.grid.Panel',
	store 		: 'SCH.module.DataMasterPPDB.MataPelajaran.store.MataPelajaran',
	title 		: 'Grid Master MataPelajaran',
	iconCls 	: 'icon-grid',
	alias 		: 'widget.gridmatapelajaran',
	id 			: 'gridmatapelajaran',
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
        store       : 'SCH.module.DataMasterPPDB.MataPelajaran.store.MataPelajaran',
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
        {
            text     : 'No DataMasterPPDB',
            dataIndex: 'notable',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteMataPelajaran },
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