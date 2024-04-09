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