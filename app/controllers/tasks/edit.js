import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTask(id){
      let _this = this;
      var title = this.get('model.title');
      var description = this.get('model.description');
      var date = this.get('model.date');

     //update task
     this.store.findRecord('task', id).then((task) => {
        task.set('title', title);
        task.set('description', description);
        task.set('date', new Date(date));
      //save to database
      task.save().then(() => {
        _this.transitionToRoute('tasks');

      });

     });
    }
  }

});
