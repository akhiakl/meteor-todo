import { Template } from 'meteor/templating';
import './task.html';
import { Tasks } from '../../api/tasks';


Template.task.events({
    'click .delete'(event){
        Tasks.remove(this._id)
    }, //delete task
    'click .checkbox-toggle'(event){
        Tasks.update(this._id,{
            $set: {checked: !this.checked}
        })
    } // toggle complete task

})