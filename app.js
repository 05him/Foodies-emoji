let dat={
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🫐": "Blueberries",
    "🥝": "Kiwi Fruit",
    "🍅": "Tomato",
    "🫒": "Olive",
    "🥥": "Coconut",
    "🥑": "Avocado",
    "🍆": "Eggplant",
    "🥔": "Potato",
    "🥕": "Carrot",
    "🌽": "Ear of Corn",
    "🌶️": "Hot Pepper",
    "🫑": "Bell Pepper",
    "🥒": "Cucumber",
    "🥬": "Leafy Green",
    "🥦": "Broccoli",
    "🧄": "Garlic",
    "🧅": "Onion",
    "🍄": "Mushroom",
    "🥜": "Peanuts",
    "🌰": "Chestnut",
    "🍞": "Bread",
    "🥐": "Croissant",
    "🥖": "Baguette Bread",
    "🫓": "Flatbread",
    "🥨": "Pretzel",
    "🥯": "Bagel",
    "🥞": "Pancakes",
    "🧇": "Waffle",
    "🧀": "Cheese Wedge",
    "🍖": "Meat on Bone",
    "🍗": "Poultry Leg",
    "🥩": "Cut of Meat",
    "🥓": "Bacon",
    "🍔": "Hamburger",
    "🍟": "French Fries",
    "🍕": "Pizza",
    "🌭": "Hot Dog",
    "🥪": "Sandwich",
    "🌮": "Taco",
    "🌯": "Burrito",
    "🫔": "Tamale",
    "🥙": "Stuffed Flatbread",
    "🧆": "Falafel",
    "🥚": "Egg",
    "🍳": "Cooking",
    "🥘": "Shallow Pan of Food",
    "🍲": "Pot of Food",
    "🫕": "Fondue",
    "🥣": "Bowl with Spoon",
    "🥗": "Green Salad",
    "🍿": "Popcorn",
    "🧈": "Butter",
    "🧂": "Salt",
    "🥫": "Canned Food",
    "🍱": "Bento Box",
    "🍘": "Rice Cracker",
    "🍙": "Rice Ball",
    "🍚": "Cooked Rice",
    "🍛": "Curry Rice",
    "🍜": "Steaming Bowl",
    "🍝": "Spaghetti",
    "🍠": "Roasted Sweet Potato",
    "🍢": "Oden",
    "🍣": "Sushi",
    "🍤": "Fried Shrimp",
    "🍥": "Fish Cake with Swirl",
    "🥮": "Moon Cake",
    "🍡": "Dango",
    "🥟": "Dumpling",
    "🥠": "Fortune Cookie",
    "🥡": "Takeout Box",
    "🦪": "Oyster",
    "🍦": "Soft Ice Cream",
    "🍧": "Shaved Ice",
    "🍨": "Ice Cream",
    "🍩": "Doughnut",
    "🍪": "Cookie",
    "🎂": "Birthday Cake",
    "🍰": "Shortcake",
    "🧁": "Cupcake",
    "🥧": "Pie",
    "🍫": "Chocolate Bar",
    "🍬": "Candy",
    "🍭": "Lollipop",
    "🍮": "Custard",
    "🍯": "Honey Pot",
    "🍼": "Baby Bottle",
    "🥛": "Glass of Milk",
    "☕": "Hot Beverage",
    "🫖": "Teapot",
    "🍵": "Teacup Without Handle",
    "🍶": "Sake",
    "🍾": "Bottle with Popping Cork",
    "🍷": "Wine Glass",
    "🍸": "Cocktail Glass",
    "🍹": "Tropical Drink",
    "🍺": "Beer Mug",
    "🍻": "Clinking Beer Mugs",
    "🥂": "Clinking Glasses",
    "🥃": "Tumbler Glass",
    "🥤": "Cup with Straw",
    "🧋": "Bubble Tea",
    "🧃": "Beverage Box",
    "🧉": "Mate",
    "🧊": "Ice",
    "🥢": "Chopsticks",
    "🍽️": "Fork and Knife with Plate",
    "🍴": "Fork and Knife",
    "🥄": "Spoon"
}
let arr= Object.keys(dat);
let p = document.querySelector('p');
let outputDiv = document.querySelector('div');
let input = document.querySelector('input');
let temp2=0;
input.addEventListener('input',()=>{
    console.log(input.value);
    for(let i of arr){
        if(input.value!="" ){
            if(input.value===i){
                outputDiv.innerText=input.value+":"+Object.values(dat)[temp2];
                console.log(temp2,"lenght:"+input.value.length);
                temp2=0;
                break;
            }
            else if(input.value!=i){
                outputDiv.innerText="Soory i dont have a match for this";
            }
           if (arr.includes(input.value)){
                temp2+=1;
            }

        }
        if (input.value===""){
            outputDiv.innerText="";
        }

    }
})
for(let z of arr){
    let sp = document.createElement('span');
    sp.style.margin="0.7rem";
    sp.innerHTML=z;
    p.append(sp);
}
let az = document.querySelectorAll('span');
for(let i of az){
    let temp =i.innerText
    console.log(temp);
        i.addEventListener('click',()=>{
        for( x of arr){
            if(temp===x){
               console.log(Object.values(dat)[temp2]);
               console.log(temp2);
               outputDiv.innerText=temp+": "+Object.values(dat)[temp2];
               temp2=0;
               break;
            }
            else{ temp2+=1;   }
        }
    }
    )
}
