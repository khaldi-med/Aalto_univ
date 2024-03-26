const handleRequest = (request) => {
    const url = new URL (request.url)
    
  return new Response(`You requested the path ${url.pathname}`);
};

Deno.serve(handleRequest);
