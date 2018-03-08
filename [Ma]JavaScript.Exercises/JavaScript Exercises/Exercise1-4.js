// Exercise 1

var userNumber = prompt("Pick a number!");
var addedNumber = 0;

for (var i = 0; i <= userNumber; i++) {
    addedNumber = (addedNumber + i);
}
console.log(userNumber + " is " + addedNumber);


//Exercise 2

var sentence = (" ");
var words = ("");

do {
    var choice = prompt("Do you want to play?");
    if (choice === "no") {
        break;
    }
    while (choice != "yes" && choice != "no") {
        choice = prompt("Please enter yes or no");

    }
    if (choice === "yes") {
        var words = prompt("Enter a word.");
        sentence = (sentence + " " + words);
    }}
while (choice != "no");
console.log(sentence);


//Exercise 3

var choice = prompt("Would you like to print your name?");
if (choice != "yes") {

}
if (choice === "yes") {
    var name = prompt("Enter your name.");
    console.log("Hello, my name is " + name);
    var again = prompt("Would you like to print your name again?")
    while (again === "yes") {
        var name = (name + "!");
        console.log("Hello, my name is " + name);
        var again = prompt("Would you like to print your name again?")
    }
    if (again != "yes") {
        console.log("See you soon!");
    }
}


//Exercise 4

while (time != "morning" && time != "noon" && time != "evening") {
    var time = prompt("What time of day is it?");
}
if (time === "morning") {
    console.log("Since it's morning, you should be eating breakfast. We suggest eggs and toast.");
}
else if (time === "noon") {
    console.log("Since it's noon, you should be eating lunch. We suggest a salad.");
}
else if (time === "evening") {
    console.log("Since it's evening, you should be eating dinner. We suggest chicken and rice.");
}


