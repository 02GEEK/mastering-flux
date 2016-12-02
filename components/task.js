import React from 'react';
import Button from './button';
import {remove} from '../flux/actions/tasks';

export default class Task extends React.Component{
	constructor(props){
		super();

		this.onClick = this.onClick.bind(this);
	}

	onClick(e){
		remove({_id:this.props.id});
	}
	render(){
		return <Button onClick={this.onClick} className="-primary -lg -block">{this.props.children}</Button>;
	}
}