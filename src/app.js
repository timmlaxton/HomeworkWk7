import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue({
  el:'#app',
  data: {
    items: [
    {name:"Sleep", done: true},
    {name:"Drink",done: true},
    {name:"Homework", done: false}
  ],
  newItem: "",
  },

  methods: {saveNewItem: function(){
    this.items.push({
    name:this.newItem,
    done: false
  });
    this.newItem = "";
  },
  buyItem: function(index){
    this.items[index].done = true;

  }


  }
});
});
