document.getElementById("changeColorBtn").addEventListener("click", function () {
    const pastelColors = [
        "#FFFAF0", "#FAF0E6", "#E6E6FA", "#F0E68C", "#FFDAB9", "#FFB6C1", "#D8BFD8", "#B0E0E6", "#F5F5DC",
        "#E0FFFF", "#C9C0BB", "#B4CFEC", "#D5D6EA", "#E6E6FA", "#AFEEEE", "#77BFC7", "#B8BC86", "#A2AD9C",
        "#BCE954", "#E3F9A6", "#DBF9DB", "#FFFFCC", "#FFE5B4", "#F3E5AB", "#B1907F", "#ECC5C0", "#F8B88B",
        "#FFE6E8", "#FEA3AA", "#8686AF", "#F2A2E8", "#FDEEF4"
    ];
    document.body.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
});

const recipes = {
    pasta: {
        title: "🍝 Italian Pasta",
        image: "pasta.jpeg",
        difficulty: "Easy",
        time: "30 mins",
        youtube: "https://youtu.be/W7Uh8K3PpvM?si=OMAMFar4bht-RN6W",
        ingredients: [
            "200g pasta",
            "2 cloves garlic, minced",
            "2 tbsp olive oil",
            "1 cup cherry tomatoes",
            "Fresh basil leaves",
            "Parmesan cheese"
        ],
        steps: [
            "Boil pasta until it is 80% cooked.",
            "Sauté garlic in olive oil, then add cherry tomatoes.",
            "Mix cooked pasta with the sauce.",
            "Garnish with basil and Parmesan."
        ]
    },
    tacos: {
        title: "🌮 Mexican Tacos",
        image: "tacos.jpeg",
        difficulty: "Medium",
        time: "25 mins",
        youtube: "https://youtu.be/ag7ryZD-kaw?si=GjIDH6vKG9-U56qN",
        ingredients: [
            "4 small tortillas",
            "200g ground beef",
            "1/2 onion, chopped",
            "1 tsp taco seasoning",
            "1/2 cup shredded cheese",
            "Salsa and guacamole"
        ],
        steps: [
            "Cook beef with onion and seasoning.",
            "Warm tortillas and add beef filling.",
            "Top with cheese, salsa, and guacamole."
        ]
    },
    sushi: {
        title: "🍣 Japanese Sushi",
        image: "sushi.jpeg",
        difficulty: "Hard",
        time: "40 mins",
        youtube: "https://youtu.be/OWVjync6peU?si=gA3hpUMcTMQFvMGO",
        ingredients: [
            "2 cups sushi rice",
            "3 tbsp rice vinegar",
            "Seaweed sheets (Nori)",
            "Fresh salmon or tuna"
        ],
        steps: [
            "Cook sushi rice and mix with vinegar.",
            "Place a seaweed sheet, spread rice, and add fillings.",
            "Roll tightly and slice into pieces."
        ]
    },
    burger: {
        title: "🍔 Cheesy Burger",
        image: "burger.jpeg",
        difficulty: "Medium",
        time: "35 mins",
        youtube: "https://youtu.be/5zd5GCr61nQ?si=r8k2G1ERh3c0NyX0",
        ingredients: [
            "1 beef patty",
            "1 burger bun",
            "1 slice cheese",
            "Lettuce, tomato, onion",
            "Ketchup and mayonnaise"
        ],
        steps: [
            "Grill the beef patty until cooked.",
            "Toast the bun lightly.",
            "Assemble with lettuce, tomato, cheese, and sauces."
        ]
    },
    pancakes: {
        title: "🥞 Fluffy Pancakes",
        image: "pancakes.jpeg",
        difficulty: "Easy",
        time: "20 mins",
        youtube: "https://youtu.be/oMeOPxqIiUQ?si=tsl4n8Wi8o1NACxR",
        ingredients: [
            "1 cup flour",
            "1 tbsp sugar",
            "1 tsp baking powder",
            "1 egg",
            "1 cup milk",
            "1 tbsp melted butter"
        ],
        steps: [
            "Mix dry ingredients in a bowl.",
            "Whisk egg, milk, and butter, then combine with dry mix.",
            "Pour batter onto a hot pan and cook until golden brown."
        ]
    },
    fried_rice: {
        title: "🍚 Vegetable Fried Rice",
        image: "fried_rice.jpeg",
        difficulty: "Easy",
        time: "30 mins",
        youtube: "https://youtu.be/Ng5GQbmF5iE?si=Bw3ShWaTpiS9Yf6o",
        ingredients: [
            "2 cups cooked rice",
            "1/2 cup mixed vegetables",
            "1 tbsp soy sauce",
            "1 egg",
            "1 tsp sesame oil"
        ],
        steps: [
            "Heat oil in a pan and scramble the egg.",
            "Add vegetables and stir-fry for 2 minutes.",
            "Mix in rice and soy sauce, then cook for another 3 minutes."
        ]
    },
    pizza: {
        title: "🍕 Cheesy Pizza",
        image: "pizza.jpeg",
        difficulty: "Medium",
        time: "40 mins",
        youtube: "https://youtu.be/yXanJHPuzT0?si=j_uKflp5MVebkwx9",
        ingredients: [
            "1 pizza base",
            "1/2 cup tomato sauce",
            "1 cup mozzarella cheese",
            "Favorite toppings (mushrooms, pepperoni, olives)"
        ],
        steps: [
            "Spread tomato sauce on the pizza base.",
            "Add cheese and your favorite toppings.",
            "Bake in an oven at 200°C for 15 minutes."
        ]
    },
    salad: {
        title: "🥗 Fresh Garden Salad",
        image: "salad.jpeg",
        difficulty: "Easy",
        time: "15 mins",
        youtube: "https://youtu.be/kwq4vl610iY?si=U9Gg4TGn-xVdVIL7",
        ingredients: [
            "2 cups mixed greens",
            "1/2 cucumber, sliced",
            "1/2 cup cherry tomatoes",
            "1 tbsp olive oil",
            "1 tsp lemon juice"
        ],
        steps: [
            "Wash and chop the vegetables.",
            "Toss with olive oil and lemon juice.",
            "Serve fresh."
        ]
    },
    soup: {
        title: "🍵 Tomato Soup",
        image: "soup.jpeg",
        difficulty: "Easy",
        time: "25 mins",
        youtube: "https://youtu.be/szjZ3vqwyXE?si=pfBqSi8eKuCPfFEC",
        ingredients: [
            "4 ripe tomatoes",
            "1/2 onion, chopped",
            "2 cloves garlic",
            "1 cup vegetable broth",
            "1 tbsp cream"
        ],
        steps: [
            "Sauté onions and garlic until soft.",
            "Blend with tomatoes and vegetable broth.",
            "Simmer for 10 minutes, then stir in cream before serving."
        ]
    },

    butter_chicken: {
        title: "🍛 Butter Chicken",
        image: "butterchicken.jpeg",
        difficulty: "Medium",
        time: "50 mins",
        youtube: "https://youtu.be/dcKlfJsA_0w?si=wUwMtW19sXbK-eaD",
        ingredients: [
            "500g chicken breast, cubed",
            "1 cup tomato puree",
            "1/2 cup heavy cream",
            "2 tbsp butter",
            "1 tsp garam masala",
            "1 tsp ginger-garlic paste",
            "Salt and pepper"
        ],
        steps: [
            "Marinate chicken with spices and let it rest for 30 mins.",
            "Cook chicken in butter until golden brown.",
            "Add tomato puree, cream, and cook until thick.",
            "Serve with rice or naan."
        ]
    },

    blueberry_muffins: {
        title: "🧁 Blueberry Muffins",
        image: "muffins.jpeg",
        difficulty: "Easy",
        time: "35 mins",
        youtube: "https://youtu.be/298pJ8G3Dj8?si=da_BfXaV-0cJt9i9",
        ingredients: [
            "1 1/2 cups flour",
            "1/2 cup sugar",
            "1 tsp baking powder",
            "1/2 cup milk",
            "1/4 cup butter, melted",
            "1 egg",
            "1 cup fresh blueberries"
        ],
        steps: [
            "Preheat oven to 180°C and line muffin tin with cups.",
            "Mix dry ingredients, then add wet ingredients.",
            "Gently fold in blueberries.",
            "Bake for 20-25 minutes until golden brown."
        ]
    },
    chocolava: {
        title: "🍫 Chocolate Lava Cake",
        image: "chocolava.jpeg",
        difficulty: "Medium",
        time: "30 mins",
        youtube: "https://youtu.be/gW3JtHpuzrk?si=MjQEal1YJUt4XMHX",
        ingredients: [
            "100g dark chocolate",
            "1/2 cup butter",
            "1/2 cup flour",
            "1/2 cup sugar",
            "2 eggs"
        ],
        steps: [
            "Melt chocolate and butter together.",
            "Mix in sugar, eggs, and flour.",
            "Pour into ramekins and bake at 180°C for 12 minutes."
        ]
    }
};

function showRecipe(recipeName) {
    const recipe = recipes[recipeName];
    if (!recipe) return;

    document.getElementById("home").classList.add("hidden");
    document.getElementById("recipe").classList.remove("hidden");

    document.getElementById("recipe-content").innerHTML = `
        <h1>${recipe.title}</h1>
        <img src="${recipe.image}" alt="${recipeName}">
        <p><h2>Difficulty:</h2> ${recipe.difficulty}</p>
        <p><h2>Cooking Time:</h2> ${recipe.time}</p>
        <h2>Ingredients:</h2>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
        <h2>Instructions:</h2>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
        <a href="${recipe.youtube}" target="_blank">📺 Watch Tutorial</a>
    `;
}

function goBack() {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("recipe").classList.add("hidden");
}

function searchRecipes() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    document.querySelectorAll(".recipe-card").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(query) ? "block" : "none";
    });
}

function filterRecipes(category) {
    let recipes = document.querySelectorAll(".recipe-card");

    recipes.forEach(recipe => {
        if (category === "all") {
            recipe.style.display = "block"; 
        } else if (recipe.classList.contains(category)) {
            recipe.style.display = "block"; 
        } else {
            recipe.style.display = "none"; 
        }
    });
}