let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let username = document.getElementById("un").value
    console.log(username);
    
    let password = document.getElementById("pw").value
    console.log(password);

    let login_username = localStorage.getItem("USERNAME")
    let login_password = localStorage.getItem("PASSWORD")

    console.log(login_username,login_password);
    
    if(login_username==username && login_password==password){
        alert("login done successfully")
        open("./home.html","_self");
    }
    else{
        alert("wrong credential")
    }
})