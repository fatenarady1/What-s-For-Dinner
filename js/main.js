
let level = document.getElementById("level");
let country = document.getElementById("country");

let mealName = document.getElementById("meal-title");
let des = document.getElementById("des");

let preparationTime = document.getElementById("preparation-time");
let extended = document.getElementById("extend");
let required = document.getElementById("require");
let details = document.getElementById("detailsPreparationTime");


let mealImg = document.getElementById("picture");
let rate = document.getElementById("rate");
let reviews = document.getElementById("reviews");
let prepTime = document.getElementById("prep-time");
let cookTime = document.getElementById("cook-time");
let servings = document.getElementById("servings");


let ingredientsList = document.getElementById("ingredients-list");
let instructionsList = document.getElementById("instructions-list");

let nutritionList = document.getElementById("nutrition-list");
let contentCal = document.querySelector("#contentCal");
let contentProtien = document.querySelector("#contentProt");
let contentCarb= document.querySelector("#contentCarb");
let contentFat = document.querySelector("#contentFat");
let contentFiber = document.querySelector("#contentFiber")
let contentSodium = document.querySelector("#contentSodium");

let tipsList = document.getElementById("tips-tab-pane");
let tryAnotherRecipe = document.getElementById("another-recipe");


let meals = [{
    
    //path
    img: './img/section-hero.png',
    rate: '4.8',
    reviews: '(234 reviews)',
    prepTime: '30 min',
    prepTimeNumber: 30,
    cookTime: '60 min',
    cookTimeNumber: 60,
    servings: '4 people',

    title: 'Greek Moussaka',
    des: 'Traditional layered eggplant casserole with lamb',
    level:'Intermediate',
    country:'Mediterranean',
   ingredients: ['3 large eggplants, sliced','500g ground lamb',
     '400g canned tomatoes','1 onion, diced','3 cloves garlic, minced',
     '500ml béchamel sauce','100g parmesan cheese','Cinnamon and oregano',
    'Olive oil'],

    instructions: ['Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.',
        'Brush eggplant slices with olive oil, grill or bake until softened.',
        'Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.',
        'Preheat oven to 180°C (350°F).',
        'Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.',
        
        'Bake for 45 minutes until golden. Let rest 15 minutes before serving.',
        
    ],


    // nutrition
    contentCal: '580 kcal',
    protien: '36g',
    Carbohydrates: '32g',
    Fat:'32g',
    Fiber:"8g",
    Sodium:'820mg',

    tips:['Salt eggplant to remove bitterness','Don\'t skip the resting time - it helps set the layers',
      
     'Use ground beef if lamb is unavailable',
      
      'Make ahead and reheat for easier serving'],

  
    

}];






let preparationTimeExtend='Extended Preparation Time';
let preparationTimeDetail ='This recipe requires more than 45 minutes to prepare. Plan accordingly!';


function displayMeal(){


   
    let randomMeal = Math.floor(Math.random() * meals.length);
    mealName.innerHTML= meals[randomMeal].title;
    des.innerHTML= meals[randomMeal].des;
    level.innerHTML= meals[randomMeal].level;
    country.innerHTML= meals[randomMeal].country;
    

    mealImg.src = meals[randomMeal].img;
    rate.innerHTML = meals[randomMeal].rate;
    reviews.innerHTML = meals[randomMeal].reviews;
    prepTime.innerHTML = meals[randomMeal].prepTime;
    cookTime.innerHTML = meals[randomMeal].cookTime;
    servings.innerHTML = meals[randomMeal].servings;
    contentCal.innerHTML= meals[randomMeal].contentCal;
    contentProtien.innerHTML= meals[randomMeal].protien;
    contentCarb.innerHTML = meals[randomMeal].Carbohydrates;
    contentFat.innerHTML = meals[randomMeal].Fat;  
    contentFiber.innerHTML = meals[randomMeal].Fiber;  
    contentSodium.innerHTML = meals[randomMeal].Sodium;

     if (Number(meals[randomMeal].prepTimeNumber) + Number(meals[randomMeal].cookTimeNumber) > 45 ){
         
        preparationTime.style.display='flex'
        preparationTime.style.alignItems="center";

        details.style.flexDirection="flex-column";
       

        extended.innerHTML= preparationTimeExtend;
        required.innerHTML= preparationTimeDetail;
     }
     else {
        preparationTime.style.display='none'

     }

    
     ingredientsList.innerHTML="";
     instructionsList.innerHTML= "";


   //   INGREDIENTS display
     for ( let i =0 ; i < meals[randomMeal].ingredients.length; i++){


        let li = document.createElement("li");
        li.innerHTML = meals[randomMeal].ingredients[i];

        ingredientsList.appendChild(li);
     

        
     }

       // Instructions display
       for(let i=0 ; i<meals[randomMeal].instructions.length;i++){
         let li = document.createElement("li");
         li.innerHTML= meals[randomMeal].instructions[i];
         li.style.marginBottom="24px";
         instructionsList.appendChild(li);
       }


       //tips display

       for(let i=0 ; i<meals[randomMeal].tips.length;i++){
        let li = document.createElement("li");
        li.innerHTML=`<i style="color: var(--amber-600)" class="fa-solid fa-circle-check"></i>  ${meals[randomMeal].tips[i]}`;
        li.style.marginBottom="24px";
       
        tipsList.appendChild(li);
      }







}



displayMeal();


