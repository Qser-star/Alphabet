  
    
    var arrLett = new Array();
    arrLett[0] = 'Aa';
    arrLett[1] = 'Bb';
    arrLett[2] = 'Cc';
    arrLett[3] = 'Dd';
    arrLett[4] = 'Ee';
    arrLett[5] = 'Ff';
    arrLett[6] = 'Gg';
    arrLett[7] = 'Hh';
    arrLett[8] = 'Ii';
    arrLett[9] = 'Jj';
    arrLett[10] = 'Kk';
    arrLett[11] = 'Ll';
    arrLett[12] = 'Mm';
    arrLett[13] = 'Nn';
    arrLett[14] = 'Oo';
    arrLett[15] = 'Pp';
    arrLett[16] = 'Qq';
    arrLett[17] = 'Rr';
    arrLett[18] = 'Ss';
    arrLett[19] = 'Tt';
    arrLett[20] = 'Uu';
    arrLett[21] = 'Vv';
    arrLett[22] = 'Ww';
    arrLett[23] = 'Xx';
    arrLett[24] = 'Yy';
    arrLett[25] = 'Zz';
   

    
    var audio = new Audio("audio/A.mp3");

    function gamePair(){
        var arrGame = new Array();
        for(var i =0;i<5;i++){
             
        }
    }

    
    function playAudio(id) { 
        id = id.substring(0, id.length -1);
        var audio = new Audio('audio/' + id +'.mp3');
  audio.play();
    } 
    
    function pauseAudio() { 
      x.pause(); 
    } 