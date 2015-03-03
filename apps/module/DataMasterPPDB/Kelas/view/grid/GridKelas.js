Ext.define('SCH.module.DataMasterPPDB.Kelas.view.grid.GridKelas',{
	extend 		: 'Ext.grid.Panel',
	store 		: 'SCH.module.DataMasterPPDB.Kelas.store.Kelas',
	title 		: 'Grid Master Kelas',
	iconCls 	: 'icon-grid',
	alias 		: 'widget.gridkelas',
	id 			: 'gridkelas',
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
        store       : 'SCH.module.DataMasterPPDB.Kelas.store.Kelas',
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
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteKelas },
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