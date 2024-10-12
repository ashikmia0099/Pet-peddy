
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


const DisplayCardData = (data) => {

    const cardContainer = document.getElementById('CardDiv')

    data.forEach((item) =>{
        // console.log(item)

        const card = document.createElement('div');
        card.classList = 'card'
        card.innerHTML = 
        
        `
         <div class="card bg-base-100 shadow-xl p-5 sm: col-span-1 md:col-span-2 border border-gray-300">
          
            <img src=${item.image} alt="Shoes" class="rounded-md" />
         
          <div class=" pt-5">
            <div class="border-b-2 border-gray-300">
              <h2 class="card-title text-2xl font-bold">${item.pet_name} </h2>
              
              <p class="text-lg	font-semibold	pt-2 "> <i class="fa-solid fa-grid"></i> <span>Breed: ${item.breed} </span></p>
              <p class="text-lg	font-semibold	pt-2 "> <i class="fa-regular fa-calendar-days"></i> <span>Birth: ${item.date_of_birth}</span></p>
              <p class="text-lg	font-semibold	pt-2 "> <i class="fa-solid fa-venus"></i> <span>Gender: ${item.gender}</span></p>
              <p class="text-lg	font-semibold	pt-2 pb-2 "> <i class="fa-solid fa-dollar-sign"></i> <span>Price: ${item.price}</span></p>
              
    
            </div>
           
            <div class="flex  gap-2 pt-3 justify-between">
              <button class="btn "><i class="fa-regular fa-thumbs-up text-2xl	font-bold"></i></button>
              <button class="btn text-[#0E7A81] text-lg	font-bold">Adopt</button>
              <button class="btn text-[#0E7A81] text-lg	font-bold">Details</button>
            </div>
          </div>
        </div>
        
        
        
        
        `;
        cardContainer.append(card)



    })

}





// load Category button


const DisplayCategoryButton = async () => {
    try{

        const category = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
        const data = await category.json();
        
        console.log(data)

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

        const button = document.createElement('div');
        button.innerHTML = 
        
        `

        <button class="btn btn-outline btn-info  text-white text-xl mt-5 px-10 pt-2 pb-2"> <img src=${item.category_icon} class="h-7 w-7" alt="">${item.category} </button>
        
        `;
        categoryContainer.append(button);

    })

    

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
