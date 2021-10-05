let CurrentDate = new Date();
date = CurrentDate.getDate() + " " + CurrentDate.toLocaleString('default', { month: 'short' }) + " " + CurrentDate.getFullYear()
// location1:{
//     date1:{time:count},
//     date2:{time:count}
// }
let locat = ["Delhi", "Mumbai", "Kolkata"];
let corporate = {};
let mall = {};
let data = [{}, {}];


for (let i = 0; i < 2; i++) {
    locat.forEach(everylocation => {
        data[i][everylocation] = {};
        for (let j = 0; j < 2; j++) {
            data[i][everylocation][date] = {};
            for (let k = 0; k < 2; k++) {
                data[i][everylocation][date][CurrentDate.getHours() + ":" + CurrentDate.getMinutes()] = 2;
                data[i][everylocation][date][(CurrentDate.getHours() + 1) + ":" + CurrentDate.getMinutes()] = 2;
            }
        }
    });
}

document.getElementById("co").addEventListener("click", corp);
document.getElementById("ma").addEventListener("click", mal);

function corp() {
    let corporate = data[0];
    let htm = ``;
    Object.keys(corporate).forEach(Colocation => {
        Object.keys(corporate[Colocation]).forEach(dt => {
            Object.keys(corporate[Colocation][dt]).forEach(tme => {
                // console.log(Colocation + "  " + dt + " " + tme + " " + " " + corporate[Colocation][dt][tme]);
                htm += `
                            <div class="container-fluid">
                                <div class="card my-2" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${Colocation}</h5>
                                        <p class="card-text">${dt}</p>
                                        <a href="#" class="btn btn-primary">${tme}</a>
                                    </div>
                                </div>
                            </div>`;
                document.write(htm);
            });
        });
    });
}


function mal() {
    let mall = data[1];
    let htm = ``;
    Object.keys(mall).forEach(Colocation => {
        Object.keys(mall[Colocation]).forEach(dt => {
            Object.keys(mall[Colocation][dt]).forEach(tme => {
                // console.log(Colocation + "  " + dt + " " + tme + " " + " " + mall[Colocation][dt][tme]);
                htm += `       <div class="container-fluid">
                                    <div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${Colocation}</h5>
                                            <p class="card-text">${dt}</p>
                                            <a href="#" class="btn btn-primary">${tme}</a>
                                        </div>
                                    </div>
                                </div>`;
                document.write(htm);
            });
        });
    });
    console.table(data)
}