const inquire = require("inquirer");
const crud = require("./greatBayCRUD.js")
const create = crud.createItem;
const display = crud.displayItems;



const questionType = inquire
    .prompt({
        type: "list",
        name: "actionType",
        message: "Would you like to post an item, place a bid, or exit?",
        choices: ["post", "bid", "exit"]
    })
    .then(answers =>{
        const ans = (answers.actionType);
        if(ans === "post"){
            postItem();
        }
        else if(ans === "bid"){
            bidOnItem();
        }
        else{
            //end connection
        }
    })
const postItem = function(){
    console.log("An item will be posted.");//works to here
    const postedItem = inquire
    .prompt([{
        type: "input",
        name: "itemName",
        message: "What is the item called?"
    },{
        type: "input",
        name: "startBid",
        message: "What is the starting bid?"        
    }])
    .then(answers => {
        console.log(answers);//works to here
        //
    })
}

const bidOnItem = function(){
    // console.log("An item will be bid on.");
    const itemsList = display();
    console.table(itemsList);


    const bidOnItem = inquire
    .prompt([
        {
            type: "input",
            name: "itemName",
            message: "What item would you like to bid on?"
        },{
            type: "input",
            name: "bidAmount",
            message: "What is your bid?"
        }
    ])
        .then (answers => {
            console.log(answers);
            
        })
}

//end connection when user selects end

module.exports = questionType