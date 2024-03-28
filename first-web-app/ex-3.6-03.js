const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const number1 = Number(params.get("number1"));
  const number2 = Number(params.get("number2"));

  if (
    (params.get("operation") === "sum") &&
    (params.get("number1") && params.get("number2"))
  ) {
    return new Response(`${number1 + number2}`);
    
  } 
  else if (
    (    params.get("operation") === "product")&&
    (params.get("number1") && params.get("number2"))
  ) {
    return new Response(`${number1 * number2}`);
    
  } 
   
  else {
    return new Response("Invalid parameters.");
  }
};


Deno.serve(handleRequest);

