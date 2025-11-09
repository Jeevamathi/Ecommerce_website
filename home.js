let btn = document.querySelector("button")
console.log(btn);

let h2 = document.createElement("h2")
let USERNAME = localStorage.getItem("USERNAME")
h2.innerText = `${USERNAME}`

btn.before(h2)

let getData = async()=>{
    try{
        let fetData =await fetch("https://fakestoreapi.com/products")
        // console.log(fetData);

        let data = await fetData.json()
        display(data);
    }
    catch(err){
        console.log(err);   
    }
}
getData()

let main = document.querySelector("main")
console.log(main);

let display = (data) =>{
    data.map((ele)=>{
        console.log(ele);
        
        let div = document.createElement("div")
        console.log(div);
        

        div.classList.add("card")
        div.innerHTML = `<img src=${ele.image}>
        <h4>Title : ${ele.title}</h4>`
    
        main.append(div)
    })
}
