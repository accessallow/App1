Ext.define('App1.view.itemSel.Selector',{
  extend:'Ext.container.Container',
  requires: [
    'Ext.ux.form.ItemSelector',
    'App1.view.itemSel.SelectorController',
    'App1.view.itemSel.SelectorModel'
  ],

  plugins:'viewport',
  xtype: 'app-itemsel',
  controller:'itemsel',
  viewModel:{
    type:'itemsel'
  },
  layout:{
    type:'border'
  },
  items:[
    {
      xtype:'itemselector',
      name:'itemselector',
      id:'itemSelId',
      fieldLabel:'Item Selector',
      store:is,
      displayField:'text',
      valueField:'value',
      value:['3','4','5'],
      allowBlank: false,
      msgTarget: 'side',
      fromTitle:'Availble',
      toTitle: 'Selected'
    }
  ]
});
