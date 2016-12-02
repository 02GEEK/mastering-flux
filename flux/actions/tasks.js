import d from '../dispatcher';
import * as ACT from '../types';

export function addTask(packt){
	//changes happen here

	d.dispatch({type:ACT.ADD_TASK,payload:packt});
}
