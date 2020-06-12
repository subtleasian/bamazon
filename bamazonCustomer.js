var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rrt4thoN!",
  database: "productsdb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

function startApp() {
    connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    // console.log(res);
    inquirer.prompt([
        {
          type: "list",
          message: "What is the ID of the product you'd like to buy?",
          name: "userChoice",
          choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            type: "number",
            message: "How many would you like to purchase",
            name: "quantity",
          },
      ]).then(function(response) {
        
        if (res[response.userChoice - 1].stock_quantity >= response.quantity) {
            console.log("You have successfully purchased item " + response.userChoice + " for $" + res[response.userChoice - 1].price * response.quantity + "!");
            updateProduct(response, res[response.userChoice - 1].stock_quantity);
        } else {
            console.log("Insufficient Quantity!");
        }
    });      
    
    // connection.end();
    });

   
};

function updateProduct(data, previousQuantity) {
  console.log("Updating quantities...\n");
  const itemID = data.userChoice;
  const newQty = previousQuantity - data.quantity;

    console.log(itemID, newQty);
    
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newQty
      },
      {
        item_id: itemID
      }
    ],
    function(err, res) {
      if (err) throw err;
    }
  );

  // logs the actual query being run
//   console.log(query.sql);
}
startApp();