Ext.define('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran',{
	extend 		: 'Ext.data.Store',
	model 		: 'SCH.module.DataMasterPPDB.KategoriPelajaran.model.KategoriPelajaran',
	requires 	: ['SCH.module.DataMasterPPDB.KategoriPelajaran.model.KategoriPelajaran'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'kategoripelajaran/c_kategoripelajaran/getKategoriPelajaran'
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