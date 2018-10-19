# Word-Guess-Game
## how to play the game
So basically you just need to guess the word hidden from you
and if you guessed it right a song will play for you as a winner.
## How this game came to life?
By javascript , you will find the code in the assests folder in a file called game.js and 
by using html and css to visualize it to users.
## Can you land the structure of your code?
Sure, so:
### We have these variables to set in order for the game to work
    #### Array called words will contain all the words to be guessed.
    #### Array called songTitle will contain description of the song.
    #### A string called keysAreadyPressed will keep any key you pressed from the keyboard and this string will be used later to prevent
    repeativness.
    #### Array called correctLetters will save the correct keys that you 
    guessed and use it later to check if you won already.
    #### A counter called winter will increment once you win a turn.
    #### A counter called guess_left will decrement every time you hit a key starting from 16 down to zero wich will diclare your lost.
    #### Audio object called audio will be used to play the song that you
    guessed it correctly
    #### A string called word will chose randomly a song from the list throgh an equation Math.floor(Math.random()*5)
## But how would you show all these elements?
### Well , here where html and css take place to show the player the info that the game processes, so here are the html elements used for the game
    -crrent_word_label , curent_word_content these are h2 tags for the label and the content of the current chosen word.
    -"guessed_letter_label", "guessed_letter_content" these are h2 tag for the label and content of the guessed letters.
    -"guesses_left_lbl","guesses_left_content" these are h2 tags for the label and content of how many guesses left 
## Do you have any explanations how the code works?
### Sure, so I devided the code into functions i am going to list all of them and what they do:
    -fillWithArg(string) function : this funciton will receive the word to use its length to create span tag equal to the number of 
    letters in the chosen word and assign these spans an id of the index of each letter and initiate the text with '-'.
    -searchReplaceAllIndexes(string,string) function: the search and replace function will take the chosen word and the target letter
    and start searching the chosen word for the letter provided and when it find that letter it will replace the corresponding span (that hold the index of the letter in the word ) text with the letter itself.
    -reset() function: this function gets call either when the player win or lose the job is to get all the variables back to thier initial values.
    -putTheSong(string) function: this function will be called after the player win the guess and it has one argument represent the guessed word , it will search the path for a song that hold the name as the guessed word , then call play function on the Audio object to play it.
    -putTheImage(string) function: this function will be called after the player win the guess and will display the image of the singer by using its arg which is the chosen word to search the path for an image named with that word.
    -Document.keyup function: this standard function will have the process that manage the game and it has this logic:
        1-After a key got hit by the player it will be checked if it is
        already pressed before so it won't go farther and also the program won't take any action if the guess_left variable became zero because that's mean that there is no more tries left.
        2-If the previous step didn't apply then the keysAlreadyPressed will store that key.
        3-And "guesses_left_content" tag will be updated to show how many guesses left along with updating the "guessed_letter_content" tag that will show the letter pressed.
        4-Now the letter will be checked if it is included in the word 
        to:
           a -Call searchReplaceAllIndexes(word,event.key) to search the letter in all possible positions inside the word.
           b-Check if correctLetters that collect the correct letters became the same as the chosen word itself if that happen then:
                -Call putTheSong(word) function to play the song.
                -Call putTheImage(word) function to display the singer image.
                -Call reset() to reset all variables.
           c -if the correctLetters doesn't have all the letters the prcess continue BUT!!!
       5 -if any of the step 1 conditions doesn't apply the execution will jump to the else statement wich has a check point for the guess_left to test it againist zero and if it failed then alert will be fired telling the player that he lost the game and a call to reset() function will be shot to reset all the variables.
       --------------------
## Finally
I tried to explain the code to be understandable so my appology if it wasn't enough, THANKS.
# NUBOOTCAMP
NORTHWESTERN TECHNOLOGIES SCHOOL-CODING BOOTCAMP
