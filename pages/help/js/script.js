window.onload = function(){
    // var ul = document.querySelector("#bg button");
    // console.log(ul.parentElement.id);
}

function closeIl(idd){
    var idBtt = (idd.parentElement.id);
    var obj = document.querySelector("#"+idBtt);
    var log = obj.children;
    for (let elem of log) {
        if(elem.tagName == "LI"){
            if(elem.style.display == "block"){
                elem.style.display = "none";
            }
            else{
                elem.style.display = "block";
            }
        }
    }

}