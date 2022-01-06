var activeplayer = 1; 

function play(){
    if(activeplayer===1){
        var curentscorescreen = document.querySelector('input[name="current_score_player_one"]');
        var curentscore = parseInt(curentscorescreen.value);
    }else {
        var curentscorescreen = document.querySelector('input[name="current_score_player_two"]');
        var curentscore = parseInt(curentscorescreen.value);
    }
    var scoreRoll = Math.floor(Math.random()*6)+1;
    if(scoreRoll===1){
        alert('');
        curentscore=0;
        curentscorescreen.value = 0;
        switchplayer();
    }else{
        curentscore += scoreRoll;
        curentscorescreen.value = curentscore; 
    }
}

function switchplayer(){
    if(activeplayer===1){
        activeplayer++;
    }else{
        activeplayer--;
    }
    console.log('le joueur actif est' + activeplayer);

}