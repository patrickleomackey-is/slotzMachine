/* Patrick L. Mackey CIS 119 Prof. K. Miller
 */
//BETs = document.getElementsByID('BET').onSubmit;
//T= document.getElementById(T);
/*global globalMessage*/
 const WHEEL =['Orange','Melon','Bar','Cherry','Bell','Plum'];
let winnings;





function winns(){
    document.write(window.content.localstorage[winnings]);
}

function getbet()
{
BET= Number(prompt("Enter a wager"));
return BET;
}
function wheel()
{

wheel1=spin(1);
wheel2=spin(2);
wheel3=spin(3);



if ((wheel1 === wheel2)&&(wheel2 === wheel3))
    result = BET * 3;
 else if ((wheel1 === wheel2)||(wheel1 === wheel3)||(wheel2 === wheel3))
     result = BET * 2;
else result = BET * 0;
document.write("<br>" + wheel1);
document.write(wheel2);
document.write(wheel3);
document.write("<br>"+result);


return result;
};


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

function foo(){
    bet = document.getElementById('B').value;
    document.write(bet);
}