Ext.define('App1.store.itemStore',{
  extend:'Ext.data.Store',
  Model:'App1.model.itemModel',
  proxy:{
    type:'ajax',
    url:'http://localhost/CI4/index.php/Student/service_students',
    reader:{
      type:'json',
      root:'students'
    }
  },
  autoLoad: true
});
