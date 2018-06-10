import { Template } from 'meteor/templating';
import { Tasks } from '../../api/tasks.js';
import '../task/task.js';
import './body.html';



Template.body.helpers({
    tasks() {
        return Tasks.find({});
    }
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault(); // preventing form default submit action
        const text = event.target.text.value; //form value
        Tasks.insert({
            text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
        })
        event.target.text.value = '' //clear input
    }
})
