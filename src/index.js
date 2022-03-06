module.exports = function check(str, bracketsConfig) {
  let pairs = {
    [')']:'(',
    ['}']:'{',
    ['|']:'|',
    [']']:'[',
  };

  let array = [];
 for (let i=0; i < str.length; i++) {
   let sym = str[i];
   bracketsConfig.forEach((v) => {
    if (v[0] === sym) {
      array.push(sym);
        if (pairs[sym] === sym) {
          array.pop();
          }
        }
        else {
          let top = array[array.length - 1];
          if (array.length === 0){
             return false;
          }
          else {
            if (pairs[sym] === top){
              array.pop()
            }
            else {
              return false;
            }
           }
          }
         })
        }
          return array.length === 0;
   }
  
