# TellTale

# Anthony Lam (alam31@uic.edu), Alexander Moran (amoran9@uic.edu), & Herman Contreras (hcontr4@uic.edu0

# https://telltale484.netlify.app/

## What does your application do?
TellTale is an interactive storytelling web application where stories become immersive. Users will be able to create their own stories and read them out load. As the user reads out loud, the app responds with immersive sound effects when words selected by the user are triggered.

## What makes it different than a CRUD app? I.e., what functionality does it provide that is not just a user interface layer on top of a database of user information,and the ability to view / add to / change that information?
The ability to provide real-time interaction, the app interacts with users in real time. It listens to the voices of users using a speech recognition API, responding dynamcially with sound effects.

## What security and privacy concerns do you expect you (as developers) or your users to have with this application?
Some security concerns that we may be expecting are SQL injections, cross-site scripting, cross-site request forgery, weak or inadequate authetication and authorization, and failed data encryption. We may also be expecting to encounter ransomware and data theft risks. To address some of these security concerns, we will be using libraries like helmet.js and express validator to use https, defend against XSS and SQL injections.
