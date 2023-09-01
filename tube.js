const showBlog = () => window.location.href = ('blog.html');





const showAllCatagory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    createButton(data.data);
}

const createButton = (catagoryLIst) => {
    const addBUtton = document.getElementById("add-button");
    catagoryLIst.forEach(item => {
        const button = document.createElement("button");

        button.classList = `btn mx-2 bg-slate-300`
        button.innerText = `${item.category}`
        addBUtton.appendChild(button);
        button.addEventListener("click", function () {
            buttonClicked(item.category_id  );
         
            
        })
    });
}


const  buttonClicked = async(category_id) => {
   
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
    const cardDetails=await res.json();
    const cardDetail =cardDetails.data;
   
    const addCard = document.getElementById("add-card");
    addCard.textContent="";
   
    document.getElementById("sort").addEventListener("click",function(){
        addCard.textContent="";
        const cardDetail1=[...cardDetail];
       cardDetail1.sort((a,b)=>{
         const view1= parseInt(a.others.views.replace('K',''));
         const view2= parseInt(b.others.views.replace('K',''));
         return view2-view1;
 });
    addCard.classList=`grid gap-4 md:grid-cols-2 lg:grid-cols-4 `
    cardDetail1.forEach(catagory => {
        const div = document.createElement("div");
        
      
        div.classList = `card  bg-base-100 shadow-xl p-4 `;
        div.innerHTML=`
        <figure><img class="h-[300px]" src=${catagory.thumbnail} alt="Shoes" /></figure>
     <div class="card-body">
     <div class="flex gap-2 "> <img class="w-10 h-10 rounded-full " src=${catagory.authors[0].profile_picture} alt="">
     <h2 class="card-title">${catagory.title}</h2>
     </div>
       <div class="">
       <p>${catagory.authors[0].profile_name} <span>   <i class="fa-solid fa-circle-check"></i></span></p>
 
       <p>${catagory.others.views} Views</p>
       </div>
       
     </div>
        `
       
      
     
     addCard.appendChild(div);
     
    });
       
    
    })
   
    if(cardDetail.length>0){
        addCard.classList=`grid gap-4 md:grid-cols-2 lg:grid-cols-4 `
    cardDetail.forEach(catagory => {
        const div = document.createElement("div");
        
      
        div.classList = `card  bg-base-100 shadow-xl p-4 `;
      
        div.innerHTML=`
        <figure><img class="h-[300px]" src=${catagory.thumbnail} alt="Shoes" /></figure>
     <div class="card-body">
     <div class="flex gap-2 "> <img class="w-10 h-10 rounded-full " src=${catagory.authors[0].profile_picture} alt="">
     <h2 class="card-title">${catagory.title}</h2>
     </div>
       <div class="">
       <p>${catagory.authors[0].profile_name} ${ }
       
       <p>${catagory.others.views} Views</p>
       </div>
       
     </div>
        `
       
     
     addCard.appendChild(div);
    });
}
else{
    addCard.classList=`flex justify-center `
    const div = document.createElement("div");
    div.classList=`my-20`
    div.innerHTML=`
    <img class="ml-32 md:ml-64 lg:ml-72   " src="images/Icon.png" alt="">
<h3 class="text-4xl font-semibold p-4">Oops!! Sorry, There is no content here</h3>
    `
    addCard.appendChild(div);


   }
  
}
buttonClicked("1000");

showAllCatagory();