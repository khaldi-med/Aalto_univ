const handleRequest = (request) => {
  const url = new URL(request.url);
  let params = url.searchParams;

  if (!params.has("title") && !params.has("name")) {
    return new Response(`Once upon a time, there was a princess called Tove.`);
  } 
   else if (!params.has("title") && params.has("name")) {
    return new Response(`Once upon a time, there was a princess called ${params.get("name")}.`);
  }
  else if (params.has("title") && !params.has("name")) {
    return new Response(`Once upon a time, there was a ${params.get("title")} called Tove.`);
  }
  
  else {
    const title = params.get("title") || "princess";
    const name = params.get("name") || "Tove";
    return new Response(
      `Once upon a time, there was a ${params.get("title")} called ${
        params.get("name")
      }.`,
    );
  }
};

Deno.serve(handleRequest);

