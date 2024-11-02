const createObject=()=>{
    const person={
        firstName:"samin",
        lastName:"hosseini",
        age:22,
    }
    console.log(person)

    const listForm=document.getElementById("person");
        for (let x in person){
        const option=document.createElement('option');
        option.value=person[x];
        listForm.appendChild(option);
        }
}

