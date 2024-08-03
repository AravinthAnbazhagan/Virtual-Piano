document.addEventListener('keydown', function(event) {
    if (typeof(event.key)=="string"){
        var key = event.key.toLowerCase();
    }
    else{
        var key = event.key; 
    }

    if      (key === 'q')       document.getElementById('buttonQ').click();
    else if (key === 'w')       document.getElementById('buttonW').click();
    else if (key === 'e')       document.getElementById('buttonE').click();
    else if (key === 'r')       document.getElementById('buttonR').click();
    else if (key === 't')       document.getElementById('buttonT').click();
    else if (key === 'y')       document.getElementById('buttonY').click();
    else if (key === 'u')       document.getElementById('buttonU').click();
    else if (key === 'i')       document.getElementById('buttonI').click();
    else if (key === 'o')       document.getElementById('buttonO').click();
    else if (key === 'p')       document.getElementById('buttonP').click();
    else if (key === '[')       document.getElementById('button[').click();
    else if (key === ']')       document.getElementById('button]').click();
    else if (key === 'z')       document.getElementById('buttonZ').click();
    else if (key === 'x')       document.getElementById('buttonX').click();
    else if (key === 'c')       document.getElementById('buttonC').click();
    else if (key === 'v')       document.getElementById('buttonV').click();
    else if (key === 'b')       document.getElementById('buttonB').click();
    else if (key === 'n')       document.getElementById('buttonN').click();
    else if (key === 'm')       document.getElementById('buttonM').click();
    else if (key === ',')       document.getElementById('button,').click();
    else if (key === '.')       document.getElementById('button.').click();

    else if (key === '1')       document.getElementById('button1').click();
    else if (key === '2')       document.getElementById('button2').click();
    else if (key === 'a')       document.getElementById('buttonA').click();
    else if (key === 's')       document.getElementById('buttonS').click();
    else if (key === 'd')       document.getElementById('buttonD').click();
    else if (key === 'f')       document.getElementById('buttonF').click();
    else if (key === 'g')       document.getElementById('buttonG').click();
    else if (key === 'h')       document.getElementById('buttonH').click();
    else if (key === 'j')       document.getElementById('buttonJ').click();
    else if (key === 'k')       document.getElementById('buttonK').click();
    else if (key === 'l')       document.getElementById('buttonL').click();
    else if (key === ';')       document.getElementById('button;').click();
    else if (key === '8')       document.getElementById('button8').click();
    else if (key === '9')       document.getElementById('button9').click();
    else if (key === '0')       document.getElementById('button0').click();

});

function handleButtonClick(bId) {
    var audio;
    if (bId == "buttonQ")       audio = document.getElementById("audio_q");
    else if(bId == "buttonW")   audio = document.getElementById("audio_w");
    else if(bId == "buttonE")   audio = document.getElementById("audio_e");
    else if(bId == "buttonR")   audio = document.getElementById("audio_r");
    else if(bId == "buttonT")   audio = document.getElementById("audio_t");
    else if(bId == "buttonY")   audio = document.getElementById("audio_y");
    else if(bId == "buttonU")   audio = document.getElementById("audio_u");
    else if(bId == "buttonI")   audio = document.getElementById("audio_i");
    else if(bId == "buttonO")   audio = document.getElementById("audio_o");
    else if(bId == "buttonP")   audio = document.getElementById("audio_p");
    else if(bId == "button[")   audio = document.getElementById("audio_[");
    else if(bId == "button]")   audio = document.getElementById("audio_]");
    else if(bId == "buttonZ")   audio = document.getElementById("audio_z");
    else if(bId == "buttonX")   audio = document.getElementById("audio_x");
    else if(bId == "buttonC")   audio = document.getElementById("audio_c");
    else if(bId == "buttonV")   audio = document.getElementById("audio_v");
    else if(bId == "buttonB")   audio = document.getElementById("audio_b");
    else if(bId == "buttonN")   audio = document.getElementById("audio_n");
    else if(bId == "buttonM")   audio = document.getElementById("audio_m");
    else if(bId == "button,")   audio = document.getElementById("audio_,");
    else if(bId == "button.")   audio = document.getElementById("audio_.");

    else if(bId == "button1")   audio = document.getElementById("audio_1");
    else if(bId == "button2")   audio = document.getElementById("audio_2");
    else if(bId == "buttonA")   audio = document.getElementById("audio_a");
    else if(bId == "buttonS")   audio = document.getElementById("audio_s");
    else if(bId == "buttonD")   audio = document.getElementById("audio_d");
    else if(bId == "buttonF")   audio = document.getElementById("audio_f");
    else if(bId == "buttonG")   audio = document.getElementById("audio_g");
    else if(bId == "buttonH")   audio = document.getElementById("audio_h");
    else if(bId == "buttonJ")   audio = document.getElementById("audio_j");
    else if(bId == "buttonK")   audio = document.getElementById("audio_k");
    else if(bId == "buttonL")   audio = document.getElementById("audio_l");
    else if(bId == "button;")   audio = document.getElementById("audio_;");
    else if(bId == "button8")   audio = document.getElementById("audio_8");
    else if(bId == "button9")   audio = document.getElementById("audio_9");
    else if(bId == "button0")   audio = document.getElementById("audio_0");

    if (audio) {
        audio.play();
        var pianoKey = document.getElementById(bId);
        pianoKey.classList.add('shrink');
        pianoKey.addEventListener('animationend', function () {
            pianoKey.classList.remove('shrink');
        });
    }
}
