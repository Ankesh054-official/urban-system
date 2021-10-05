let CurrentDate = new Date();
let data = [{}, {}];
hide(document.getElementById("calender"));

function hide(element) {
  return (element.style = `display: none;`);
}

function show(element) {
  return (element.style = `display: flex;`);
}

function calender() {
    let monthsOf31 = {January, March, May, July, August, October, December}
    let year = CurrentDate.gety
    date = CurrentDate.getDate();
    for(i = 0; i < 31; i++){
        date += 1;
        console.log(date);
    }
    let htm = ``;
    htm += `
    <button type="button" class="btn btn-light" style="border-right: 2px solid rgb(179, 179, 179);">1 OCt</button>    
    `;
    return (document.getElementById("dates").innerHTML = htm);
}

function onInit() {
  date =
    CurrentDate.getDate() +
    " " +
    CurrentDate.toLocaleString("default", { month: "short" }) +
    " " +
    CurrentDate.getFullYear();
  let locat = ["Delhi", "Mumbai", "Kolkata"];
  let corporate = {};
  let mall = {};

  for (let i = 0; i < 2; i++) {
    locat.forEach((everylocation) => {
      data[i][everylocation] = {};
      for (let j = 0; j < 2; j++) {
        data[i][everylocation][date] = {};
        for (let k = 0; k < 2; k++) {
          data[i][everylocation][date][
            CurrentDate.getHours() + ":" + CurrentDate.getMinutes()
          ] = 2;
          data[i][everylocation][date][
            CurrentDate.getHours() + 1 + ":" + CurrentDate.getMinutes()
          ] = 2;
        }
      }
    });
  }
  document.getElementById("co").addEventListener("click", corp);
  document.getElementById("ma").addEventListener("click", mal);
}
onInit()


function corp() {
  calender()
  let corporate = data[0];
  let htm = ``;
  Object.keys(corporate).forEach((Colocation) => {
    Object.keys(corporate[Colocation]).forEach((dt) => {
      Object.keys(corporate[Colocation][dt]).forEach((tme) => {
        // console.log(Colocation + "  " + dt + " " + tme + " " + " " + corporate[Colocation][dt][tme]);
        htm += `
                                <div class="card mb-3 mx-3" style="width: 100%;">
                                    <div class="card-body">
                                        <h5 class="card-title">${Colocation}</h5>
                                        <p class="card-text">${dt}</p>
                                        <a href="#" class="btn btn-primary">${tme}</a>
                                    </div>  
                                </div>`;
      });
    });
  });
  show(document.getElementById("calender"));
  return (document.getElementById("result").innerHTML = htm);
}

function mal() {
  calender()
  let mall = data[1];
  let htm = ``;
  Object.keys(mall).forEach((Colocation) => {
    Object.keys(mall[Colocation]).forEach((dt) => {
      Object.keys(mall[Colocation][dt]).forEach((tme) => {
        // console.log(Colocation + "  " + dt + " " + tme + " " + " " + corporate[Colocation][dt][tme]);
        htm += `            <div class="card mb-3 mx-3" style="width: 100%;">
                                        <div class="card-body">
                                            <h5 class="card-title">${Colocation}</h5>
                                            <p class="card-text">${dt}</p>
                                            <a href="#" class="btn btn-primary">${tme}</a>
                                        </div>
                                    </div>`;
      });
    });
  });
  show(document.getElementById("calender"));
  return (document.getElementById("result").innerHTML = htm);
}
