navigator.getBattery().then(function(bat){
    var currentlevel= bat.level*100;
    if(currentlevel>=70){
        color=  'rgb(23, 250, 23)';
    }
    else if(currentlevel<=70&&currentlevel>=30){
        color= 'hsl(60, 100%, 50%)'
    }
    else{
        color= '#ff0000'
    }
    document.getElementById("op").style.backgroundColor=color
 document.getElementById("op").style.width= `${4*Number(currentlevel)}px`
document.getElementById("status").innerHTML= currentlevel+'%'

var adapator= bat.charging
if(adapator){
    document.getElementById("plug").innerText="Plug ON"
}
else{
    document.getElementById("plug").innerText="Plug OFF"}

    }) 