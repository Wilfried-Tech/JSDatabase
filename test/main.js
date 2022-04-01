console.log(DatabaseJS);


(async () => {
  var db = await DatabaseJS.openOrCreate('test');
  if (typeof db == "string")
    console.error(db);
  console.log(db);

})()

