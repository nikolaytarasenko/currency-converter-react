import React from 'react';
import './Main.css';

const Main = props => {
    const amountTo = props.amountTo;
    let classes;

    if (amountTo === 'Некорректная сумма') {
        classes = 'js-incorrect-value';
    }

    console.log(classes);

    return (
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
                                <select name="currency-from" id="select_currency-from" size="10" value={props.currencyValueFrom} onChange={props.changeCurrencyFromHandler}>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
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
                                <label htmlFor="input_amount-from">{props.currencyValueFrom}</label>
                                <input type="text" name="amount-from" id="input_amount-from" value={props.amountFrom} onChange={props.changeAmountHandler} />
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
                                <select name="currency-to" id="select_currency-to" className="js-hide" size="1" value={props.currencyValueTo} onChange={props.changeCurrencyToHandler}>
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
                                <label htmlFor="input_amount-to">{props.currencyValueTo}</label>
                                <input type="text" name="amount-to" id="input_amount-to" className={classes} value={props.amountTo} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Main;