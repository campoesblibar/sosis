Ext.define('SCH.module.Profile.Siswa.store.Siswa',{
	extend 		: 'Ext.data.Store',
	model 		: 'SCH.module.Profile.Siswa.model.Siswa',
	requires 	: ['SCH.module.Profile.Siswa.model.Siswa'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'siswa/c_siswa/getSiswa'
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