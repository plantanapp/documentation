# Debugging

## Summary

* Use the Test Method function to test APIs using jQuery
* Alternatively, use Postman which also allows settings headers, it saves previous requests and other neat functionality
* Use CURL to test API from command line - it has the advantage of testing the API outside of a browser context to emulate for example mobile or desktop apps
* Enable Debug Mode per module or per method to collect debug information in logs
* Use Raw Response action to output content for debug purposes (optionally, control with this action with a Condition that looks at an input parameter)
* Debug client side requests using F12 Developer Tools in any modern browser

The first debugging "tool" we use is the "*test this method*" button which is displayed in the right corner of the method - it will redirect you on the sample jQuery Code page where the .ajax code is generated and the Endpoint URL is created and displayed. If the method you created is correct, then executing it will make the correct request to the web service and a response will be fetched and displayed on the page.

Another tool for debugging is the [Postman](https://www.getpostman.com/){:target="_blank"} application for Chrome. We gave an example on the [API Keys](security/api-keys.html) page where one of the testing methods was using the Postman application.

As an additional tool, which we prefer to use when testing browser independent, is *cURL* where in command line we make an insert like:
``curl --data "input=data" //test.com/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ashx?method=List``
with an already created method and after the command is run, the message which informs you about the method gets displayed, in this case, the method was created as a GET method and we've tried to insert it as a POST method.