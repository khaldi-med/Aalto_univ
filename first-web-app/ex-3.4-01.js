const handleRequest = (request) => {
  return new Response(request.method);
};

Deno.serve(handleRequest);
