Ext.define('SCH.module.DataMasterPPDB.MataPelajaran.store.MataPelajaran',{
	extend 		: 'Ext.data.Store',
	model 		: 'SCH.module.DataMasterPPDB.MataPelajaran.model.MataPelajaran',
	requires 	: ['SCH.module.DataMasterPPDB.MataPelajaran.model.MataPelajaran'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'matapelajaran/c_matapelajaran/getMataPelajaran'
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