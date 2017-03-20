import Ember from 'ember';

export default Ember.Controller.extend({
  sortedReviews: Ember.computed.sort('model', 'sortDefinition'),

  sortDefinition: ['date:desc'],

  actions:{
    deleteTask(id) {
      this.store.findRecord('task',id)
        .then((task) => {
          task.deleteRecord();
          task.save();
        });
    },

    ok(order){
      if(order === 'gg'){
        this.set('sortDefinition', ['date:desc']);
       console.log('descend is selected');
      }
      else{
        this.set('sortDefinition', ['date:asc']);
        console.log('ascend is selected');
          }


    }
  }
});
