let events = {};
const dates = [];
function AddEvent(events,eventName,date,startTime,endTime){
events[date] = {};
dates.push(date);
const sheduledEvent = events[date];
sheduledEvent["EventName"] = eventName;
sheduledEvent["StartTime"] = startTime;
sheduledEvent["EndTime"] = endTime;
sheduledEvent["Date"] = date;
console.log("Event added successfully!!!");
return events;
}


function displayEventPerDay(events,dateToCheck){
for(let keys in events){
if(dateToCheck == keys){
console.log(events[keys])
return events[keys];
}
else{
return "Event does not exist!!!";
}	
}
}


function deleteEvent(events,dateToCheck){
for(let keys in events){
if(dateToCheck == keys){
delete events[keys];
return "Deleted successfully!!!";
}

if(events = {}){
return "Event does not exist!!!";
}

}
}





let eventSchedulerDashboard = `
1. Add Events
2. View Schedule
3. Delete Event
0. End
`;
const arrayOfEvents = {};

console.log(eventSchedulerDashboard);
const prompt = require(`prompt-sync`)();
let userInput = 1;
let dateInput;
while(userInput != 0){
let userInput = prompt("Enter choice: ");
switch(userInput){
case "1":
let eventName = prompt("Enter name of event: ");
let dateOfEvent = prompt("Enter date: ");

let startTime = prompt("Enter time event will start: ");
let endTime = prompt("Enter time event will end: ");
console.log(AddEvent(arrayOfEvents,eventName,dateOfEvent,startTime,endTime));
break;

case "2":
dateInput = prompt("Enter date: ");
console.log(displayEventPerDay(arrayOfEvents,dateInput));
break;


case "3":
dateInput = prompt("Enter date: ");
console.log(deleteEvent(arrayOfEvents,dateInput));
break;


}
}
