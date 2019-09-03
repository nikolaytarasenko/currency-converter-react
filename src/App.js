import React, { Component } from 'react';
import './App.css';

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

		return (val * currencyFrom[0].rate).toFixed(2);
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
				<header className="header">
					<div className="header-container container">
						<h1 className="header-title">Конвертер валют</h1>
						<div className="header-date">{today}</div>
					</div>
				</header>
				<main>
					<div className="container">
						<div className="columns">
							<div className="column">
								<div className="column-title">
									<h2>Меняю: </h2>
								</div>
								<div className="column-content">
									<div className="column-group">
										<label htmlFor="select_currency-from"></label>
										<select name="currency-from" id="select_currency-from" size="10" value={this.state.currencyValueFrom} onChange={this.changeCurrencyFromHandler.bind(this)}>
											<option value="EUR">EUR</option>
											<option value="USD">USD</option>
											{/*<option value="UAH">UAH</option>*/}
											<option value="RUB">RUB</option>
											<option value="GBP">GBP</option>
											<option value="CHF">CHF</option>
											<option value="PLN">PLN</option>
											<option value="JPY">JPY</option>
											<option value="CAD">CAD</option>
											<option value="AUD">AUD</option>
											<option value="HUF">HUF</option>
										</select>
									</div>
									<div className="column-group">
										<label htmlFor="input_amount-from">{this.state.currencyValueFrom}</label>
										<input type="text" name="amount-from" id="input_amount-from" value={this.state.amountFrom} onChange={this.changeAmountHandler.bind(this)} />
									</div>
								</div>
							</div>
							<div className="column">
								<div className="column-title">
									<h2>Получаю: </h2>
								</div>
								<div className="column-content">
									<div className="column-group">
										<label htmlFor="select_currency-to"></label>
										<select name="currency-to" id="select_currency-to" className="js-hide" size="1" value={this.state.currencyValueTo} onChange={this.changeCurrencyToHandler.bind(this)}>
											<option value="UAH">UAH</option>
											{/*<option value="USD">USD</option>*/}
											{/*<option value="EUR">EUR</option>*/}
											{/*<option value="RUB">RUB</option>*/}
											{/*<option value="GBP">GBP</option>*/}
											{/*<option value="CHF">CHF</option>*/}
											{/*<option value="PLN">PLN</option>*/}
											{/*<option value="JPY">JPY</option>*/}
											{/*<option value="CAD">CAD</option>*/}
											{/*<option value="AUD">AUD</option>*/}
											{/*<option value="HUF">HUF</option>*/}
										</select>
									</div>
									<div className="column-group">
										<label htmlFor="input_amount-to">{this.state.currencyValueTo}</label>
										<input type="text" name="amount-to" id="input_amount-to" value={this.state.amountTo} readOnly />
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

export default App;