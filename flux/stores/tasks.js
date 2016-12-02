import EventEmitter from 'events';
import d from '../dispatcher';
import * as ACT from '../types';
import {initTasks} from  '../actions/tasks';

class TasksStore extends EventEmitter{
	constructor(){
		super();

		this.tasks = [];
		this.action = this.action.bind(this);
		initTasks();
	}

	getTasks(){
		return this.tasks.slice(0);
	}

	initTasks(tasks){
		this.tasks = tasks;
		this.emit('change');
	}

	addTask(task){
		const 	tasks = this.tasks.slice(0);
				tasks.push(task);

		this.tasks = tasks;

		this.emit('change');
	}

	remove({_id}){
		this.tasks = this.tasks.filter((task)=> task._id!==_id);
		this.emit('change');	
	}

	action({type, payload}){
		switch(type){
			case ACT.ADD_TASK:
				this.addTask(payload);
				break;
			case ACT.INIT_TASKS:
				this.initTasks(payload);
				break;
			case ACT.REMOVED:
				this.remove(payload);
				break;
		}

	}

}

const store = new TasksStore();


d.register(store.action);

export default store;