


var autoTAB = true; //автоматическая табуляция



/*
    ++++++++++++++++============+++++++++++++++
*/

var body = document.getElementById("page_body");
var bttTheme = document.getElementById("bttTheme");
var thm;

window.onload = function(){
    lclstr();
}

function lclstr(){
    if(localStorage.getItem("theme") == null){
        localStorage.setItem("theme","dark");
        bttTheme.innerText = "Светлый";
    }
    if(localStorage.getItem("theme") == "light"){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        bttTheme.innerText = "Темный";
    }
    else if(localStorage.getItem("theme") == "dark"){
        body.style.backgroundColor = "#000F15";
        body.style.color = "white";
        bttTheme.innerText = "Светлый";
    }
}

function darkThemePg(btt){
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
        // btt.innerText = "Светлый";
    }
    else{
        localStorage.setItem("theme","light");
        // btt.innerText = "Темный";
    }
    lclstr();
}


var zagl = document.querySelectorAll("hp");
var imag = document.querySelectorAll("imag");
var c = document.querySelectorAll("c");
var p = document.querySelectorAll("p");
var tab = document.querySelectorAll("tab");

//Заголовок
for (var i=0; i<zagl.length; i++){
    var content = zagl[i].innerHTML;
    zagl[i].innerHTML = "<h1 style='text-align: center;'>"+content+"</h1>";
}
//Картинка
for (var i=0; i<imag.length; i++){
    var content = imag[i].title;
    var src = "../src/img/"+imag[i].innerHTML;
    imag[i].innerHTML = "<a href="+src+" target='_blank'><img src="+src+"></a><p class='bt'>"+content+"</p>";
    imag[i].title = ""
}

//цветной текст
for (var i=0; i<c.length; i++){
    var content = c[i].innerHTML;
    var color = "style='color:"+c[i].title+"'";
    c[i].innerHTML = "<span "+color+">"+content+"</span>";
    c[i].title = ""
}

//автоматическая табуляция
if(autoTAB){
    for (var i=0; i<p.length; i++){
        var content = p[i].innerHTML;
        p[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp"+content;
    }
}


