/*eslint-disable*/
export default class HolbertonClass{
    constructor(size, location){
       if(typeof size === 'number'){
        this._size = size;
       }else{
        throw new Error('You must put a number');
       }
       if(typeof location === 'string'){
        this._location = location;
       }else{
        throw new Error('You must put a string');
       }
    }

    valueOf(){
        return this._size;
    }

    toString(){
        return this._location;
    }
}