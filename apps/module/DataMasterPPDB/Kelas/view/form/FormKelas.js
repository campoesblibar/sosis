Ext.define('SCH.module.DataMasterPPDB.Kelas.view.form.FormKelas', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master Kelas',
    iconCls     : 'icon-form',
    store       : 'SCH.module.DataMasterPPDB.Kelas.store.Kelas',
    requires    : ['SCH.module.DataMasterPPDB.Kelas.store.Kelas'],
    alias       : 'widget.formkelas',
    id          : 'formkelas',
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
                        name        : 'id_guru',
                        allowBlank  : true,
                        fieldLabel  : 'Wali Kelas',
                        emptyText   : 'Wali Kelas',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        fieldLabel  : 'Nama Kelas',
                        name        : 'name',
                        id          : 'name',
                        emptyText   : 'Nama Kelas',
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
                disabled: createKelas
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateKelas
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