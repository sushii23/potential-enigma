const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

const questions = [ 
    {
       type:"input",
       name:"",
       message:"What is your project name?",
    },
    { 
        type:"input",
        name:"",
        message:"How would you describe your project?",
    },
    {
        type:"input",
        name:"",
        message:"",
    },
    { 
        type:"input",
        name:"",
        message:"",
    },
    { 
        type:"input",
        name:"",
        message:"",
    },
    { 
        type:"list",
        name:"",
        message:"",
    },
    { 
        type:"input",
        name:"",
        message:"",
    },
    { 
        type:"input",
        name:"",
        message:"What's your github username?",
    },
    { 
        type:"input",
        name:"",
        message:"What's your email address?",
    },
























];