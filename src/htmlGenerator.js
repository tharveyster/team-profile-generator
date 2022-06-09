// Creates html code for manager card
const createManager = function (manager) {
    return `
    <div class="col-4">
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">${manager.name}</h4>
            <h5 class="card-subtitle"><i class="material-icons">work</i> Manager</h5>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a>
            <p class="card-text">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
`;
}

// Creates html code for engineer cards
const createEngineer = function (engineer) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">${engineer.name}</h4>
                <h5 class="card-subtitle"><i class="material-icons">construction</i> Engineer</h5>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${engineer.id}</p>
                <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></a>
                <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Creates html code for intern cards
const createIntern = function (intern) {
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">${intern.name}</h4>
                <h5 class="card-subtitle"><i class="material-icons">school</i> Intern</h5>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${intern.id}</p>
                <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></a>
                <p class="card-text">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

// Compiles the html code array for all employees
htmlGenerator = (code) => {
    const htmlPage = [];

    for (let i = 0; i < code.length; i++) {
        const employee = code[i];
        const role = employee.getRole();
        
        if (role === "Manager") {
            const managerHTML = createManager(employee);
            htmlPage.push(managerHTML);
        }

        if (role === "Engineer") {
            const engineerHTML = createEngineer(employee);
            htmlPage.push(engineerHTML);
        }

        if (role === "Intern") {
            const internHTML = createIntern(employee);
            htmlPage.push(internHTML);
        }
    }

    const employeeHTML = htmlPage.join('');

    const createTeamProfile = createTeam(employeeHTML);
    return createTeamProfile;
}

// Creates the base html code for the team profile page
const createTeam = function (employeeHTML) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="container container-fluid">
            <div class="header-title">
                <h1>Team Profile</h1>
            </div>
        </header>
        <main class="container">
            <div class="row justify-content-center">
                ${employeeHTML}
            </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}

module.exports = htmlGenerator;