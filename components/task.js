import React from 'react';
import Button from './button';

export default class Task extends React.Component{
	render(){
		return <Button className="-primary -lg -block">{this.props.children}</Button>;
	}
}