/*
Similar to practicing request parameters with Vanilla Deno, using the template code given as a part of the assignment, create a calculator application. The application expects three request parameters, 'operation', 'number1', and 'number2'. Using the operation, that can be either 'sum' or 'difference', the calculator should respond with the operation performed on the parameters 'number1' and 'number2'. For example, if a user makes a request to the address `http://localhost:8000?operation=sum&number1=2&number2=2`, the response should be '4'. Similarly, if the request is made to `http://localhost:8000?operation=difference&number1=8&number2=12`, the response should be `-4`. If one of the parameters is missing, or the operation is not one of the defined ones, the response should be 'Invalid parameters.'. You can assume that the numbers are always given using numeric values.
*/

import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();


app.get("/", (c) => {
    
    let result;
    const number1 = Number(c.req.query("number1"));
    const number2 = Number(c.req.query("number2"));
    
    if((c.req.query("operation") === "sum") && number1 && number2){
        result = number1 + number2
        
    }
    else if((c.req.query("operation") === "difference") && number1 && number2){
         result = number1 - number2
        
    }
    else{
        result = 'Invalid parameters.';
    }
    return new Response(result);
});

export default app;

