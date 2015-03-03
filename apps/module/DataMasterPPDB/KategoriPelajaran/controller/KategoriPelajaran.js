Ext.define('SCH.module.DataMasterPPDB.KategoriPelajaran.controller.KategoriPelajaran',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran');
		me.control({
			"gridkategoripelajaran" 							  : {
				itemclick: me.loadForm
			},
			"gridkategoripelajaran  button[action=delete]"      : {
                click: me.del
            },           
            "formkategoripelajaran  button[action=save]"        : {
                click: me.save
            }, 
            "formkategoripelajaran  button[action=reset]"       : {
                click: me.reset
            },
            "gridkategoripelajaranorg"                          : {
               itemdblclick: me.addorg
            },
            "gridkategoripelajaran textfield[action=search]"    : {
               keypress: me.search
            },
            "gridkategoripelajaran button[action=print]"        : {
               click: me.print
            },
            "formkategoripelajaran button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formkategoripelajaran');
		form.getForm().setValues(record.data);

        var saveButton = form.down('button[action=save]');
        saveButton.setDisabled(true);
        // console.log(updateUsers);

        if(updateUsers == false) {
            var updateButton = form.down('button[action=update]');
            updateButton.setDisabled(false);
        } else { 
            var updateButton = form.down('button[action=update]');
            updateButton.setDisabled(true);
        }
	},

	del: function(gridPanel, selected){
        var me = this;
        me.CheckedDataEdit = new Array();
        var record = gridPanel.up('grid').getSelectionModel().getSelection();
        Ext.each(record, function(selected){
            me.CheckedDataEdit.push({
                id : selected.data.id
            });
        }); 

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'kategoripelajaran/c_kategoripelajaran/delMasterTable',
                        method          : 'POST',
                        params          : {post : Ext.encode(me.CheckedDataEdit)},
                        success         : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            // console.log(data.msg);
                            if(data.msg === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Digunakan di DataMasterPPDB Lain',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });                             
                            } else {
                                me.reset();
			                    me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').removeAll();
			                    me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    reset: function(btn) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formkategoripelajaran');
        var grid = Ext.getCmp('gridkategoripelajaran');
        form.getForm().reset();

        if(createMasterTable == false){
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(false);
        }else{
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(true);
        }

        var updateButton = form.down('button[action=update]');
        updateButton.setDisabled(true);
        grid.getSelectionModel().clearSelections();
        me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').reload();

    },	

    save: function(btn, evt, opts){
        var me          = this;
        var form        = btn.up('form').getForm();
        var name        = form.findField('name').getValue();
        var notable     = form.findField('notable').getValue();
        var isactive    = form.findField('isactive').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'kategoripelajaran/c_kategoripelajaran/saveMasterTable',
            method  : 'POST',
            params  : {
                name        : name,
                notable     : notable,
                isactive    : isactive
            },
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.total === 1){
                    Ext.MessageBox.show({
                        title           : 'Informasi',
                        msg             : 'Data Telah Tersimpan',
                        icon            : Ext.MessageBox.INFO,
                        buttons         : Ext.MessageBox.OK
                    });
                    me.reset();
                    me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').removeAll();
                    me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').reload();
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'MasterTablename Telah Terdaftar - Silahkan Gunakan Tahun Ajaran Lain',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                } else {
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Pengisian Data Salah',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });                   
                }
            }
        });   
    },
    update: function(btn, evt, opts){
        var me          = this;
        var form        = btn.up('form').getForm();
        var id          = form.findField('id').getValue();
        var name        = form.findField('name').getValue();
        var notable     = form.findField('notable').getValue();
        var isactive    = form.findField('isactive').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'kategoripelajaran/c_kategoripelajaran/editMasterTable',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            name        : name,
                            notable     : notable,
                            isactive    : isactive
                        },
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            // console.log(data.total);
                            if(data.total === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Telah Dirubah',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                me.reset();
                                me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').removeAll();
                                me.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran').reload();
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'MasterTablename Telah Terdaftar - Silahkan Gunakan MasterTablename Lain',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });
                            } else {
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Pengisian Data Salah',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });                   
                            }
                        }
                    });
                }
            }
        });      
    },
    search: function(field, evt, opts){
        var value       = field.getValue();
        Ext.Ajax.request({
            url     : BASE_URL + 'kategoripelajaran/c_kategoripelajaran/searchMasterTable',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    }
});