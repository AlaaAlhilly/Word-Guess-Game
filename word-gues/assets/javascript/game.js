
$(document).ready(function() {
    //array to contain the words to guess
    var words = ["sound of silence","god's plan","idol","see you again","shot gun"];
    //array to contain the name of the song and the ban to show it when the user win
    var stitel=["SOUND OF SILENCE - DISTURBED",
                "GOD'S PLAN - DRAKE","IDOL - BTS",
                "SEE YOU AGAIN - WIZ KHALIFA","SHOTGUN - GEORGE EZRA"];
    //array to hold keys that pressed to prevent taken them more than once
    keysAlreadyPressed = "";
    //vaiable to count if we get all letter guessed correctly to do winning actions 
    correctLetters=[];
    //counter how many words got guessed correctly
    winer=0;
    //the guesses left variable 
    guess_left=16;
    //audio variable to hold the song
    var audio;
    //fill the tags with the approperiate text
    /*
        -current_word_label this tag will hold the label that shows the users the correct letters he guessed
         for the current word.
        -wins_counter: this label to show the custmers how many times he guessed the right word.
        -guessed_letter_label: this label will refer to a hidden tag of the letters that already pressed by the user.
        -guesses_left_lbl:label to refer to the hidden tag that holds the number of tries left.
    */

    $("#current_word_label").text("Current Word");
    $("#guessed_letter_label").text("Letters already guessed");
    $("#guesses_left_lbl").text("Guesses left");
    $("#guesses_left_content").text(guess_left);
    //function to fill the current word h2 tag with '-' to hide the correct letters
    function fillWithArg(word){
        //loop to the length of the word to generate spans
        for( i=0;i<word.length;i++){
            //generate span with an id that hold the index of the letters in the word 
            //so we can use it when we try to change a specific span
            $("#current_word_content").append("<span id=\""+i+"\">"+"- "+"</span>");
        }
    }
    //a funciton that search the letter in every index in the word and put it in the approperiate span
    function searchReplaceAllIndexes(word,letter){
        //a loop to go throw all the letters in the word
        for( i=0;i<word.length;i++){
            //checking if the letter is found in the word
            if(word.charAt(i) == letter){
                //push the guessed letter to the correct letters that will be used to stop the game
                correctLetters[i] = word.charAt(i);
                //assign the letter to the approperiate span wich generated 
                //and assigned an id holding the positions of the letters in the word
                $("#"+i).text(letter);
            }
        }
    }
    //getting the word from a random postion from the array
     word = words[Math.floor(Math.random() * 5)];
     //calling the fill function to fill the tag with '-'
     fillWithArg(word);
     //reset function get called when you win or lose to reset all the variables and the html contents
     function reset(){
        //showing how many user guessed the correct word
        $("#win_count").text("Wins: " + (++winer)); 
        //display the name of the song and the singer name on top of our game countainer
        $("#songtitle").text(stitel[words.indexOf(word)]);
        //reset all variables to the initial state
        win = 0;
        guess_left=16;
        keyspress =0;
        correctLetters.length = 0;
        keysAlreadyPressed.length=0;
        word = words[Math.floor(Math.random() * 5)];
        $("#current_word_content").empty();
        $("#guesses_left_content").text(guess_left);
        $("#guessed_letter_content").empty();
        //filling the spans with '-' after each turn
        fillWithArg(word);
     }
     //a function to find the song that the user guessed correctly from the path provided
     function putTheSong(word){
        if(typeof(audio)!="undefined"){
                audio.stop();
        }
        playAudio("./assets/sounds/"+word+".mp3");
    }
    //a function to be called to play the song that the user guessed
    function playAudio(song){
    //instanitiate an Audio object to hold the song
    audio = new Audio(song);
    //call play function to play the song
    audio.play();
    }
    //a prototype stop function to stop the song
    Audio.prototype.stop = function(){
        this.pause();
        this.currentTime = 0.0;
    }
    //a function to be called to put the image of the song that won
    function putTheImage(word){
        $("#songimage").attr("src","./assets/images/"+word+".jpg");
    }
    //the key press event process
    $(document).keyup(function (event) {
        //check if the key is already pressed before and there is still guesses left
        if(keysAlreadyPressed.includes(event.key) == false && guess_left != 0){
            //put the key the keyAlreadyPressed array to avoid pressing it again
            keysAlreadyPressed[16-guess_left]=event.key;
            //display how many guesses left in the approperiate tag
            $("#guesses_left_content").text(--guess_left);
            //display the key presses in the approperiate tag
            $("#guessed_letter_content").append(event.key + ",");
            //now if the word contain the key pressed
            if(word.includes(event.key)){
                //go to a function that will search the key in all the position 
                //and display it in the approperiat position for the user
                searchReplaceAllIndexes(word,event.key);
                //if the keypress counter reached the word length then the user won
                if(correctLetters.toString().replace(/,/g,'') == word){
                    //calling the function that will find the winning word as a song to play it
                    putTheSong(word.replace(/\s/g, ''));
                    //calling the function that will palce the image of the ban
                    putTheImage(word.replace(/\s/g, ''));
                    //reset to start another turn
                    reset(); 
                }
            }
            //if there is no guesses left 
        }else if(guess_left == 0){
            //will alert the user that he lost
            alert("you lost");
            //and reset everything to start another turn
            reset();
        }
    });
});