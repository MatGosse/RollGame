var activeplayer = 1; 
document.getElementById('playerdots'+ activeplayer).style.opacity="1";

function switchplayer(){
    document.getElementById('playerdots'+ activeplayer).style.opacity="0";
    if(activeplayer===1){
        activeplayer++;

    }else{
        activeplayer--;
    }
    document.getElementById('playerdots'+ activeplayer).style.opacity="1";
    
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
    console.log(scoreRoll);
    switch(scoreRoll){
        case 1:
            document.getElementById('cube').style.transform="rotate(0deg)";
            break;
        case 2:
            document.getElementById('cube').style.transform="rotateX(90deg)";
            break;
        case 3:
            document.getElementById('cube').style.transform="rotateY(-90deg)";
            break;
        case 4:
            document.getElementById('cube').style.transform="rotateY(90deg)";
            break;
        case 5:
            document.getElementById('cube').style.transform="rotateX(-90deg)";
            break;
        case 6:
            document.getElementById('cube').style.transform="rotateX(180deg)";
            break;
    }
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
        if(globalscore<100){
            globalscorescreen.value = globalscore;
            curentscore=0;
            curentscorescreen.value = 0;
        }else if(globalscore>=100){
            victory() 
        }
        switchplayer();
    }
}
function victory(){
    alert('Joueur ' + activeplayer + ' gagne la partie!');
    reset()
}
function reset(){
    document.querySelector('input[name="current_score_player_two"]').value = 0;
    document.querySelector('input[name="current_score_player_one"]').value = 0;
    document.querySelector('input[name="global_score_player_one"]').value = 0;
    document.querySelector('input[name="global_score_player_two"]').value = 0;
}