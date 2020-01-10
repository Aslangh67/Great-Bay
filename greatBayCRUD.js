function createItem(item,price) {
    var query = connection.query(
      "INSERT INTO post_item SET ?",
      {
        item: item,
        price: price
      },
      function(err, res) {
        if (err) throw err;
        // console.log(res.affectedRows + " product inserted!\n");
      }
    );
 
  }
  
function displayItems() {
    connection.query("SELECT * FROM post_item", function(err, res) {
    if (err) throw err;
});
}

  
  module.exports = {createItem,displayItems};