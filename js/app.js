'use strict';

var confirmed = confirm('Can you confirm this?');
console.log(confirmed);

if(confirmed == true){
  console.log('It\'s been confirmed!!!');
} else{
  console.log('Awaiting confirmation!');
}