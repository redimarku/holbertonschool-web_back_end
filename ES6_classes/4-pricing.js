/*eslint-disable*/

import Currency from './3-currency';

export default class Pricing{
    constructor(amount, currency){
        if(typeof amount === 'number'){
            this._amount = amount;
        }else {
        throw new Error("Amount must be a number");
        }
        
        if(currency instanceof Currency){
            this._currency = currency;
        }else {
        throw new Error("Currency must be an instance of Currency");
        }

    }

    get amount(){
        return this._amount;
    }
    get currency(){
        return this._currency
    }
    set amount(amount){
         if(typeof amount === 'number'){
            this._amount = amount;
        }else {
        throw new Error("Amount must be a number");
        }
    }
    set currency(currency){
         if(currency instanceof Currency){
            this._currency = currency;
        }else {
        throw new Error("Currency must be an instance of Currency");
        }

    }

    displayFullPrice() {
        return `${this._amount} ${this._currency._name} (${this._currency._code})`;
    }
    static convertPrice(amount, conversionRate){
        return amount * conversionRate;
    }
}
