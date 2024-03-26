const handleRequest = (request) => {
    const url = new URL (request.url);
    
    let message = ["yksi", "kaksi", "pong"];
 
	if(url.pathname === "/one"){
		message = message[0];}
    else if (url.pathname === "/two"){
		message = message[1];}
    else{
		message = message[2];}
    
  return new Response(message);
  
};

Deno.serve(handleRequest);
