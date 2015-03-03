Ext.define('SCH.module.DataMasterPPDB.TahunAjaran.view.form.FormTahunAjaran', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master TahunAjaran',
    iconCls     : 'icon-form',
    store       : 'SCH.module.DataMasterPPDB.TahunAjaran.store.TahunAjaran',
    requires    : ['SCH.module.DataMasterPPDB.TahunAjaran.store.TahunAjaran'],
    alias       : 'widget.formtahunajaran',
    id          : 'formtahunajaran',
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
                        fieldLabel  : 'Tahun Ajaran',
                        name        : 'name',
                        id          : 'name',
                        emptyText   : 'Nama Tahun Ajaran',
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
                disabled: createTahunAjaran
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateTahunAjaran
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