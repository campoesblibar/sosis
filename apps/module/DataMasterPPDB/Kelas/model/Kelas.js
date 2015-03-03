Ext.define('SCH.module.DataMasterPPDB.Kelas.model.Kelas',{
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
			name 	: 'id_guru',
			type 	: 'string'
		},
		{
			name 	: 'nameguru',
			type 	: 'string'
		},
		{
			name 	: 'isactive',
			type	: 'string'
		}
	]	
});