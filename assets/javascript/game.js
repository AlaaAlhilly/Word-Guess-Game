document.onkeyup = function(){
    var words = ["soundofsilence","godsplan","idol","seeyouagain","shotgun"];
    var stitel=["SOUND OF SILENCE - DISTURBED",
                "GOD'S PLAN - DRAKE","IDOL - BTS",
                "SEE YOU AGAIN - WIZ KHALIFA","SHOTGUN - GEORGE EZRA"];
    var music = document.getElementById("msc");
    var im = document.getElementById("gimg");
    var wins = document.getElementById("wins");
    var currentWord = document.getElementById("cw");
    var guessRemain = document.getElementById("grno");
    var guessedLetters = document.getElementById("gl");
    var songDesc = document.getElementById("songdesc");
    var winlbl = document.getElementById("sWins");
    var curlbl = document.getElementById("scw");
    var guesslbl = document.getElementById("sgrno");
    var rlbl = document.getElementById("sgl");
    winlbl.textContent = "WINS: ";
    curlbl.textContent = "CURRENT WORD";
    guesslbl.textContent = "NUMBER OF GUESSES REMAINING";
    rlbl.textContent = "LETTERS ALREADY GUESSED";
    var choice = Math.floor(Math.random() * 5);
    var wordchoice = words[choice];
    var alreadyTried=[];
    // var audio ;
    var winner=0;
    var win = []; 
    var tries = 14;
    guessRemain.textContent = 14;
    generate();
    document.onkeyup = function(event){
        if(alreadyTried.includes(event.key)==false){
            alreadyTried.push(event.key);
            tries--;
            if(wordchoice.includes(event.key)){
                searchLetterExists()
            }
            guessedLetters.append(document.createTextNode(event.key + ",")) ;
            guessRemain.textContent = tries;
        
            if(win.length == wordchoice.length){
                // if(typeof(audio)!="undefined"){
                //     audio.stop();
                // }
                // playAudio("./assets/sounds/"+wordchoice+".mp3");
                displayImage(wordchoice);
                winner++;
                wins.textContent = winner;
                var tpos = words.indexOf(wordchoice);
                songDesc.textContent = stitel[tpos];
                generate();
            }else if(tries == 0){
                alert("you lost");
                generate();
            }
        }
    }
    function searchLetterExists(){
        for(var i=0;i<wordchoice.length;i++){
            if(wordchoice.charAt(i) == event.key){
                document.getElementById(i.toString()).textContent = event.key;
                win.push(event.key);
            }
        }
    }
    // function playAudio(song){
    //     audio = new Audio(song);
    //     audio.play();
    // }
    // Audio.prototype.stop = function(){
    //     this.pause();
    //     this.currentTime = 0.0;
    // }
    function displayImage(bane){
        im.setAttribute("src","./assets/images/"+bane+".jpg");
    }
    function generate(){
        alreadyTried.length=0; 
        tries = 14;
        guessRemain.textContent = tries;
        win=[];
        guessedLetters.textContent="";        
        if(document.getElementById("0") != null){
            for(var i=0;i<wordchoice.length;i++){
            var el = document.getElementById(i.toString());
            currentWord.removeChild(el);
            }
        } 
        choice = Math.floor(Math.random() * 5);
        wordchoice = words[choice];
        for(var i=0;i<wordchoice.length;i++){
            spanChild =document.createElement("span");
            var spantxt = document.createTextNode("-");
            spanChild.setAttribute("id",i.toString());
            spanChild.appendChild(spantxt);
            currentWord.appendChild(spanChild); 
        }
    }
}