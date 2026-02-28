export default function guardrail(mathFunction){
const queue = [];
let result;
    try{
       result  = mathFunction();
      queue.push(result, 'Guardrail was processed');
       return queue;
    } catch(error){
        result = error.toString();
        queue.push(result, 'Guardrail was processed');
         return queue;

    }
    
    
   
}