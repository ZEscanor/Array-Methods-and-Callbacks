import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
fifaData.forEach(function(item,index){
    if(item.Year === 2014){
        console.log(item['Home Team Name'] + "  "+item["Home Team Goals"])
        console.log(item["Away Team Name"] + "  "+item["Away Team Goals"])
    }
});
fifaData.forEach(function(item,index){
    if(item.Stage === "Final" && item.Year === 2014){
        if(item["Home Team Goals"]>item["Away Team Goals"]){
            console.log(`${item["Home Team Name"]} won!!! the finals in 2014`)
        }
        else{
            console.log(`${item["Away Team Name"]} won!!! (Away Team) in 2014`)
        }
    }

});
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let arrAy = [];
  data.forEach(function(item,index){
    if(item.Stage === "Final"){
        arrAy.push(item)
    }
  });
  return arrAy;
};
console.log("Task 2")
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data,callback) {
   let arrBay = callback(data);
   let arrFay = arrBay.map(function(item){
       return item.Year;
   });
    return arrFay;
};
console.log("Task 3")
console.log(getYears(fifaData,getFinals))

//getYears();

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data,callback) {

    let arrAy = callback(data);
    let arrBy = [];
    arrAy.forEach(function(item){
       if(item["Home Team Goals"] > item["Away Team Goals"]){
           arrBy.push(item["Home Team Name"])
       }
       else{
           arrBy.push(item["Away Team Name"])
       }
    });
 return arrBy;
};

console.log("Task 4")
console.log(getWinners(fifaData,getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data,callback,callback1) {
  let arrAy = callback(data,getFinals);
  let arrBy = callback1(data,getFinals);
  for(let i=0; i<arrAy.length && arrBy.length; i++){
      console.log(`In year ${arrAy[i]} ${arrBy[i]} won the World Cup`)
  }
};

console.log("Task 5")
getWinnersByYear(fifaData,getYears,getWinners);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let count = 0;
    let countOne = 0;
    const avgGoalHomez = data.reduce(function(accumulator,item){
       // console.log(`I am HOme ${accumulator}`)
        count++
          return accumulator + item["Home Team Goals"]
    },0);
    //console.log(`I AM COUNT ${count}`)


    const avgGoalAway = data.reduce(function(accumulator,item){
       // console.log(`I am Away ${accumulator}`)
        countOne ++
         return accumulator + item["Away Team Goals"]
    },0);
    //console.log(`I AM COUNT ${countOne}`)
    return {"Avg Home": Math.round(avgGoalHomez / count),"Avg Away": Math.round(avgGoalAway/ countOne)}
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
