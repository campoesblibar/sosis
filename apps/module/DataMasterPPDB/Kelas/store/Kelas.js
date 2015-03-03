Ext.define('SCH.module.DataMasterPPDB.Kelas.store.Kelas',{
	extend 		: 'Ext.data.Store',
	model 		: 'SCH.module.DataMasterPPDB.Kelas.model.Kelas',
	requires 	: ['SCH.module.DataMasterPPDB.Kelas.model.Kelas'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'kelas/c_kelas/getKelas'
		},
		actionMethods	: {
			read 	: 'POST'
		},
		 reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success',
            totalProperty   : 'total'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
	}
});