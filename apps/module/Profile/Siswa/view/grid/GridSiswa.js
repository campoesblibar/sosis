Ext.define('SCH.module.Profile.Siswa.view.grid.GridSiswa',{
	extend 		: 'Ext.grid.Panel',
	store 		: 'SCH.module.Profile.Siswa.store.Siswa',
	title 		: 'Grid Master Siswa',
	iconCls 	: 'icon-grid',
	alias 		: 'widget.gridsiswa',
	id 			: 'gridsiswa',
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
        store       : 'SCH.module.Profile.Siswa.store.Siswa',
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
            text     : 'No Profile',
            dataIndex: 'notable',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteSiswa },
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