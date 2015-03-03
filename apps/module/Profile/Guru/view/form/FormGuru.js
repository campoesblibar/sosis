Ext.define('SCH.module.Profile.Guru.view.form.FormGuru', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master Guru',
    iconCls     : 'icon-form',
    store       : 'SCH.module.Profile.Guru.store.Guru',
    requires    : ['SCH.module.Profile.Guru.store.Guru'],
    alias       : 'widget.formguru',
    id          : 'formguru',
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
                        fieldLabel  : 'Wali Guru',
                        emptyText   : 'Wali Guru',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        fieldLabel  : 'Nama Guru',
                        name        : 'name',
                        id          : 'name',
                        emptyText   : 'Nama Guru',
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
                disabled: createGuru
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateGuru
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