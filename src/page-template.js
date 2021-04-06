function generateTeam(team) {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        
    </head>
    <body>

    <div class="container justify-content-center">
    <div class="row justify-content-center p-3 mb-2 bg-danger text-white">
            <h1>My Team</h1>
        </div>
    </div>
    <div class="row justify-content-center">
    ` 
    
    for (i = 0; i < team.length; i++) {
        let currentRole = (team[i].getRole());
        if (currentRole === "Manager") {
            html+= `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="p-3 mb-2 bg-info text-dark">
                    <h5 class="card-title">${team[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${currentRole}</h6>
                </div>
                <p class="card-text">Employee ID: ${team[i].id}</p>
                <p class="card-text">Email: <a href="mailto:${team[i].email}">${team[i].email}</a> </p>
                <p class="card-text">Office number: ${team[i].officeNumber}</p>
            </div>
            </div>
            `
        }

        else if (currentRole === "Engineer") {
            html+= `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <div class="p-3 mb-2 bg-info text-dark">
                    <h5 class="card-title">${team[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${currentRole}</h6>
                </div>
                <p class="card-text">Employee ID: ${team[i].id}</p>
                <p class="card-text">Email: <a href="mailto:${team[i].email}">${team[i].email}</a> </p>
                <p class="card-text">Github: <a href="https://github.com/${team[i].github}" class="card-link">${team[i].github}</a></p>
            </div>
            </div>
        `
        }

        else if (currentRole === "Intern") {
            html+= `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <div class="p-3 mb-2 bg-info text-dark">
                    <h5 class="card-title">${team[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${currentRole}</h6>
                </div>
                <p class="card-text">Employee ID: ${team[i].id}</p>
                <p class="card-text">Email: <a href="mailto:${team[i].email}">${team[i].email}</a> </p>
                <p class="card-text">School: ${team[i].school}</p>
            </div>
            </div>
        `
    }
    }

    html += `
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
    </html>
    `

    return html;
};

module.exports = generateTeam;