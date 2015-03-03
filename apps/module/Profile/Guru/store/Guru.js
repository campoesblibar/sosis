Ext.define('SCH.module.Profile.Guru.store.Guru',{
	extend 		: 'Ext.data.Store',
	model 		: 'SCH.module.Profile.Guru.model.Guru',
	requires 	: ['SCH.module.Profile.Guru.model.Guru'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'guru/c_guru/getGuru'
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