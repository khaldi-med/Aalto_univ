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
*  









