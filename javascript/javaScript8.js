const testUnshift=()=>{
    const fruits = ["Banana", "Orange", "Grapes"];
    const oldfruits = [...fruits];
    console.log(fruits.unshift("Apple"));
    alert(fruits.join())
    console.log(fruits);

    document.getElementById("beforeArray").innerText=oldfruits.join();
}