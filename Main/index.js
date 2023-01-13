const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require();

const questions = [ 
    {
        name:"title",
        message:"What is your project name?",
        type:"input",
    },
    { 
        name:"Description",
        message:"How would you describe your project?",
        type:"input",
    },
    {
        name:"Installation",
        message:"",
        type:"input",
    },
    {  
        name:"usage",
        message:"",
        type:"input",
    },
    { 
        name:"contribution",
        message:"",
        type:"input",
    },
    { 
        type:"list",
        name:"",
        message:"",
        choices:""
    },
    { 
        name:"test",
        message:"",
        type:"input",
    },
    { 
        name:"github",
        message:"What's your github username?",
        type:"input",
    },
    { 
        name:"email",
        message:"provide your email address.",
        type:"input",
    },
























];