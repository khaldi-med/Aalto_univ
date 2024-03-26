const handleRequest = (request) => {
  let message = 'Unable to comply...';
	  if (request.method === "GET") {
	      message = "Retrieving data...";
		    } else if(request.method === "POST") {
			    message = "Posting data...";
				  } 
	  return new Response(message);
};
    

Deno.serve(handleRequest);
