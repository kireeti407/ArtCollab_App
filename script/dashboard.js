import auth from "../main.js"
import {onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
window.addEventListener("DOMContentLoaded", async()=>{
    try{
    let img=document.getElementById("image")
    let profile=document.getElementById("profile")
    let close=document.getElementById("close")
    let postproject=document.getElementById("post-project")
    let post=document.getElementById("post")
    let main=document.getElementById("main")
    let posted=document.getElementById("posted")
    let postbtn=document.getElementById("post-btn")
    let namefe=document.getElementById("namefe")
    let editbtn=document.getElementById("editbtn")
    let edit=document.getElementById("edit")
    let editclose=document.getElementById("editclose")
    let logout=document.getElementById("logout")
    let editprofile=document.getElementById("editprofile")
    let userd={}||JSON.parse(localStorage.getItem("user"))
    let projects=[]
    let usermail=''||localStorage.getItem("email")
    let filterd=document.getElementById("filter")
    let profilepic=document.getElementById("profilePic")
    // let delet=document.getElementById("delete")

    //dark mode
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
    
    img.addEventListener("click",()=>{
        profile.style.display="flex"
    })
    close.addEventListener("click",()=>{
        profile.style.display="none"
    })

    postproject.addEventListener("click",()=>{
        post.style.display="flex"
        
        
    })
    posted.addEventListener("click", async()=>{
        let title=document.getElementById("title").value
        let discription=document.getElementById("discription").value
        let category=document.getElementById("category").value
        let data={
            
            title,
            discription,
            category,
            uid:userd.id,
            img:userd.img,
            name:userd.name,
            email:userd.email
        }
        let res=await fetch("https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json",{
            method:"POST",
            head:{"content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        post.style.display="None"
        fetchdata()
    })

    postbtn.addEventListener("click",()=>{
        post.style.display="none"
    })

    editbtn.addEventListener("click",()=>{
        edit.style.display="block"
        profile.style.display="none"
    })
    editclose.addEventListener("click",()=>{
        edit.style.display="none"
    })
    await onAuthStateChanged(auth,async (user)=>{
        if(user){
            let res=await fetch("https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Profile.json")
             let data= await res.json()
             let email=Object.entries(data).map(([id,e])=>{
                  return {id,...e}
             })
             let mail=email.find(e=>e.email==user.email)
             userd=mail
             localStorage.setItem("email",mail.email)
             namefe.innerText+=" "+mail.name
             let bi=document.getElementById("p-bio")
             let skill=document.getElementById("p-skills")
             let nam=document.getElementById("name")
             let mainprofile=document.getElementById("mainprofile")
             let himg=document.getElementById("himg")
             himg.style.backgroundImage=`url("${mail.img}")`
             mainprofile.style.backgroundImage=`url("${mail.img}")`
             nam.innerText=userd.name
             bi.innerText=userd.bio
             skill.innerText=userd.field
             fetchdata()
        }
        else{
            window.location.href='../index.html'
        }
            
    })
        logout.addEventListener("click",async()=>{
            await signOut(auth)
            window.location.href='../index.html'
        })
        editprofile.addEventListener("click",async()=>{

            const file = document.getElementById("profilePic").files[0];
            const formData = new FormData();
      
            formData.append("file", file);
            formData.append("upload_preset", "jobportal"); 
      
            let res1=await fetch("https://api.cloudinary.com/v1_1/dg931dlw7/image/upload", {
              method: "POST",
              body: formData
            })
            let data1=await res1.json()
            let displayName=document.getElementById("displayName").value
            let bio=document.getElementById("bio").value
            let skills=document.getElementById("skills").value
            let data={
                img:(file)?data1.secure_url:userd.img,
                name:(displayName)?displayName:userd.name,
                bio:(bio)?bio:userd.bio,
                field:(skills)?skills:userd.field
            }
            let res=await fetch(`https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Profile/${userd.id}.json`,{
                method:"PATCH",
                header:{"content-Type":"application/json"},
                body:JSON.stringify({...userd,...data})
            })
             let bdata=await res.json()
           
             let bi=document.getElementById("p-bio")
             let skill=document.getElementById("p-skills")
             let nam=document.getElementById("name")
             let mainprofile=document.getElementById("mainprofile")
            let himg=document.getElementById("himg")
             himg.style.backgroundImage=`url("${bdata.img}")`
             mainprofile.style.backgroundImage=`url("${bdata.img}")`
             nam.innerText=bdata.name
             bi.innerText=bdata.bio
             skill.innerText=bdata.field
             
             localStorage.setItem("user",JSON.stringify(bdata))
             edit.style.display="none"
        })

        //filter by catogery
        filterd.addEventListener("click",async()=>{

            let categoryFilter=document.getElementById("categoryFilter").value
            if(categoryFilter!='all'){
                let project=projects.filter((e)=>{
                    return categoryFilter==e.category
                })
                display(project)
            }
            else{
                display(projects)
            }
            
        })

        async function fetchdata(){
            let res1=await fetch("https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json")
            let data1= await res1.json()
            let project=Object.entries(data1).map(([id,e])=>{
                 return {id,...e}
            })
  
            projects=project
            display(project)
        }
        let cardc=document.getElementById("cardc")
        let card=document.getElementById("card")
        cardc.addEventListener("click",()=>{
            card.style.display="none"
        })

        function display(project){
            main.innerHTML=''
            project.forEach((e)=>{
                let div=document.createElement("div")
                //let button=(e.email==usermail)?`<button value="${e.id}" id="delete">Delete</button>`:''
                if(e.img){
                    let p=document.createElement("img")
                    p.src=e.img
                    p.style.width="50px"
                    p.style.borderRadius="50%"
                    div.appendChild(p)
                }
                div.innerHTML+=`
                    <span><b>Name: </b>${e.name}</span>
                    <span><b>Title: </b>${e.title}</span>
                    <span><b>Catgory: </b>${e.category}</span>
                    <p><b>Discription :</b></p>
                    <span>${e.discription}</span>
                `
                if(e.email==usermail){
                    let button=document.createElement("button")
                        button.addEventListener("click",async()=>{
                        await fetch(`https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Projects/${e.id}.json`,{
                                    method:"DELETE"
                            })
                            fetchdata()
                    })
                    
                    button.value=e.id
                    button.innerText="Delete"
                    div.appendChild(button)
                }
                else{
                    let button2=document.createElement("button")
                    button2.innerText="see profile"
                    button2.addEventListener("click",async()=>{
                        let card=document.getElementById("card")
                        card.style.display="flex"
                        let proimg=document.getElementById("proimg")
                        let pname=document.getElementById("pname")
                        let pbio=document.getElementById("pbio")
                        let pskills=document.getElementById("pskills")
                            let res=await fetch(`https://artcollab-app-default-rtdb.asia-southeast1.firebasedatabase.app/Profile/${e.uid}.json`)
                            let data=await res.json()
                            proimg.src=data.img
                            pname.innerText=data.name
                            pbio.innerText=data.bio
                            pskills.innerText=data.field
                        button2.href="#card"
                    })
                    let button=document.createElement("button")
                    button.innerText="feedback"
                    let div2=document.createElement("div")
                    div2.append(button,button2)
                    div2.id="projectbutton"
                    div.appendChild(div2)
                }
                main.appendChild(div)
            })
        }
        fetchdata()
       
    }
    catch(err){
        console.log(err)
    }
})




