
function updatenum(a,b,c){
    if(c == "0"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "none";

    }
    if(c == "1"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "none";

    }
    if(c == "2"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";

    }
    if(c == "3"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";

    }
    if(c == "4"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";

    }
    if(c == "5"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";

    }
    if(c == "6"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";

    }
    if(c == "7"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "none";

    }
    if(c == "8"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";

    }
    if(c == "9"){
        a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-2').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
        a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
        a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";

    }


}

function updateclock(){
    var now = new Date();
    var hou = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var pe = "AM"
    if(hou == 0){
        hou = 12;
    }
    if (hou >12){
        hou = hou - 12;
        pe = "PM"
    }
    const hous = hou+'';
    const mins = minute+'';
    const secs = second+'';
    ///var h1 = "";


    if (hou < 10){
        var h1 = "0";
        var h2 = hous;


    }else{
        var h1 = hous[0];
        var h2 = hous[1];

    }
    if (minute < 10){
        var m1 = "0";
        var m2 = mins;


    }else{
        var m1 = mins[0];
        var m2 = mins[1];

    }
    if (second < 10){
        var s1 = "0";
        var s2 = secs;


    }else{
        var s1 = secs[0];
        var s2 = secs[1];

    }
    const hourContainer = document.querySelector('.container').querySelector('.hour-container');
    const minuteContainer = document.querySelector('.container').querySelector('.minute-container');
    const secondContainer = document.querySelector('.container').querySelector('.second-container');
    updatenum(hourContainer,'number-container-1',h1);
    updatenum(hourContainer,'number-container-2',h2);
    updatenum(minuteContainer,'number-container-1',m1);
    updatenum(minuteContainer,'number-container-2',m2);
    updatenum(secondContainer,'number-container-1',s1);
    updatenum(secondContainer,'number-container-2',s2);

    document.querySelector('#period').innerHTML = pe;
}

document.addEventListener('DOMContentLoaded',function(){
    setInterval(updateclock,1000);
});


