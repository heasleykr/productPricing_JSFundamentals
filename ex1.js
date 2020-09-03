// Variable declarations
var name;
var product;
var quantity;
var unitPrice;
var totalCost;
var finalCost;

// California Sales tax percentage
const taxCali = 0.0725;

/***************************************** 
 *        Console Program Display        *
******************************************/
// gather user input
    name = prompt("Welcome! Enter your name:  ");

// output to console a greeting
    console.log("Welcome " + name + "! Here's your itemized pricing list! ");

// Gather product information & display to console
    product = prompt("Welcome " + name + "! Let's find the total price for your desired product! Enter the products name:  ");
        console.log("Product Pricing for " + product.toLowerCase() + ":");

    unitPrice = prompt("You stated you would like to purchase " + product.toLowerCase() + ". Now, what's the cost per single item?");
        console.log("Unit Price: " + unitPrice);

        // If user entered '$', remove.
        if(unitPrice.charAt(0)== "$"){
            let parseHelp = unitPrice.charAt(1);
            for(let i = 2; i < unitPrice.length; i++){
                parseHelp = parseHelp + unitPrice.charAt(i);
            }
            unitPrice = parseHelp;
        }

    quantity = prompt("How many " + product.toLowerCase() + " would you like to purchase, at once?");
        console.log("Purchase Quantity: " + quantity + " " + product.toLowerCase() + ".");
        console.log("California State Sales Tax: 7.25% ")

// Calculate ppu & add sales tax
    totalCost = unitPrice * quantity; //total without sales tax
    finalCost = (taxCali * totalCost) + Number(totalCost);  //sales tax added


    // Add ',' if total cost is more than $999.99
        let cost;
        cost = finalCost.toString(); //cast to string to eval

        if(cost.charAt(4)== "." || cost.length == 4){
            let parseHelp = cost.charAt(0);
            parseHelp = parseHelp + ",";
            for(let i = 1; i < cost.length; i++){
                parseHelp = parseHelp + cost.charAt(i);
            }
            finalCost = parseHelp;
        }
        
// Output final cost to user
    console.log("The total cost of purchasing " + quantity + " items of " + product.toLowerCase() + " in California, including state sales tax, is $" + finalCost + " US Dollars.");


