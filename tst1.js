const handleRequest = (r) => {
  return new Response(`Requested ${r.url}`);
};

Deno.serve(handleRequest);
