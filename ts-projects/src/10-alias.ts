(() => {
  type UserID = string | number | boolean;
  let userId: UserID
    // literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    shirtSize = 'S';
    // shirtSize = 'as';
    function greeting(myText: UserID, size: Sizes){
      if (typeof myText === 'string'){
         console.log(`string ${myText.toLowerCase()}`)
      }
    }
  greeting(1111, 'S');
})();