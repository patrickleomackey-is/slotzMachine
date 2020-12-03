/* Patrick L. Mackey CIS 119 Prof. K. Miller
 */
BETs = document.getElementsByID('BET').onSubmit;

const WHEEL =['Orange','Melon','Bar','Cherry','Bell','Plum'];


spin();


function spin()
{ 
    Spinner = Number(Math.floor(Math.random()*5));
   return document.write(Spinner, WHEEL[Spinner]);
   
}


