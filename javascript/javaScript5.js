const securePass=()=>{
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/; 
    const password = document.getElementById("password").value;
    if (password.length >= 10 ) {
        alert(" طول رمز عبور مناسب است");
    } else {
        alert("رمز عبور باید حداقل 10 کاراکتر باشد");
    }
}