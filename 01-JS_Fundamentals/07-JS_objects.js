// Challenge 1
// Print all of the students and their cohort.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
// console.log(students);
// console.log(students.length);
for (let i=0; i<students.length; i++) {
    console.log('Name: '+students[i].name+', Cohort: '+students[i].cohort);
}

// Challenge 2
// Print out the below object to match the example.
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
//  console.log(users)
//  console.log(users.employees.length);

// Solution 1
console.log('EMPLOYEES');
let no1 = 0;
for (let user in users.employees) {
    // console.log(users.employees[user]);
    name = users.employees[user].last_name+', '+users.employees[user].first_name;
    len = users.employees[user].last_name.length + users.employees[user].first_name.length;
    no1 += 1;
    console.log(no1+' - '+name+' - '+len);
}
console.log('MANAGER');
let no2 = 0;
for (let user in users.managers) {
    // console.log(users.managers[user]);
    name = users.managers[user].last_name+', '+users.managers[user].first_name;
    len = users.managers[user].last_name.length + users.managers[user].first_name.length;
    no2 += 1;
    console.log(no2+' - '+name+' - '+len);
}
console.log('********')
// Solution 2
function list(x) {
    let no = 0
    for (let item in x) {
        // console.log(x[user]);
        name = x[item].last_name+', '+x[item].first_name;
        len = x[item].last_name.length + x[item].first_name.length;
        no += 1;
        console.log(no+' - '+name+' - '+len);
    }
}
console.log('EMPLOYEES');
list(users.employees);
console.log('MANAGER');
list(users.managers);