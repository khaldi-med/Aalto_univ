const handleRequest = (request) => {
  const url = new URL(request.url);
  let message = "There is nothing to see here...";
  if (request.method === "PEEK" && url.pathname === "/secret") {
    message = "Peeking at secret data...";
  }

  return new Response(message);
};

Deno.serve(handleRequest);
