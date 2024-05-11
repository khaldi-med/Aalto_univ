* The term internet refers to multiple connected networks.

* This included a protocol for transferring text documents between computers (HyperText Transfer Protocol, HTTP), a language for representing structure and data on a web page (HyperText Markup Language, HTML), a web server that could respond to requests, and a web browser that could show the user HTML-pages retrieved from web servers.

* When a browser requests a website, the server first responds with the website document. After this, the browser makes requests to the server, requesting content (including images) that is linked in the website document.

* Two of the main protocols that internet relies upon is the TCP-protocol (Transmission Control Protocol) and the IP-protocol (Internet Protocol). The TCP-protocol ensures that messages are received as intended, while the IP-protocol ensures that the messages are delivered to the correct address. These protocols are typically referred jointly using the term TCP/IP.

* When a computer sends a message, e.g. a file, to another computer using the TCP-protocol, the data is divided into packets. Each packet contains a small header, up to 60 bytes, and content, up to 65 kilobytes. The header contains information about the sender and the receiver (IP-addresses), a number indicating the order of the particular packet, a checksum of the content, and a few other values.

* In summary,qthe responsibility of the TCP-protocol is to verify that the message is received, and that the content of the message is received correctly.

* URIs (Uniform Resource Identifier)

* The most common status code is 200, which indicates that everything went well.

The status codes can be divided into five high-level categories which are as follows.

```
1**: Information messages (e.g. 100 "Continue")
2**: Succesful events (e.g. 200 "OK")
3**: Additional actions required from the client (e.g. 301 "Moved Permanently", which often is accompanied by a header that tells the new location, which the client then can retrieve)
4**: Error in the request or other issues (e.g. 401 "Not Authorized" and 404 "Not Found")
5**: Error on the server e.g. 500 "Internal Server Error")
```
* HTTP-protocol defines eight request methods, where the most commonly used ones are **GET** and **POST**.

HTTP-protocol defines also other request types, some of which are the following ones:
```
DELETE: asks for removing of a resource
HEAD: asks for the header information related to a resource, but not the resource itself (can be e.g. used for checking if an already downloaded resource has changed)
OPTIONS: requests information about the possible options available regarding a request (e.g. could the resource be removed with a request)
```
* HTTPS (HyperText Transfer Protocol Secure) is an extension to HTTP, which aims to make the requests secure.

* Command-line tools that can be used to study whether a server responds to requests and to study the content  of requests (and responses).
	- First, the ping command is used to study the response time of a service -- it is not really a tool for making HTTP requests, but a tool for checking whether an address responds to requests. It is used in conjunction with a server name (or an IP address).
	- Client URL (cURL) is a program that can be used to make HTTP requests to servers. By default, curl is used to make a HTTP GET request to a server.
		- If curl is used with the --verbose flag (or -v), the output contains also request and response details, including the headers. 
	- Use `Ctrl+Shift+I` to open "Developer tools".
	 
* Client-server model (or client-server architecture), which is at the core of all web applications. In client-server model, a server is responsible for hosting and providing resources and services to one or more clients.
	- While servers share their resources, clients do not.
	- Note that the a server can also act as a client.
 As an example, when a web server connects to a database server, the web server is a client, and the database server is the server.

* deno run --allow-net --watch <file.js>
* deno fmt file.js 
* deno lint file.js
  

* **Routing** means mapping paths to functions.
- A **route** is a mapping from a method-path -combination to a function.


* Middlewares are functions that are executed before the actual request handler.

* Software frameworks are platforms for developing software applications.

* When comparing frameworks with libraries, one particular aspect of frameworks is that the flow of execution, when using frameworks, is handled by the framework. The developer adds functionality that can be "plugged in" to the framework.

* Web frameworks are a specific category of software frameworks, created for developing web software applications.
- Web frameworks are software frameworks for developing web applications.

* Deno is not a framework. One good way of looking at Deno would be to think of it as a platform for software development.

* It is also possible to define non-conventional (and non-existing) methods. This is done using the on method. 
	- app.on("peek", "/", (c) => c.text("Nothing to see here."));	

* The path and method of a request are also included in a req property of the context. 
	- `` app.get("*", (c) => c.text(`${c.req.method} ${c.req.path}`));``

* Modern JavaScript features a ?? operator that can be used to simplify the above code. The ?? operator returns the value of the right-hand side if the left-hand side is null or undefined.
	- ``  let name = c.req.query("name") ?? "Jane"``

* Path variables are a way to define parts of a path as variables, where values from the parts can then be used in the application.

* Web frameworks are libraries that help in creating web applications. They provide a structure for the application and often also provide tools for common tasks, such as handling requests and responses.

* Request parameters are available through the query method of the req attribute of the context object c.
	- app.get("/", (c) => c.text(`Name: ${c.req.query("name")}`));

* Path variables are available through the param method of the req attribute of the context object c.
	- app.get("/:id", (c) => c.text(`Id: ${c.req.param("id")}`));


* deployctl deploy --token=<...> --project=<name> --> to deploy a project

* deployctl deploy **--prod** --token=<...> --project=<name> --> to update and set to proudaction mode a project

* To persist data -- that is, to store it in a way that it doesn't disappear between server restarts -- we need to store the data in a physical format (i.e. on a hard-drive). Here is where databases come into play.

* Key-value stores are a type of database that store data in a key-value format.

* When working with key-value stores (and more any functionality that involves waiting for resources), we typically utilize asynchronous functions. Asynchronous functions allow waiting for the execution of the function, while potentially providing other processes the possibility to execute in the meanwhile.

* In JavaScript, the keyword async is used to define asynchronous functions, and the keyword await is used for waiting for the execution of an asynchronous function.

* The relevant methods for working with the key-value store are get, set, and delete -- all of them are asynchronous.

* deno run --allow-net --unstable --watch

```
The get method is used for retrieving a value.
It takes a list with a string as a parameter. The string is the key that is used. The following example outlines opening the key value store and retrieving the value for the key count.

const kv = await Deno.openKv();
const count = await kv.get(["count"]);
The value returned by get is an object, which contains a property value that has the actual value stored into the key value database.

In practice, however, it is possible that the value is not found. In this case, the value within the returned object is null. Falling for a default value -- say 0 -- can be done with the ?? operator.

const kv = await Deno.openKv();
const count = await kv.get(["count"]);
let value = count.value ?? 0;
console.log(value);
```

```
The set method is used for setting a value. It takes two parameters: (1) a list containing a string that indicates the name of the key, and (2) the value that is to be stored. The following example outlines opening the key value store and setting the value 0 for the key count.

const kv = await Deno.openKv();
await kv.set(["count"], 0);
If the key-value storage already contains a value for the given key pair, the value will be overridden with the new value.
```

```
Deleting a value
The delete method is used for deleting a value. Similar to get, it takes a list with a string as a parameter, where the string is the key. The following example outlines the use of the delete method. The example would remove the value for the key count.

const kv = await Deno.openKv();
await kv.delete(["count"]);
```

### Architecture: Layered Architecture
* The term layered architecture refers to organizing code into layers that each have their own responsibility within the application. 

* The term layer refers to a group of related functionality that is separated from other functionality in the application. 

* The term architecture refers to the overall structure of the application

* **A layered architecture that consists of three layers: a presentation layer, a business logic layer, and a database access layer.**


#### View Templates

* deno run --allow-net --allow-read --watch app.js

* The nullish coalescing operator **??** : returns the value on the left-hand side of the operator if the value is not null or undefined, and the value on the right-hand side of the operator if the value on the left-hand side is null or undefined. 
	- Email address: <%= it.email ?? "Unknown" %\>!

#### Forms and data

* The form element form has two attributes: method and action. The method describes the used HTTP method (either POST or GET), while the action describes the path to which the data is sent. If the method attribute is missing, GET is used by default. Similarly, if the action attribute is missing, the current address and path is used by default.
	
 * Input elements are created using the input element. The input element has a number of attributes, of which the most important ones are type, id, and name. The type attribute describes the type of the input field, while the id and name attributes are used for identifying the input field. The id attribute is used for referring to the input field from other elements, while the name attribute is used for identifying the input field when the form is submitted.

* The label element is used for referring to an input field within the form and for adding a textual description for the input field. The attribute for of the label element tells which input field the label refers to. The value for the attribute for should be the same as the value of the id attribute of the input field that the label refers to. 
 
* a form can contain multiple input fields. The type of the input field can be controlled using the type attribute. There are over 20 different input types:
	- email
	- text
	- password
	- checkbox
	- date
	- number
	- url 


















