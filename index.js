






function open22(){
    document.getElementById('openbtn').style.transform = "rotate(180deg)";
    setTimeout(() => {
     document.getElementById('openbtn').style.display = "none";
     document.getElementById('openbtn').style.overflow = "hidden";
     document.getElementById('listo').style.display = "block";
     document.getElementById('closebtn').style.display = "block";
    },700);
   
}

function close22(){
    document.getElementById('closebtn').style.transform = "rotate(180deg)";
    setTimeout(() => {
     document.getElementById('listo').style.display = "none";
     document.getElementById('openbtn').style.display = "block";
     document.getElementById('closebtn').style.display = "none";
     document.getElementById('closebtn').style.overflow = "hidden";
     document.getElementById('listo').style.overflow = "hidden";
    },700);
}

