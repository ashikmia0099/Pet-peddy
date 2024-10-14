
// show all card data

const DisplayCard =async () => {

    try{
        const Card_data = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
        const data = await Card_data.json()
        // console.log(data)
        DisplayCardData(data.pets)
    }
        
    catch(error){
        console.log("Error feching user",error)

    }
}

DisplayCard()


// const DisplayCardData = (data) => {

//     const cardContainer = document.getElementById('CardDiv')

//     data.forEach((item) =>{
//         // console.log(item)

//         const card = document.createElement('div');
//         card.classList = 'card'
//         card.innerHTML = 
        
//         `
//          <div class="card bg-base-100 shadow-xl p-5 sm: col-span-1 md:col-span-2 border border-gray-300">
          
//             <img src=${item.image} alt="Shoes" class="rounded-md" />
         
//           <div class=" pt-5">
//             <div class="border-b-2 border-gray-300">
//               <h2 class="card-title text-2xl font-bold">${item.pet_name} </h2>
              
//               <p class="text-lg	font-semibold	pt-2 "> <i class="fa-solid fa-grid"></i> <span>Breed: ${item.breed} </span></p>
//               <p class="text-lg	font-semibold	pt-2 "> <i class="fa-regular fa-calendar-days"></i> <span>Birth: ${item.date_of_birth}</span></p>
//               <p class="text-lg	font-semibold	pt-2 "> <i class="fa-solid fa-venus"></i> <span>Gender: ${item.gender}</span></p>
//               <p class="text-lg	font-semibold	pt-2 pb-2 "> <i class="fa-solid fa-dollar-sign"></i> <span id="sort-price">Price: ${item.price}$</span></p>
              
    
//             </div>
           
//             <div class="flex  gap-2 pt-3 justify-between">
//               <button class="btn like-button"><i class="fa-regular fa-thumbs-up text-2xl font-bold"></i></button>
//               <button class="btn text-[#0E7A81] text-lg font-bold">Adopt</button>
//               <button class="btn text-[#0E7A81] text-lg font-bold">Details</button>
//             </div>
//           </div>
//         </div>
        
        
        
        
//         `;
//         cardContainer.append(card)


//         // like imge card show

//         const SelectedImageContainer = document.getElementById('selected-images-container');
//         const LikeButton = card.querySelector('.like-button');

//         LikeButton.addEventListener('click', () => {

//             const selectedImage = document.createElement('img');
//             selectedImage.src = item.image;
//             selectedImage.alt = item.pet_name;
//             selectedImage.classList.add('rounded-md', 'p-2');
        
//             SelectedImageContainer.appendChild(selectedImage)
            
//         });


//         // sorting by price

//         const SortButton = document.getElementById('Sort-button');
//         const SortPrice = document.getElementById('sort-price');


//         SortButton.addEventListener('click', () => {

//         });


//     });

// };







const DisplayCardData = (data) => {

    const cardContainer = document.getElementById('CardDiv')

    const ShowSortCard = (cardData) => {
        cardContainer.innerHTML = '';

        if(data.length == 0){

            cardContainer.innerHTML = 
            `
            

        <div class="text-center m-auto"> 
            <img src="assets/error.webp" alt="" class="m-auto h-32 w-32">
            <h1 class="text-4xl font-bold pt-3">No Information Available</h1>
            <p class=" m-auto pt-3 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
                its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
            
            
            `
            
            ;
            return

        }

        cardData.forEach((item) =>{
            // console.log(item)
    
            const card = document.createElement('div');
            card.classList = 'card'
            card.innerHTML = 
            
            `
             <div class="card bg-base-100 shadow-xl p-5 sm: col-span-1 md:col-span-2 border border-gray-300 mt-2">
              
                <img src=${item.image} alt="Shoes" class="rounded-md" />
             
              <div class=" pt-5">
                <div class="border-b-2 border-gray-300">
                  <h2 class="card-title text-2xl font-bold">${item.pet_name} </h2>
                  
                  <p class="text-lg	font-semibold	pt-2 "> <i class="fa-solid fa-grid"></i> <span>Breed: ${item.breed} </span></p>
                  <p class="text-lg	font-semibold	pt-2 "> <i class="fa-regular fa-calendar-days"></i> <span>Birth: ${item.date_of_birth}</span></p>
                  <p class="text-lg	font-semibold	pt-2 "> <i class="fa-solid fa-venus"></i> <span>Gender: ${item.gender}</span></p>
                  <p class="text-lg	font-semibold	pt-2 pb-2 "> <i class="fa-solid fa-dollar-sign"></i> <span id="sort-price">Price: ${item.price}$</span></p>
                  
        
                </div>
               
                <div class="flex  gap-2 pt-3 justify-between">
                  <button class="btn like-button"><i class="fa-regular fa-thumbs-up text-2xl font-bold"></i></button>
                  <button id="adopt-button" onclick="AdoptButton()" class="btn text-[#0E7A81] text-lg font-bold">Adopt</button>
                  <button onclick="LoadDeails('${item.petId}')" class="btn text-[#0E7A81] text-lg font-bold">Details</button>
                </div>
              </div>
            </div>
            
            
            
            
            `;
            cardContainer.append(card)
    
    
            // like imge card show
    
            const SelectedImageContainer = document.getElementById('selected-images-container');
            const LikeButton = card.querySelector('.like-button');
    
            LikeButton.addEventListener('click', () => {
    
                const selectedImage = document.createElement('img');
                selectedImage.src = item.image;
                selectedImage.alt = item.pet_name;
                selectedImage.classList.add('rounded-md', 'p-2');
            
                SelectedImageContainer.appendChild(selectedImage)
                
            });
    
        });
    };

    ShowSortCard(data)
    // sorting by price

    const SortButton = document.getElementById('Sort-button');
    


    SortButton.addEventListener('click', () => {
        const sortedData = [...data].sort((a, b) => b.price - a.price);
        ShowSortCard(sortedData)

    });
    
    
   

};



// pets details

const LoadDeails =async (imageId) => {
    console.log(imageId);
    
    const uri =`https://openapi.programming-hero.com/api/peddy/pet/${imageId}`;
    const res = await fetch(uri);
    const data = await res.json()
    console.log(data)
    DisplayDetails(data.petData)
}


const DisplayDetails = (petData) => {

    console.log(petData)
    const detailsContainer = document.getElementById('modal-content')

    detailsContainer.innerHTML = 
    `
   

        <img src='${petData.image}' alt="" class="rounded-lg w-full">
        <div class="border-b-2 border-gray-300 gap-3">
        <h1 class="text-2xl font-bold pt-2">${petData.pet_name}</h1>
        <p>Breed: ${petData.breed} </p>
        <p>Gender: ${petData.gender} </p>
        <p>Vacclned status: ${petData.vaccinated_status} </p>
        <p>Birth: ${petData.date_of_birth} </p>
        <p class="pb-2">Price: ${petData.price}$ </p>
        </div>
        <div>
        <h1 class="text-2xl font-bold pt-2">Details Information</h1>
        <p class=" pt-2">${petData.pet_details}</p>
        </div>
    `

    document.getElementById('showModelData').click();

}





// load Category button



const DisplayCategoryButton = async () => {
    try{

        const category = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
        const data = await category.json();
        
        // console.log(data)

        DispalyCategoryData(data.categories)

    }
    catch(error){
        console.log("Error feching user",error)

    }

}


DisplayCategoryButton()



const DispalyCategoryData = (categoriesData) => {

    const categoryContainer = document.getElementById('category-button-id')

    categoriesData.forEach((item) => {

        // console.log(item)
        const buttonContainer = document.createElement('div');
        
        buttonContainer.innerHTML = 
        
        `

        <button id="btn-${item.category}" onclick='LoadCategoryVideo("${item.category}")' class="btn btn-outline btn-info  text-white text-xl mt-5 px-10 pt-2 pb-2 categorybutton"> <img src=${item.category_icon} class="h-7 w-7" alt="">${item.category} </button>
        
        `;
        categoryContainer.append(buttonContainer);

    })

    

}


// // load category data by category id


const LoadCategoryVideo = async (category) => {
    try {
       
        const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`);
        const res = await response.json();
        
        console.log(res.data);
        DisplayCardData(res.data); 

        removeActiveClass();

        const activeBtn = document.getElementById(`btn-${category}`);
        activeBtn.classList.add("rounded-full", 'bg-[#E6F1F2]');

    } 
    catch (error) {
        console.log('Error fetching data', error);
    }
};



// const LoadCategoryVideo = (category) => {
    

//     fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data.data))
//     .catch((error) => console.log(error))

// }




// Adopt button data


// remove active button categorybutton

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("categorybutton");
    console.log(buttons);
    for (let btn of buttons) {
      btn.classList.remove("rounded-full", 'bg-[#E6F1F2]');
    }
  };




const AdoptButton = () => {
    // console.log('Adopt Button');

    const modal = document.getElementById('my_modal_1');
    const TimeContainer = document.getElementById('CoundownModel');

    modal.showModal();

    let counter = 3

    TimeContainer.innerHTML = 
    
    `

     <h1 class="text-center text-3xl font-bold pb-3">Congrates</h1>
      <h1 class="text-center text-xl font-bold pb-3">Adeption Process is start for your pet</h1>
      <h1 class="text-center">
        <span class="countdown font-mono text-6xl m-auto">
          <span style="--value:${counter};" class="text-center m-auto"></span>
          </span>
      </h1>


    `;
    document.getElementById('ShowCountData').click();

    

    const CountDownIntarval = setInterval(() => {
        counter--;

        TimeContainer.innerHTML = 
    
        `

        <h1 class="text-center text-3xl font-bold pb-3">Congrates</h1>
        <h1 class="text-center text-xl font-bold pb-3">Adeption Process is start for your pet</h1>
        <h1 class="text-center">
            <span class="countdown font-mono text-6xl m-auto">
            <span style="--value:${counter};" class="text-center m-auto"></span>
            </span>
        </h1>


        `;

        if(counter <= 0){
            clearInterval(CountDownIntarval);
            modal.close();
        }

    }, 3000);


}











// card object

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }


// button object

// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }



// cat data by id

// {
//     "petId": 2,
//     "breed": "Siamese",
//     "category": "Cat",
//     "date_of_birth": "2022-09-05",
//     "price": 800,
//     "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
//     "gender": "Female",
//     "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Mia"
// }





// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
//   },