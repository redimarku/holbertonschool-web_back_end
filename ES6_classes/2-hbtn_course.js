class HolbertonCourse{
    constructor(name, length, students){
        if(typeof name === undefined){
            throw new Error("Name must be a string");
        }else {
            this._name = name;
        }
         if(typeof length !== 'number'){
            throw new Error("Length must be a number");
        }else {
            this._length = length;
        }
        if(!Array.isArray(students)){
         throw new Error('Students must be an vector');    
        }else
            this._students = students;
        }
        

        get name(){
            return this._name;
        }
        get length(){
            return this._length;
        }
        get students(){
            return this._students;
        }

        set name(name){
        if(typeof name === undefined){
            throw new Error("Name must be a string");
        }else {
            this._name = name;
        }
        }
        set length(length){
        if(typeof length !== 'number'){
            throw new Error("Length must be a number");
        }else {
            this._length = length;
        }
        }
        set students(students){
         if(!Array.isArray(students)){
         throw new Error('Students must be an vector');    
        }else
            this._students = students;
        }
        }
    


