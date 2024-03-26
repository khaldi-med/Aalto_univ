const handleRequest = (request) => {
  const url = new URL(request.url);

  let message = "hello";
	  if (url.pathname === "/hello") {
	      message = "world";
		    } else if (url.pathname.includes("secret")) {
			    message = "ingredient";
				  }

	  return new Response(message);
};

Deno.serve(handleRequest);
