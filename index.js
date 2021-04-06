const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/page-template');

// array for team members
const teamArray = [];


function managerPrompt () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'managerName',
            message: 'What is the name of your team manager?'
        },
        {
            type: 'text',
            name: 'managerID',
            message: 'What is your managers Employee ID?'
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: 'What is your managers email address?'
        },
        {
            type: 'text',
            name: 'managerOffice',
            message: 'What is your managers office number?'
        }
    ])
    .then(function(responses) {
        const manager = new Manager(responses.managerName, responses.managerID, responses.managerEmail, responses.managerOffice)
        teamArray.push(manager);
        addTeamMembers();
    })
};

function addTeamMembers () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addTeam',
            message: 'What type of team member you would like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Finish building my team'
            ],
        },
    ])
    .then(function(responses) {
        switch (responses.addTeam) {
            case "Engineer":
                engineerPrompt()
            break;
            case "Intern":
                internPrompt()
            break;
            case "Finish building my team":
                completeTeam()
        }
    })
}

// if user chooses to add an engineer
function engineerPrompt () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineers id?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?',   
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineers Github username?',
        }
    ])
    .then(function(responses) {
        const engineer = new Engineer(responses.engineerName, responses.engineerID, responses.engineerEmail, responses.engineerGithub)
        teamArray.push(engineer);
        addTeamMembers();
    })
}
// this needs to be updated*
function completeTeam() {
    console.log(teamArray);
    fs.writeFile('./dist/myTeam.html', generateTeam(teamArray), err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Success!');
    });
};

// if user chooses to add an intern
function internPrompt () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the interns ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the interns school?',
        }
    ])
    .then(function(responses) {
        const intern = new Intern(responses.internName, responses.internID, responses.internEmail, responses.internSchool);
        teamArray.push(intern);
        addTeamMembers();
    })
}


managerPrompt();
