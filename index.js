let CurrentDate = new Date();
let data = [{}, {}];
hide(document.getElementById("calender"));

function hide(element) {
  return (element.style = `display: none;`);
}

function show(element) {
  return (element.style = `display: flex;`);
}

function check(){
  if(localStorage.getItem("selectedSlots")){
    return true;
  }else{
    let data = [{},{}];
    localStorage.setItem("selectedSlots",JSON.stringify(data));
  }

}

function storeSelected(data){
  if(localStorage.getItem("selectedSlots")){
  }else{
    let selecteddata = [{},{}];
    localStorage.setItem("selectedSlots",JSON.stringify(selecteddata));
  }
  // let 
  // console.log(data);
}

function calender() {
  let htm = ``;
  let months = [31, 0,31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let monthsName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  let year = CurrentDate.getFullYear();
  // program to check leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      months[1] = 29;
  } else {
      months[1] = 28;
  }
  date = CurrentDate.getDate();
  CurrentMonth = CurrentDate.getMonth();
  for(i = date; i <= months[CurrentMonth]; i++){
  htm += `<button type="button" class="btn btn-light" style="border-right: 2px solid rgb(179, 179, 179);" id="${date}/${monthsName[CurrentMonth]}/${year}" onclick="${localStorage.setItem("selectedDate",this.id)}">${date} ${monthsName[CurrentMonth]}</button>`;
    date += 1;
  }
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
// onInit()

function removeCaches(){
  localStorage.removeItem("mall");
  localStorage.removeItem("corporate");
  localStorage.removeItem("selectedSlots");
}

function corp() {
  if(localStorage.getItem("mall")){
    localStorage.setItem("mall",false);
  }else{
    localStorage.setItem("mall",false);
  }
  localStorage.setItem("corporate",true);
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
  if(localStorage.getItem("corporate")){
    localStorage.setItem("corporate",false);
  }else{
    localStorage.setItem("corporate",false);
  }
  localStorage.setItem("mall",true);
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
