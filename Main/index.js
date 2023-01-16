const inquirer = require("inquirer");
const fs = require("fs");


const generateREADME =({title, description,installation,usage,contribution,license,test,github,email}) => 
    `# title
    ${title}

  
     # description
     ${description}


     # installation
     ${installation}


     # usage
     ${usage}


     # contribution
     ${contribution}


     # license
     ${license}


     # test
     ${test}


     # github
     ${github}


     # email
     ${email}
    `
;

inquirer
.prompt([ 
    {
        name:"title",
        message:"What is your project name?",
        type:"input",
    },
    { 
        name:"description",
        message:"How would you describe your project?",
        type:"input",
    },
    {
        name:"installation",
        message:"What command should be used to install the dependencies?",
        default:"npm i",
        type:"input",
    },
    {  
        name:"usage",
        message:"What should someone know about this repository?",
        type:"input",
    },
    { 
        name:"contribution",
        message:"If someone wants to contribute to the project,what should they know?",
        type:"input",
    },
    { 
        name:"license",
        message:"What licence will your project use?",
        choices:["BSD","GPL","MIT","CDDL","none"],
        type:"list",
    },
    { 
        name:"test",
        message:"What's the command to run test?",
        default:"npm test",
        type:"input",

    },
    { 
        name:"github",
        message:"Provide your github username.",
        type:"input",
    },
    { 
        name:"email",
        message:"Provide your email address.",
        type:"input",
    },
])
.then((data) => {
    const readme = generateREADME(data);
    console.log(readme);
    fs.writeFile("README.md", readme, (err) => {
        if(err){
            console.log(err);
        } else {
           console.log("successfully writen file!"); 
        }
    });

});