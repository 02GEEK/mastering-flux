import React from 'react';
import Task from './task';
import Button from './button';
import taskStore from '../flux/stores/tasks';
import {addTask} from '../flux/actions/tasks';

export default class Tasks extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			tasks: taskStore.getTasks()
		}

		this.addTask = this.addTask.bind(this);
	}

	componentDidMount(){
		taskStore.on('change',()=>{
			this.setState({tasks:taskStore.getTasks() });
		});
	}

	addTask(e){
		const 	tasks = this.state.tasks.slice(0),
				input = this.input;

		addTask({label:input.value});

		//
	}

	render(){
		const 	{tasks} = this.state,
				chl = [];
		for(const {_id,label, ...rest} of tasks){
			chl.push(<Task key={_id} id={_id}>{label}</Task>);
		}

		return <div>
				{chl}
				<input name="add" ref={(a)=>{this.input = a}} type="text" />
				<Button className="-secondary" onClick={this.addTask}>Add Task</Button>
			   </div>;
	}
}