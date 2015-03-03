Ext.define('SCH.module.DataMasterPPDB.TahunAjaran.store.TahunAjaran',{
	extend 		: 'Ext.data.Store',
	model 		: 'SCH.module.DataMasterPPDB.TahunAjaran.model.TahunAjaran',
	requires 	: ['SCH.module.DataMasterPPDB.TahunAjaran.model.TahunAjaran'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'tahunajaran/c_tahunajaran/getTahunAjaran'
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