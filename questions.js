const inquire = require("inquirer");

const questionType = inquire
    .prompt({
        type: "list",
        name: "actionType",
        message: "Would you like to post an item, or place a bid?",
        choices: ["post", "bid"]
    })
    .then(answers =>{
        const ans = (answers.actionType);
        if(ans === "post"){
            postItem();
        }
        else{
            bidOnItem();
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
    const bidOnItem = inquire
    .prompt([
        {
            type: "input",
            name: "itemName",
            message: "What item would you like to bid on?"
        }])
        .then (answers => {
            console.log(answers);
            
        })
}



module.exports = questionType