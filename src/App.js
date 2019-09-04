import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Main from './components/Main/Main';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			rates: [],
			amountFrom: '',
			amountTo: '',
			currencyValueFrom: 'USD',
			currencyValueTo: 'UAH'
		};
	}

	componentDidMount() {
		const today = new Date().toLocaleDateString().split('.').reverse().join('');
		const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&date=${today}`;

		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					rates: [...data]
				});
			});
	}

	getAmountTo(val, currency) {
		const currencyFrom = this.state.rates.filter(item => item.cc === currency);
		const result = +(val * currencyFrom[0].rate).toFixed(2);

		return isNaN(result) ? 'Некорректная сумма' : result !== 0 ? result : '';
	}

	changeAmountHandler(e) {
		this.setState({
			amountFrom: e.target.value,
			amountTo: this.getAmountTo(e.target.value, this.state.currencyValueFrom)
		});
	}

	changeCurrencyFromHandler(e) {
		this.setState({
			currencyValueFrom: e.target.value,
			amountTo: this.getAmountTo(this.state.amountFrom, e.target.value)
		});
	}

	changeCurrencyToHandler(e) {
		this.setState({
			currencyValueTo: e.target.value
		});
	}

	render() {
		const today = new Date().toLocaleDateString();

		return (
			<div className="App">
				<Header date={today} />
				<Main
					currencyValueFrom={this.state.currencyValueFrom}
					changeCurrencyFromHandler={this.changeCurrencyFromHandler.bind(this)}
					amountFrom={this.state.amountFrom}
					changeAmountHandler={this.changeAmountHandler.bind(this)}
					currencyValueTo={this.state.currencyValueTo}
					changeCurrencyToHandler={this.changeCurrencyToHandler.bind(this)}
					amountTo={this.state.amountTo}
				/>
			</div>
		)
	}
}

export default App;