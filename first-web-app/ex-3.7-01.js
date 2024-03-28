/* 
Write an application that responds to requests as follows.
GET requests to the path / respond to requests with the text "Hi there!".
GET requests to the path /congrats respond to requests with the text "Congrats, {heroOfTheDay}!", where {heroOfTheDay} corresponds to the value of the request parameter "heroOfTheDay".
DIDNOT requests to the path /lol respond to the requests with the text "What kind of tree fits in your hand? A palm tree.".
Other requests should receive a response with the text "Not here.".
*/

// The soltion
const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  let message = "Not here.";
  if (request.method === "GET") {
    if (url.pathname === "/") {
      message = "Hi there!";
    } else if (url.pathname === "/congrats" && params.get("heroOfTheDay")) {
      message = `Congrats, ${params.get("heroOfTheDay")}!`;
    }
  } else if (request.method === "DIDNOT" && url.pathname === "/lol") {
    message = `What kind of tree fits in your hand? A palm tree.`;
  } else {
    message;
  }
  return new Response(message);
};

Deno.serve(handleRequest);

