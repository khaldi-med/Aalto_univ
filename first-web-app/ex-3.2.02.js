const handleRequest = (request) => {

	let message = `You made a request with method ${request.method}`;
	return new Response(message);
};

Deno.serve(handleRequest);
