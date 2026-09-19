
var level = document.getElementById("level");
var country = document.getElementById("country");

var mealName = document.getElementById("meal-title");
var des = document.getElementById("des");

var preparationTime = document.getElementById("preparation-time");
var extended = document.getElementById("extend");
var required = document.getElementById("require");
var details = document.getElementById("detailsPreparationTime");


var mealImg = document.getElementById("picture");
var rate = document.getElementById("rate");
var reviews = document.getElementById("reviews");
var prepTime = document.getElementById("prep-time");
var cookTime = document.getElementById("cook-time");
var servings = document.getElementById("servings");


var ingredientsList = document.getElementById("ingredients-list");
var instructionsList = document.getElementById("instructions-list");
var nutritionList = document.getElementById("nutrition-list");
var tipsList = document.getElementById("tips-list");


var meals = [{
    
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
    preparationTime:'Extended Preparation Time',
    preparationTimeDetail : 'This recipe requires more than 45 minutes to prepare. Plan accordingly!',
    ingredients: ['3 large eggplants, sliced','500g ground lamb',
     '400g canned tomatoes','1 onion, diced','3 cloves garlic, minced',
     '500ml béchamel sauce','100g parmesan cheese','Cinnamon and oregano',
    'Olive oil'],

    instructions: ['Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.',
        'Brush eggplant slices with olive oil, grill or bake until softened.',
        'Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.',
        'Preheat oven to 180°C (350°F).',
        'Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.',
    ],

    // nutrition

    

}];








function displayMeal(){
   
    var randomMeal = Math.floor(Math.random() * meals.length);
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


        
     if (Number(meals[randomMeal].prepTimeNumber) + Number(meals[randomMeal].cookTimeNumber) > 45 ){
         
        preparationTime.style.display='flex'
        preparationTime.style.alignItems="center";

        details.style.flexDirection="flex-column";
       

        extended.innerHTML= meals[randomMeal].preparationTime;
        required.innerHTML= meals[randomMeal].preparationTimeDetail;
     }
     else {
        preparationTime.style.display='none'

     }

    
     for ( var i =0 ; i< meals[randomMeal].instructions.length; i++){


        var li = document.createElement("li");
        li.innerHTML = meals[randomMeal].instructions[i];

        ingredientsList.appendChild(li);

       
     }








}



displayMeal();


