              kredi
const gelir = Number(prompt("Gelirinizi giriniz:"));
const gider = Number(prompt("giderinizi giriniz"));
const asgari = 5500;

console.log(gelir-gider<5500?
`kredi verilmez`: `kredi verilebilir`)

/*?maas zammı*/
const maas = Number(prompt("maasinizi giriniz:"));
const asgari = 5500;
console.log(maas>=5500 `${maasiniz*10%}`)
      : `${maas*50%})
      
      /*ders programi*/
   const day prompt("lütfen gun giriniz")   
      switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
          consol.log("inclass");
          break
        case "friday":
            consol.log("teamwork");
            break  
        case "saturday":
            consol.log("inclass+workshop")
                break  
        case "sunday":
            consol.log("self-study")
                    break  
        default:
          console.log("yanlis gun girildi")
          break
      }
      
    /*dort islem */  
    const num1 = Number(prompt("lutfen 1.sayiyi giriniz"));
    const operator = (promt("lutfen islemi giriniz(+ .-, *, /)"));
    const num2 = Number(promt("lutfen 2.sayiyi giriniz"));

    let result;

    if (operator =="+" ) result = num1 + num2;
       else if (operator =="-" ) result = num1 - num2;
       else if (operator =="*" ) result = num1 * num2;
       else if (operator =="/" ) result = num1 / num2;
console.log("lutfen operator seciiniz");
console.log (result);