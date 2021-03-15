let item1 = prompt('Enter the first grocery item');
console.log(item1);
document.getElementById("item1").innerHTML= item1;

let amount1 = prompt('How many?');
console.log(amount1);
document.getElementById("amount1").innerHTML= amount1;

let item2 = prompt('Enter the second grocery item');
console.log(item2);
document.getElementById("item2").innerHTML= item2;

let amount2 = prompt('How many?');
console.log(amount2);
document.getElementById("amount2").innerHTML= amount2;

let item3 = prompt('Enter the third grocery item');
console.log(item3);
document.getElementById("item3").innerHTML= item3;

let amount3 = prompt('How many?');
console.log(amount3);
document.getElementById("amount3").innerHTML= amount3;

let sum = (Number(amount1) + Number(amount2) + Number(amount3));
console.log(sum);
document.getElementById("sum").innerHTML= sum;


//////
let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";
console.log(tongueTwister.toLowerCase());

let pangram = "The quick brown fox jumps over the lazy dog.";
console.log(pangram.charArt().toUpperCase()+ pangram.slice(1));
let anotherPangram = "The five boxing wizards jump quickly.";
console.log(anotherPangram.substring(11));

//////