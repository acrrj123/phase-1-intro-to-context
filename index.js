let testEmployee
function createEmployeeRecord(employee) {
  testEmployee = {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  //console.log(testEmployee.payPerHour)
  return testEmployee
}
//createEmployeeRecord(["Gray", "Worm", "Security", 1])

let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3]
]

function createEmployeeRecords(employees) {
  return employees.map(employee => createEmployeeRecord(employee))
  //Here the map method was used because it returns a new array. ForEach returns undefined.
}
createEmployeeRecords(twoRows)

function createTimeInEvent(employee, dateTime) {
  const [date, hour] = dateTime.split(' ')
  employee.timeInEvents.push({
    type: 'TimeIn',
    date: date,
    hour: parseInt(hour)
  })
  return employee
}
createTimeInEvent(testEmployee, "2014-02-28 1400")

function createTimeOutEvent(employee, dateTime) {
  const [date, hour] = dateTime.split(' ')
  employee.timeOutEvents.push({
    type: 'TimeOut',
    date: date,
    hour: parseInt(hour)
  })
  return employee
}
createTimeOutEvent(testEmployee, "2015-02-28 1700")

function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(event => event.date === date)
  const timeOut = employee.timeOutEvents.find(event => event.date === date)
  return (timeOut.hour - timeIn.hour)/100
}
hoursWorkedOnDate(testEmployee, "2015-02-28")

function wagesEarnedOnDate(employee, date) {
  return hoursWorkedOnDate(employee, date) * employee.payPerHour
}
wagesEarnedOnDate(testEmployee, "2015-02-28")

function allWagesFor(employee) {
  return employee.timeInEvents.reduce((total, event) => total + wagesEarnedOnDate(employee, event.date), 0)
}
allWagesFor(testEmployee)

function calculatePayroll(employees) {
  return employees.reduce((total, employee) => total + allWagesFor(employee),0)
}
calculatePayroll(twoRows)

const findEmployeeByFirstName = (employees, firstName) => {
  return employees.find(employee => employee.firstName === firstName)
}


