Ext.define('SCH.module.DataMasterPPDB.MataPelajaran.model.MataPelajaran',{
	extend 	: 'Ext.data.Model',
	fields 	:[
		{
			name 	: 'id',
			type 	: 'string'
		},
		{
			name 	: 'name',
			type 	: 'string'
		},
		{
			name 	: 'id_catpel',
			type 	: 'string'
		},
		{
			name 	: 'namecatpel',
			type 	: 'string'
		},
		{
			name 	: 'isactive',
			type	: 'string'
		}
	]	
});