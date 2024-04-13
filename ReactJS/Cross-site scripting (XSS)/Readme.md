# Intro
Cross-site Scripting (XSS) allows adversaries to inject malicious scripts into web pages. Once an unsuspecting user visits the affected web page, the browser will then execute the script, leading to session hijacking, theft of sensitive data, website defacement, or the spreading of malware to other users. This lab will cover DOM based XSS, where the malicious payloads can be crafted by altering the DOM (Document Object Model).

The React library inherently provides a strong level of security against XSS, but this lab explores a scenario where additional steps are required to fully protect against XSS attempts.

### Santinize Input
Boat Insurance includes a feature that enables a claimant to dynamically render HTML elements within the claim description. This is rendered by inserting the claimant's input inside the innerHTML of the preview div. XSS payloads can be created if data is passed in without proper validation. For example, <img onerror='alert(document.domain)' src='doesnotexist' /> can be injected and executed.

Open TextFieldWithPreview.jsx to get started.

Task 1
Create a state variable for the preview content.
In the debounceInput function, remove the renderPreview call and update the state of the preview.

Task 2
The renderPreview is used to directly set the innerHTML of the preview. This is a bad practise. React provides a better way to dynamically render HTML elements - the dangerouslySetInnerHTML.

Add this attribute to the div with id "preview" and pass in the preview state variable.

Task 3
Without proper validation the dangerouslySetInnerHTML is still vulnerable to XSS. The user input still needs to be sanitized. The application uses the DOMPurify library to achieve this.

Import DOMPurify from the isomorphic-dompurify library;
Use it to sanitize the text that is passed through the dangerouslySetInnerHTML attribute.

