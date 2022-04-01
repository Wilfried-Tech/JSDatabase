console.log(DatabaseJS);


(async () => {
  var db = await DatabaseJS.openOrCreate('test');
  if (typeof db == "string")
    console.error(db);
  console.log(db);
  try{
  console.log(JSON.parse('{g}'))
  }catch(e){console.log(''+e)};

})()