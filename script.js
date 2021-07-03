function coffee_function() {
    let coffee = prompt("How many Cups of Coffee have you had today?:");
    if (coffee < 3) {
        console.log("Only " + coffee + " cups of coffee?? You should have another cup of coffee.");
    } else {
        console.log("Woah, you drank " + coffee + " cups of coffee?? I think you shouldn't have anymore, right now.");
    }
}
coffee_function()