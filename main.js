const handleRequest = () => {
  return new Response("Hi all!");
};

Deno.serve(handleRequest);
