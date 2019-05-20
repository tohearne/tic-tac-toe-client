#Tic-tac-Toe
This is a web applications that allows the user to sign up / log in and play tic-tac-toe
both their games and user information are tracked on a server

##List technologies used
-html
-css/scss
-javascript
-ajax
-jquery
-bootstrap
-json

##Document your planning and tell a story about your development process and problem-solving strategy.
Going into this project I already had a grasp on how to get the game logic to work so I was not as concerned with that part.
I decided to start with a good chunk of the html and css for the page as I was not as familiar with them, I wanted to focus on one element at a time and get it working before I moved on to the next step. Planning it out I spent some time thinking about what features I would like to add to the game (multiplayer, player stats, mobile support) and I planned the base page to accomidate them in the future. Starting with the basics, my first goal was to get a gameboard of 3x3 squares that scales to the size of the window and stopping after a certain point. Next goal was to have a title bar with login an sign up forms, for this I wanted two differant ones which would swap out depending on the screen size. After getting that to work I developed the ajax requests for user sign-up/login, I also created an overlay for the gameboard that goes away when signed in and promts the user to do so if they are not. Once I had that finished I worked on the next part of the title bars where I made differant elements that would appear and replace the sign in ones when the user successfully signs in. These included a password reset form and a log out button. I made the html and css for both the destop and mobile versions then added in a way to hide one and reveal the other using javascript when a user signs in or logs out. Now with that finished I added in the ajax requests to make them functional. At this point I moved on to the game, the game logic was easy to get working and I was able to get the ajax requests done without too many issues. Now that I had all the base requirements donw I spent a good amount of the time getting the ui to update the way I wanted. I added in additional overlay features such as a gamemode select (planning ahead for multiplayer) and a game over overlay which displays which side won. Finally I added a strikethrough for the winning row. Playtesting the game and adjuesting the screensizes I was able to find some issues, most I was able to fix quickly but the one css issue that was giving me trouble Jen was able to help me with.

##List unsolved problems which would be fixed in future iterations.
I was unable to get multiplayer working in time and it will be added
Any issues that currently exist I am unaware of, I was able to get everything I wanted to do in the game (bar a few things that were limited by the api)

##Link to wireframes and user stories.
wireframes: https://imgur.com/a/Q2vW5Hs
-As a user, I want online and offline play
-As a user, I want to have unique usernames for profiles so when I play online I can see the name of who I am playing against (not possible with api)
-As a hardcore user, I want profile stats that keep track of my preformance in previous games
-As a user, I want to be able to play on my phone
