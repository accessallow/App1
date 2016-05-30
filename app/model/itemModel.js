Ext.define('App1.model.itemModel', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'class',
        type: 'string'
    }, {
        name: 'address',
        type: 'string'
    }, {
        name: 'phone',
        type: 'string'
    }, {
        name: 'marks',
        type: 'int'
    }]
});
