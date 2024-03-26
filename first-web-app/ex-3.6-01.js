const handleRequest = (request) => {
  const url = new URL(request.url);
  let params = url.searchParams;

  if (params.get("page") && params.get("count")) {
    return new Response(`${params.get("page")} ${params.get("count")}`);
  } else if (params.get("page")) {
    return new Response(`${params.get("page")} ${params.get("null")}`);
  } else if (params.get("count")) {
    return new Response(`${params.get("null")} ${params.get("count")}`);
  } else {
    return new Response(`${params.get("null")} ${params.get("null")}`);
  }
};

Deno.serve(handleRequest);
