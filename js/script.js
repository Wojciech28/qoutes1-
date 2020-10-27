/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


const quotes = [
  { quote: " Tell me and I forget, teach me and I may remember, involve me and I learn. " ,
    source: "– Benjamin Franklin",
    citation: "https://www.growthengineering.co.uk/55-quotes-about-learning/",
    year: "1768"},
  { quote: " In the end we retain from our studies only that which we practically apply. ",
    source: "– Johann Wolfgang Von Goethe",
    citation: "https://www.growthengineering.co.uk/55-quotes-about-learning/",
    year: "1802"},
  { quote: " Change is the end result of all true learning. ",
    source: "– Leo Buscaglia",
    citation: "https://www.growthengineering.co.uk/55-quotes-about-learning/",
    year: "1952"  },
  { quote:  " The beautiful thing about learning is nobody can take it away from you. ",
    source: "– B.B. King" ,
    citation: "https://www.growthengineering.co.uk/55-quotes-about-learning/",
    year: "1962"},
  { quote:  " Being a student is easy. Learning requires actual work. ",
    source: "— William Crawford",
    citation: "https://www.growthengineering.co.uk/55-quotes-about-learning/",
    year: "1807"}
]; 


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  let x = Math.floor(Math.random()*quotes.length);
  return quotes[x];
}



/***
 * `printQuote` function
***/
function printQuote(){
  let y =  getRandomQuote();
  let z = `<p class="quote"> ${y.quote} </p>
  <p class="source">  ${y.source} `;

  if(y.citation!==undefined){
    z+=`<span class="citation">${y.citation}</span>`;
  }
  if(y.year!==undefined){
    z+=`<span class="year">${y.year}</span>`;
  }
  z+="</p>"
  return document.getElementById('quote-box').innerHTML = z; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);