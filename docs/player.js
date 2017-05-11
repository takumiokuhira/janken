const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function action(oppornent){
   matches = matches + 1;
   const amari = matches % 3;
   const isEven = amari == 0;
   console.log(`${matches} % 3 = ${amari} : ${isEven}`);
   if(isEven){
      return CHOKI;
   }
   return GU
}
