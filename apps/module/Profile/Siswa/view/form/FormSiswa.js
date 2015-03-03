Ext.define('SCH.module.Profile.Siswa.view.form.FormSiswa', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master Siswa',
    iconCls     : 'icon-form',
    store       : 'SCH.module.Profile.Siswa.store.Siswa',
    requires    : ['SCH.module.Profile.Siswa.store.Siswa'],
    alias       : 'widget.formsiswa',
    id          : 'formsiswa',
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
                        name        : 'id_siswa',
                        allowBlank  : true,
                        fieldLabel  : 'Wali Siswa',
                        emptyText   : 'Wali Siswa',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        fieldLabel  : 'Nama Siswa',
                        name        : 'name',
                        id          : 'name',
                        emptyText   : 'Nama Siswa',
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
                disabled: createSiswa
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateSiswa
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