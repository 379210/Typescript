(() => {
   let userId: string | number;
   userId = 1212;
   userId = 'asasa';
   function greeting(myText: string | number) {
     if (typeof myText === 'string') {
       console.log(`string ${myText.toLowerCase()}`);
     } else {
       console.log(`number ${myText.toFixed(1)}`);
     }
   }
   greeting('asasas');
   greeting(1212.121212);
   greeting('');
})();