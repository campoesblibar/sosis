Ext.define('SCH.module.DataMasterPPDB.KategoriPelajaran.view.form.FormKategoriPelajaran', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master KategoriPelajaran',
    iconCls     : 'icon-form',
    store       : 'SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran',
    requires    : ['SCH.module.DataMasterPPDB.KategoriPelajaran.store.KategoriPelajaran'],
    alias       : 'widget.formkategoripelajaran',
    id          : 'formkategoripelajaran',
    layout      : 'fit',
    border      : true,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'form',
                bodyPadding : 5,
                frame       : true,
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    
                    {
                        xtype       : 'textfield',
                        fieldLabel  : 'Kategori Pelajaran',
                        name        : 'name',
                        id          : 'name',
                        emptyText   : 'Nama KategoriPelajaran',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px'
                    },
                    {
                        fieldLabel  : 'Aktif',
                        tooltip     : 'Is Active?',
                        xtype       : 'checkboxfield',
                        name        : 'isactive',
                        checked     : false,
                        padding     : '0px 2px 5px 2px',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createKategoriPelajaran
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateKategoriPelajaran
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});