//console.log("Ticket Checker Started.");
//console.log("Loading support ticket data...");
//console.log("Ready to check priority rules.");
//console.log("Learner: Ayesha");
//console.log("Department: Helpdesk");
//console.log("Goal: I want to understand basic JavaScript scripting");
//const ticketId = "TCK-1001";
//let ticketStatus = "Open";

//console.log(ticketId);
//console.log(ticketStatus);

//ticketStatus ="In Progress";
//console.log(ticketStatus);
//const ticketNumber = "HD-2451";
//const customerName = "Thabo Mokoena";
//const department = "Software Support";
//let ticketPriority = "High";
//let assignedTo ="Unassigned";
//console.log("Ticket:", ticketNumber);
//console.log("Customer:", customerName);
//console.log("Department:", department);
//console.log("Priority:", ticketPriority);
//console.log("Assigned to:", assignedTo);
//const requestNumber ="REG-501";
//const employeeName ="Fatima Jacobs";
//const departmentName ="Operations";
//const requestType ="Laptop Accessory";
//let isApproved = false;

//console.log(requestNumber);
//console.log(employeeName);
//console.log(departmentName);
//console.log(requestType);
//console.log(isApproved);
//const departmentName ="Helpdesk";
//const openTicketCount =18;
//const escalationRequired = true;

//console.log(
    //'${departmentName} has ${openTicketCount} open tickets. Escalation required: ${escalationRequired}'
//);
//const numberOfTickets =7;
//const minutesPerTicket = 20;
//const totalMinutes = numberOfTickets * minutesPerTicket;
//const isLongWorkLoad =totalMinutes > 120;
 //console.log("Total minutes:", totalMinutes);
 //console.log("Long workload:", isLongWorkLoad);

 //const issueCategory = "";

 //if (issueCategory === "Password") {
    //console.log("Reset password process.");
   
//} else if (issueCategory === "Network") {
    //console.log("Escalate to network team.");

//}else {
    //console.log("Assign to general support.");

//}
//function getDepartmentQueue(department) {
    //if (department === "Helpdesk") {
        //return "Assign to first-line support.";

    //}else if (department === "DevOps") {
        //return "Escalate to insfrastructure queue.";
    //}else if (department === "Software Support"){
        //return "Assign to application support queue.";

    //}else {
        //return "Assign to general support queue";
    //}
//}
//console.log(getDepartmentQueue("DevOps"));

/*Practice excercise 7*/
//const departmentNames =["Helpdesk", "DevOps", "Software Support"];
//console.log("First department:", departmentNames[0]);
//console.log("Total department:", departmentNames.length);

/*Practice excersize 8*/
//const tasks = [
    //"Check email",
    //"Review support tickets",
    //"Update tickets status",
    //"Attend stand-up",
    //"Submit report"
//];
//for (const task of tasks) {
    //console.log(`Task to complete: ${task}`);
//}

/*Practice excersize 9*/

//Check if a support ticket could be escalated.
const ticketPriority = "High";
const ticketAgeDays = 4;

if (ticketPriority === "High" && ticketAgeDays >= 3) {
    console.log("Escalate this tickt to the support lead.");

}else {
    console.log("Continue with the normal support process.");
}






