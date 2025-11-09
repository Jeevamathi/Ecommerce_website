let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let username = document.getElementById("un").value
    console.log(username);

    let email = document.getElementById("eid").value
    console.log(email);

    let password = document.getElementById("pw").value
    console.log(password);

    localStorage.setItem("USERNAME",username)
    localStorage.setItem("EMAIL",email)
    localStorage.setItem("PASSWORD",password)

    alert("signup done")
    open("./login.html","_self");
})

// ! localstorage
// .setItem(key,value)

localStorage.setItem("name","jeevamathi")
localStorage.setItem("n","jeeva")

// .getItem(key)

console.log(localStorage.getItem("name"));

localStorage.removeItem("n");
