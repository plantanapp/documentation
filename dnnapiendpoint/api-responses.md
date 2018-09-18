# API Responses

### Summary

* Although not necessary, it's good a practice to always have APIs return data
* Data can be JSON, XML, HTML, text or any other plain text format
* You can also output binary files
* Execution stops on first Response action in the stack 

After an action is completed in a HTTP request, a "202 accepted" status can be returned to the client, this response is only returned for POST, PUT, DELETE methods. This response should have only the information filled in that was available at the time the request was accepted. After the call finished, the response should include the same headers and response body informs if the the request has been finished.    

API Endpoint module provides the Response options which can be set and configured while creating the method according to each actions. To sum up, API Endpoint provides the following responses:

## Output

* JSON Entity

Usually used on GET methods when we want to extract and list the registered values from a database, it differs from the next option at the export level, unlike the JSON Entity List which will get all the registrations according to the parameters set, the JSON Entity response, will export only the first registration from the table.  

* JSON Entity List

When this response is used, normally all the registrations from the database are listed and displayed.

* Raw Response

This response is useful for getting the response from the server and for processing data in different ways - in XML and in JSON format. It usually goes hand in hand with customizing the HTTP headers (for example, if I want to get an XML response after I set in the content ``<?xml version="1.0" encoding="utf-8"?>`` and the tags, I use the headers to determine the *Name* which should be *"Content-Type"* and the *values* which should be ``text/xml; charset=utf-8``)

* JSON Object

This response is used to return an API response usually as a "success" flag to catch if the execution of the method was successful or if it failed. The actual response data can be retrieved from the JSON Object and optionally a main response message which can be set as value in the Properties. 

Notes: - for the three types of JSON response you have the option to return JSONP ([Wikipedia explanation of JSONP](https://en.wikipedia.org/wiki/JSONP){:target="_blank"}). This is useful for developers. You must add to method a Input field named callback.

## Redirect

* Redirect to URL

This response has the purpose to make the redirect to an external link after the request has been made.

* Redirect to Portal Page

This response option redirects to the portal page after the the request is made and the whole source of the portal page gets displayed on the response.

* Send File for Download

With this response option, the whole source file which was attached is displayed on the response, if there's a .css attached, the response will display the css. format.