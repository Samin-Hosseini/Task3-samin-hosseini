const createArray=()=>{
    const fruits = ["Apple", "Banana", "Orange", "Grapes"];
    

    const listForm=document.getElementById("fruits");
    for(let x=0 ; x< fruits.length ; x++){
        const option=document.createElement('option');
        option.value=fruits[x];
        listForm.appendChild(option);
    }

    document.getElementById("arraySize").innerText=fruits.length;

    console.log(fruits)
}