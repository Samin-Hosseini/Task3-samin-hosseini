const getCurrentTime=()=>{
    const currentTime= new Date();
    alert(currentTime)
}

const handleMouseOver=()=>{
    document.getElementById("mouseOverText").style.backgroundColor="red";
}

const handleMouseOut=()=>{
    document.getElementById("mouseOverText").style.backgroundColor="";
}