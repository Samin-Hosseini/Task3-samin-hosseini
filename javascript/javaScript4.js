const createArray=()=>{
    const fruits = ["Apple", "Banana", "Orange", "Grapes","Apple","Orange"];

    const uniqueFruits1 = new Set(fruits);
    const uniqueFruits2 = [...new Set(fruits)];

    console.log(uniqueFruits1);
    console.log(uniqueFruits2);
}