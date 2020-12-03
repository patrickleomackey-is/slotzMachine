/* Patrick L. Mackey CIS 119 Prof. K. Miller
 */
//BETs = document.getElementsByID('BET').onSubmit;

 const WHEEL =['Orange','Melon','Bar','Cherry','Bell','Plum'];
document.write("<br>" + WHEEL);


document.write(spin());


function spin()
{ 
    Spinner = Number(Math.floor(Math.random()*5));
   if (Spinner === 0)
       Spin = WHEEL[0];
   if (Spinner === 1)
       Spin = WHEEL[1];
   if (Spinner === 2)
       Spin = WHEEL[2];
   if (Spinner === 3)
       Spin = WHEEL[3];
   if (Spinner === 4)
       Spin = WHEEL[4];
   if (Spinner === 5)
       Spin = WHEEL[5];
   return Spin;
}


