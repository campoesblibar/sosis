Ext.define('SCH.module.DataMasterPPDB.MataPelajaran.view.form.FormMataPelajaran', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master MataPelajaran',
    iconCls     : 'icon-form',
    store       : 'SCH.module.DataMasterPPDB.MataPelajaran.store.MataPelajaran',
    requires    : ['SCH.module.DataMasterPPDB.MataPelajaran.store.MataPelajaran'],
    alias       : 'widget.formmatapelajaran',
    id          : 'formmatapelajaran',
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
                        xtype       : 'combobox',
                        name        : 'id_catpel',
                        allowBlank  : true,
                        fieldLabel  : 'Kategori Pelajaran',
                        emptyText   : 'Kategori Pelajaran',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        fieldLabel  : 'Mata Pelajaran',
                        name        : 'name',
                        id          : 'name',
                        emptyText   : 'Nama Mata Pelajaran',
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
                disabled: createMataPelajaran
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateMataPelajaran
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