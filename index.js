import auth from "./main.js"
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
window.addEventListener("DOMContentLoaded",async()=>{
    let login=document.getElementById("login")
    let singup=document.getElementById("singup")
    let a11=document.getElementById("a11")
    let a1=document.getElementById("a1")

    let a12=document.getElementById("a12")
    let a2=document.getElementById("a2")

    let a13=document.getElementById("a13")
    let a3=document.getElementById("a3")
    let projects=[]

    const toggleBtn = document.getElementById('toggleThemeBtn');
    window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️ Light Mode';
    }
  };
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });




    login.addEventListener("click",()=>{
        window.location.href="./script/login.html"
    })
    singup.addEventListener("click",()=>{
        window.location.href="./script/singup.html"
    })
    let a11f=true
    a11.addEventListener("click",()=>{
        a1.style.display=(a11f)?"inline":"none"
        a11f=(a11f)?false:true
    })


    let a12f=true
    a12.addEventListener("click",()=>{
        a2.style.display=(a12f)?"inline":"none"
        a12f=(a12f)?false:true
    })

    let a13f=true
    a13.addEventListener("click",()=>{
        a3.style.display=(a13f)?"inline":"none"
        a13f=(a13f)?false:true
    })
    await onAuthStateChanged(auth,(user)=>{
        if(user) window.location.href="./script/Dashboard.html"
    })
    async function fetchdata(){
        let res1=await fetch("https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json")
        let data1= await res1.json()
        let project=Object.entries(data1).map(([id,e])=>{
             return {id,...e}
        })
        console.log(project)
        projects=project
        display()
    }
    function display(){
        main.innerHTML=''
        projects.forEach((e)=>{
            let div=document.createElement("div")
            if(e.img){
                let p=document.createElement("img")
                p.src=e.img
                p.style.width="50px"
                p.style.borderRadius="50px"
                div.appendChild(p)
            }
            div.innerHTML+=`
                 <span><b>Name: </b>${e.name}</span>
                <span><b>Title: </b>${e.title}</span>
                <span><b>Catgory: </b>${e.category}</span>
                <p><b>Discription :</b></p>
                <span>${e.discription}</span>
            `
            main.appendChild(div)
        })
    }
    fetchdata()
})


