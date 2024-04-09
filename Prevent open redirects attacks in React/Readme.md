## Intro
When a user is not authenticated and attempts to access certain pages, such as the profile page, the application will then redirect the user to the login page with the URL path /login?redirectTo=/profile to authenticate. Upon successful authentication, the user is subsequently directed to the intended profile page.

However this link can be exploited with potential open redirection attacks. A malicious user could alter the redirectTo parameter, thereby redirecting users to deceptive and persuasively crafted phishing websites. Those who unwittingly interact with these links may submit confidential information, thinking they are interacting with the legitimate website.

# Steps 1: use client-side routing
Instead of setting the window.location to perform the redirect, a better solution would be to use client-side routing, which allows redirection to pages without reloading the page.
The go-to library to achieve this is React Router.

Task 1
The react-router-dom library has already been installed.

Import the useNavigate hook from this library. The useNavigate hook can only redirect to pages with predefined routes. If you are curious which routes it accepts, these are defined in the index.jsx file.



