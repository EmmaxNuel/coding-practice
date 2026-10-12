function addEventAsNewUser(username,eventName,date,startTime,endTime) {
    let userEvents = {};
    let userDetails = {};
    let dateTime = [];
    dateTime.push();
    let realDate = new Date(date);
    userEvents[username] = [];
    users =  userEvents[username];
    users.push(userDetails);

    userDetails["EventName"] = eventName;
    userDetails["Date"] = realDate.toDateString();
    userDetails["StartTime"] = startTime;
    userDetails["EndTime"] = endTime;
    console.log(userEvents);
    return "Added successfully!!!";
}

function addEventAsExistingUser(userEvents,username,eventName,date,startTime,endTime){
for(let )

}








let eventSchedulerDashboard = `
1. Add Events as a new User
2. Add Events as an existing User
3. View Schedule
4. Delete Event
0. End
`;

const prompt = require(`prompt-sync`)();
let eventsRegistered = {};
let isTrue = true;
console.log(eventSchedulerDashboard);
while(isTrue) {
    let userChoice = prompt("Enter choice: ").toLowerCase();
    switch (userChoice){
        case "1":
            let username = prompt("Enter User name: ");
            let eventName = prompt("Enter Event name: ");
            let date = prompt("Enter date of event: ");

            let startTime = prompt("Enter time event will start: ");
            let endTime = prompt("Enter time event will end: ")
            addedEvent = addEventAsNewUser(username,eventName,date,startTime,endTime)
            console.log(addedEvent);
            break;
    }


}

