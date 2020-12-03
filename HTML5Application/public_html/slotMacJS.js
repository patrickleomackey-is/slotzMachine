/* Patrick L. Mackey CIS 119 Prof. K. Miller
 */
//BETs = document.getElementsByID('BET').onSubmit;
//T= document.getElementById(T);
/*global globalMessage*/
 const WHEEL =['Orange','Melon','Bar','Cherry','Bell','Plum'];
wheel1=spin(1);
wheel2=spin(2);
wheel3=spin(3);
document.write("<br>" + wheel1);
document.write(wheel2);
document.write(wheel3);



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


function comptor(){
   wager = document.getElementByID("T").value; 
    
 //   if ((spin(1)=== spin(2))&&(spin(1)=== spin(3)));
    //winnings = wager*3;
    
    document.write(wager);    
}
;