var activeplayer = 1; 
function switchplayer(){
    if(activeplayer===1){
        activeplayer++;
    }else{
        activeplayer--;
    }
    console.log('le joueur actif est' + activeplayer);
}
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
        curentscore=0;
        curentscorescreen.value = 0;
        switchplayer();
    }else{
        curentscore += scoreRoll;
        curentscorescreen.value = curentscore; 
    }
}
function save(){
    if(activeplayer===1){
        var globalscorescreen = document.querySelector('input[name="global_score_player_one"]');
        var globalscore = parseInt(globalscorescreen.value);
        var curentscorescreen = document.querySelector('input[name="current_score_player_one"]');
        var curentscore = parseInt(curentscorescreen.value);
    }else {
        var globalscorescreen = document.querySelector('input[name="global_score_player_two"]');
        var globalscore = parseInt(globalscorescreen.value);
        var curentscorescreen = document.querySelector('input[name="current_score_player_two"]');
        var curentscore = parseInt(curentscorescreen.value);
    }

    if(curentscore != 0){
        globalscore += curentscore;
        if(globalscore<99){
            globalscorescreen.value = globalscore;
            curentscore=0;
            curentscorescreen.value = 0;
        }else if(globalscore===100){
            victory() 
        }else{
            curentscorescreen.value = 0;
        }
        switchplayer();
    }
}
function victory(){
    alert('Joueur ' + activeplayer + ' gagne la partie!');
}