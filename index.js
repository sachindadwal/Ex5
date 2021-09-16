var readlineSync= require('readline-sync');

var userInput=readlineSync.question('Are you older than 25 ?');
if(userInput.toUpperCase() ==='YES'){
  console.log('Yes, you are right !!')
}
else
{console.log('No, you are wrong !!')}