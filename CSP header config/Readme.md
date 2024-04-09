# INTRODUCTION
The Content-Security-Policy is a security layer that protects against a wide range of attacks, such as XSS, click-jacking and code injection. It does this by adding a trust element on the sources that are loaded or executed.

## Task
### Add a CSP header via meta tag
CSP is configured by setting HTTP headers. Usually, these CSP headers are set through the web server. However, they can also be set from the frontend via a <meta> tag using the http-equiv attribute.

Open the index.html and have a look at the <head> element.

Task 1
Inside the head:

add a meta tag;
and give it an http-equiv attribute with "Content-Security-Policy" as its value.

Task 2
The default-src directive can be used to set a baseline. This is the directive that will be used as a fallback for all other directives if those aren't present. Configure the CSP to only allow sources coming from self:

Add the content attribute;
Give it the value default-src, followed by 'self';

### Allow 3rd party script
The CSP header uses directives to further fine-grain the allowed sources. To indicate which other scripts are allowed, use the script-src directive.

Task
Allow scripts from both your own domain and https://api.thirdparty.example to be loaded. (Remember to separate the directives with ;)

### Allow React inline styles
When using a React component library, a lot of the styling is done inline. In general, it's recommended to avoid allowing the unsafe-inline styling option. A more secure solution is to use a nonce, a randomly-generated cryptographic value that changes for each request. By having the nonce present in the CSP header and attaching it to all style tags, the browser can prevent loading sources that don't match the nonce.

There's no API present in this lab. We'll be using __GENERATED_NONCE__ as a placeholder value. The host serving the webpage can replace this with a randomly-generated nonce on each request.

Task 1
Add a style-src directive in the CSP header;
Allow all styles coming from self or that match the __GENERATED_NONCE__. Keep in mind that a nonce directive value is prefixed by nonce-.

Task 2
When using a component library, the nonce should be included in the style tags added by the library. The BoatInsurances application uses the MUI component library (but this code will be different for other component libraries). MUI uses a CacheProvider to add the nonce to its components.

In Wrapper.tsx:

Import createCache from '@emotion/cache';
Call createCache with an object that has:
a nonce, with the __GENERATED_NONCE__ string as its value.
a key with "boatinsurances" as its value.
Task 3
Wrap the <App /> component in a <CacheProvider>
Assign the result of the createCache call to the CacheProvider value attribute.
