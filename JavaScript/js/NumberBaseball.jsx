/*Try.jsx + NumberBaseball.jsx*/

import react, {Component} from 'react';
import Try from './Try';
function getNumbers(){
	
}

class NumberBaseball extends Component{
	state = {
		result: '',
		value: '',
		answer: getNumbers();
	};
	
	onSubmitForm = (e) => {
		e.preventDefault();
		
	};
	
	onChangeInput = (e) => {
		this.setState({e.target.value})
	};
	
	fruits = [
		{ fruit: '사과', taste: '맛있다' },
		{ fruit: '감', taste: '달다' },
		{ fruit: '귤', taste: '시다' },
	]
	
	render(){
		return(
			<h1>{this.state.result}</h1>
			<form onSubmit={this.onSubmitForm}>
				<input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
			</form>
			<div>시도: {this.state.tries.length}</div>
			<ul>
				{this.fruits.map((v,i) => {
					return (
						<Try key={v.fruit + v.state} value={v} index={i}/>
					);
				})}
			</ul>
		);
	}
}

export default NumberBaseball;
