const showBlog =()=>window.location.href=('blog.html');




const showAllCatagory =async()=>{
const res =await fetch("https://openapi.programming-hero.com/api/videos/categories");
const data = await res.json();
createButton(data.data);
}

const createButton =(catagoryLIst)=>{
    const addBUtton = document.getElementById("add-button");
    catagoryLIst.forEach(item=> {
       const button = document.createElement("button");
   
    button.classList=`btn mx-2 bg-slate-300`
       button.innerText=`${item.category}`
       addBUtton.appendChild(button);
    });
}
showAllCatagory();