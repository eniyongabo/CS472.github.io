var display;
var startbtn;
var stopbtn;
var selectedAnimation;
var selectedSize;
var turboChecker;
var timeOut;
var animationSpeed = 250;

var loadData = () =>{
    display = document.getElementById("display");
    startbtn = document.getElementById("start");
    stopbtn = document.getElementById("stop");
    selectedAnimation = document.getElementById("animation");
    selectedSize = document.getElementById("size");
    turboChecker = document.getElementById("turbo");

    stopbtn.disabled = true;
};

window.onload = () => {

    loadData();
    //console.log("it is here");
   

    selectedAnimation.onchange = () =>  {
        //console.log('Selecting ${selectedAnimation.value}');
        display.value = ANIMATIONS[selectedAnimation.value];
    };

    selectedSize.onchange = () =>{
            var fontSize = $("#size").val();
            if(fontSize === "7pt"){
                $("#display").css("fontSize","7pt");
            }
            if(fontSize === "10pt"){
                $("#display").css("fontSize","10pt");
            }
            if(fontSize === "12pt"){
                $("#display").css("fontSize","12pt");
            }
            if(fontSize === "16pt"){
                $("#display").css("fontSize","16pt");
            }
            if(fontSize === "24pt"){
                $("#display").css("fontSize","24pt");
            }
            if(fontSize === "32pt"){
                $("#display").css("fontSize","32pt");
            }
    
    
    };

    turboChecker.onchange = () => {
        if(turboChecker.checked){
            animationSpeed = 50;
        }
        else{
            animationSpeed = 250;
        }
    };

    startbtn.onclick = () => {
        //console.log("starting");
        stopbtn.disabled = false;
        startbtn.disabled = true;
        selectedAnimation.disabled = true;

        let texts = ANIMATIONS[selectedAnimation.value].split("=====\n");
        let idx = 0;
        
        var displayFunction = function() {
            display.value = texts[idx];
            idx = (idx + 1) % texts.length;
            timeOut = setTimeout(displayFunction, animationSpeed);
        };
        timeOut = setTimeout(displayFunction, animationSpeed);
    };

    stopbtn.onclick = () => {
        stopbtn.disabled = true;
        startbtn.disabled = false;
        selectedAnimation.disabled = false;
        clearTimeout(timeOut);
        display.value = ANIMATIONS[selectedAnimation.value];
    };
};