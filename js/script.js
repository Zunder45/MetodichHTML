var backCol;

var newZag = document.querySelectorAll("z");
//Заголовок
for (var i=0; i<newZag.length; i++){
    var title = newZag[i].title;
    var content = newZag[i].innerHTML;
    newZag[i].innerHTML = "<br><hr><div id='h3hr'><h4 >"+ title +"</h4>"+content+"</div><hr>";
    newZag[i].title = ""
}

var newBtt = document.querySelectorAll("btt");
//Кнопка
for (var i=0; i<newBtt.length; i++){
    var content = newBtt[i].innerHTML;
    var title = newBtt[i].title;
    newBtt[i].innerHTML = "<button id='bttOpPag' class='bttClss' name="+title+" onclick='openFile(this)'>"+content+"</button>";
    newBtt[i].title = ""
}

//Ссылки
var res = document.querySelectorAll("res");
for (var i=0; i<res.length; i++){
    var content = res[i].innerHTML;
    var title = res[i].title;
    var nameFile = content.split("/")
    res[i].innerHTML = "<p>"+title+"<br><a href="+content+">"+nameFile[nameFile.length - 1]+"</a></p>";
    res[i].title = ""
}

var bttOpPag = document.querySelectorAll("#bttOpPag");
for(var i=0; i<bttOpPag.length; i++){
    if(bttOpPag[i].name == localStorage.getItem("open_pege")){
        bttOpPag[i].classList.add("bttBorder");
        
    }
}
window.onload = function(){
    console.log("limon");
}


function openFile(btt){
    var pageId = document.getElementById("page");
    var bttOpPag = document.querySelectorAll("#bttOpPag");
    for(var i = 0; i < bttOpPag.length;i++){
        bttOpPag[i].classList.remove("bttBorder");
    }
    localStorage.setItem("open_pege",btt.name);
    // console.log(btt.name);
    pageId.src="pages/pages/"+btt.name+".html";
    btt.classList.add("bttBorder");
    
}
function hiddenF(){
    var leftP = document.querySelector("#leftPanel");
    var battLP = document.querySelector("#bttHid");
    if(leftP.style.display == "block"){
        leftP.style.display = "none";
        battLP.value = ">>";
    }
    else{
        leftP.style.display = "block";
        battLP.value = "<<";
    }
}
