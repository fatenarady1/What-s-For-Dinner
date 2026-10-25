
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

  
    

},

{
  img: './img/photo2.jfif',
  rate: '4.9',
  reviews: '(312 reviews)',
  prepTime: '35 min',
  prepTimeNumber: 35,
  cookTime: '25 min',
  cookTimeNumber: 25,
  servings: '4 people',

  title: 'Chicken Alfredo',
  des: 'Creamy fettuccine pasta with tender chicken and parmesan cheese',
  level: 'Intermediate',
  country: 'Italian',

  ingredients: [
      '400g fettuccine pasta',
      '500g boneless chicken breast',
      '2 tablespoons olive oil',
      '3 cloves garlic, minced',
      '250ml heavy cream',
      '100g parmesan cheese, grated',
      'Salt and black pepper',
      'Fresh parsley'
  ],

  instructions: [
      'Cook fettuccine in salted boiling water according to package instructions.',
      'Cut chicken into strips and season with salt and black pepper.',
      'Heat olive oil in a pan and cook chicken until golden and fully cooked.',
      'Add minced garlic and cook for one minute.',
      'Pour in heavy cream and simmer gently.',
      'Stir in parmesan cheese until the sauce becomes creamy.',
      'Add cooked pasta and toss until well coated.',
      'Garnish with fresh parsley and serve immediately.'
  ],

  contentCal: '650 kcal',
  protien: '42g',
  Carbohydrates: '55g',
  Fat: '29g',
  Fiber: '3g',
  Sodium: '680mg',

  tips: [
      'Reserve some pasta water to adjust the sauce consistency.',
      'Avoid boiling the cream too vigorously.',
      'Freshly grated parmesan melts more smoothly.',
      'Slice the chicken evenly for consistent cooking.'
  ]
},
{
  img: './img/photo3.jfif',
  rate: '4.8',
  reviews: '(428 reviews)',
  prepTime: '20 min',
  prepTimeNumber: 20,
  cookTime: '15 min',
  cookTimeNumber: 15,
  servings: '4 people',

  title: 'Classic Beef Burger',
  des: 'Juicy homemade beef burgers with lettuce, tomato, and cheese',
  level: 'Easy',
  country: 'American',

  ingredients: [
      '500g ground beef',
      '4 burger buns',
      '4 slices cheddar cheese',
      '1 tomato, sliced',
      '4 lettuce leaves',
      '1 small red onion, sliced',
      '4 tablespoons burger sauce',
      'Salt and black pepper'
  ],

  instructions: [
      'Divide ground beef into four equal portions.',
      'Shape each portion into a patty and season with salt and pepper.',
      'Heat a skillet or grill over medium-high heat.',
      'Cook patties until they reach a safe internal temperature of 71°C (160°F).',
      'Add cheddar cheese during the final minute of cooking.',
      'Toast the burger buns lightly.',
      'Spread sauce on the buns and add lettuce, tomato, onion, and patties.',
      'Serve immediately with your favorite side dish.'
  ],

  contentCal: '620 kcal',
  protien: '35g',
  Carbohydrates: '42g',
  Fat: '32g',
  Fiber: '3g',
  Sodium: '850mg',

  tips: [
      'Avoid pressing the patties while cooking.',
      'Do not overwork the ground beef when shaping.',
      'Toast the buns to help prevent them from becoming soggy.',
      'Let the patties rest briefly before serving.'
  ]
},
{
  img: './img/photo4.jfif',
  rate: '4.7',
  reviews: '(186 reviews)',
  prepTime: '15 min',
  prepTimeNumber: 15,
  cookTime: '15 min',
  cookTimeNumber: 15,
  servings: '3 people',

  title: 'Vegetable Stir Fry',
  des: 'Colorful crunchy vegetables tossed in a savory garlic soy sauce',
  level: 'Easy',
  country: 'Asian',

  ingredients: [
      '2 cups broccoli florets',
      '1 red bell pepper, sliced',
      '1 yellow bell pepper, sliced',
      '2 carrots, thinly sliced',
      '200g mushrooms, sliced',
      '2 cloves garlic, minced',
      '2 tablespoons soy sauce',
      '1 tablespoon sesame oil',
      '1 teaspoon grated ginger',
      '1 teaspoon cornstarch mixed with water'
  ],

  instructions: [
      'Wash and prepare all vegetables before cooking.',
      'Heat sesame oil in a large skillet or wok.',
      'Add carrots and broccoli and stir-fry for three minutes.',
      'Add bell peppers and mushrooms and cook for another three minutes.',
      'Stir in garlic and ginger until fragrant.',
      'Mix soy sauce with the cornstarch slurry.',
      'Pour the sauce over the vegetables and toss until lightly thickened.',
      'Serve hot with rice or noodles if desired.'
  ],

  contentCal: '240 kcal',
  protien: '8g',
  Carbohydrates: '28g',
  Fat: '11g',
  Fiber: '7g',
  Sodium: '620mg',

  tips: [
      'Cut vegetables into similar sizes for even cooking.',
      'Keep the pan hot to preserve the vegetables crunch.',
      'Prepare the sauce before starting to cook.',
      'Add a little water if the sauce becomes too thick.'
  ]
},
{
  img: './img/photo2.jfif',
  rate: '4.9',
  reviews: '(267 reviews)',
  prepTime: '20 min',
  prepTimeNumber: 20,
  cookTime: '20 min',
  cookTimeNumber: 20,
  servings: '4 people',

  title: 'Chicken Tacos',
  des: 'Seasoned chicken tacos topped with fresh salsa and creamy avocado',
  level: 'Easy',
  country: 'Mexican',

  ingredients: [
      '500g boneless chicken breast',
      '8 small corn tortillas',
      '1 teaspoon paprika',
      '1 teaspoon ground cumin',
      '1 teaspoon garlic powder',
      '1 tablespoon olive oil',
      '1 cup shredded lettuce',
      '2 tomatoes, diced',
      '1 avocado, sliced',
      '1 lime',
      'Salt and black pepper'
  ],

  instructions: [
      'Cut chicken into small strips.',
      'Mix paprika, cumin, garlic powder, salt, and pepper.',
      'Coat the chicken with the spice mixture.',
      'Heat olive oil in a skillet and cook chicken until fully cooked.',
      'Warm the tortillas in a dry pan.',
      'Combine diced tomatoes with a squeeze of lime juice.',
      'Fill each tortilla with chicken, lettuce, tomato salsa, and avocado.',
      'Serve with extra lime wedges.'
  ],

  contentCal: '390 kcal',
  protien: '32g',
  Carbohydrates: '35g',
  Fat: '14g',
  Fiber: '7g',
  Sodium: '510mg',

  tips: [
      'Marinate the chicken for extra flavor if time allows.',
      'Warm tortillas just before serving.',
      'Add lime juice to brighten the flavors.',
      'Keep the toppings separate until ready to serve.'
  ]
},
{
  img: './img/`q`',
  rate: '4.8',
  reviews: '(391 reviews)',
  prepTime: '10 min',
  prepTimeNumber: 10,
  cookTime: '15 min',
  cookTimeNumber: 15,
  servings: '4 people',

  title: 'Chocolate Pancakes',
  des: 'Fluffy chocolate pancakes served with fresh berries and maple syrup',
  level: 'Easy',
  country: 'American',

  ingredients: [
      '180g all-purpose flour',
      '30g cocoa powder',
      '2 tablespoons sugar',
      '2 teaspoons baking powder',
      '1 egg',
      '250ml milk',
      '2 tablespoons melted butter',
      '1 teaspoon vanilla extract',
      '80g chocolate chips',
      'Fresh berries for serving'
  ],

  instructions: [
      'Whisk flour, cocoa powder, sugar, and baking powder in a bowl.',
      'In another bowl, whisk egg, milk, melted butter, and vanilla.',
      'Pour the wet ingredients into the dry ingredients.',
      'Mix gently until just combined, then fold in chocolate chips.',
      'Heat a lightly greased nonstick pan over medium-low heat.',
      'Pour small portions of batter into the pan.',
      'Flip when bubbles form and the edges begin to set.',
      'Cook the other side until done and serve with fresh berries.'
  ],

  contentCal: '340 kcal',
  protien: '9g',
  Carbohydrates: '48g',
  Fat: '13g',
  Fiber: '4g',
  Sodium: '310mg',

  tips: [
      'Do not overmix the batter to keep pancakes fluffy.',
      'Let the batter rest for five minutes before cooking.',
      'Use medium-low heat to prevent the chocolate from burning.',
      'Add fresh fruit just before serving.'
  ]
}
];






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


