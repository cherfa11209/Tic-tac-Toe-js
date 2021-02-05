# Tic-tac-Toe-js

When I started working on this project I assumed it would be super simple, that I would be down in an hour. 
I didn't know about most of Vanilla JS limitations back then, that if I were to use an if statement to determine who would play when the user's turn would come around the program wouldn't wait for the user's input.
I thought about using prompts to get the player to make their move but that ended up causing the board to disappear long enough that I wouldn't be able to see the pc's moves and I would essentially be playing blind. 
Then I tried use setTimeOut() to cause the program to wait for a moment while the user made their move but that caused the console to crash as I had to call a function repeatedly while the player made their move. 
I ended up settling on triggering the pc to make a move immediately after the user decided on a cell.

 I instructed the AI to take the middle cell immeditaly if it were available as it would give them the upper hand.
 I gave the AI the ability to detect situations where it would be at danger of losing, and to cover up that threat.
 I could have made it impossible to beat the AI but I left it a couple of blind spots so that the user can have a chance at winning. 
 I also gave the AI the ability to detect any possibilities of winning and if one were to be found the AI would take it. 
 Lastly I gave the AI the ability to filter through the used cells and to choose a random unused cell if there wasn't a chance to win or lose in the next move.
 
 The AI logic took up more than 50% of the entire JS file and I would really like to find out a better way to detect opportunities to win, I thought of using a double for loop to find any openings but alas I couldn't get the logic down.
 
 This project has taught me a lot about the limitations of JS and where JS shines the brightest, I'm happy that I finally got it done.
 
