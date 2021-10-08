let data = [[], []];
let CurrentDate = new Date();
hide(document.getElementById("calender"));

function hide(element) {
  return (element.style = `display: none;`);
}

function show(element) {
  return (element.style = `display: flex;`);
}

function onInit() {
  date =
    CurrentDate.getDate() +
    " " +
    (CurrentDate.toLocaleString("default", { month: "short" })).toUpperCase() +
    " " +
    CurrentDate.getFullYear();
  let locat = [1, 2, 3];

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
  let dat = {};
  localStorage.setItem("selectedData",JSON.stringify(dat));
  // date = date.replace(/\s/g, '/');
  // localStorage.setItem("selectedDate",date);
}

// onInit()

function removeCaches(){
  // localStorage.removeItem("mall");
  // localStorage.removeItem("corporate");
  // localStorage.removeItem("selectedSlots");
  // localStorage.removeItem("selectedDate");
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
    for(j = CurrentMonth; j <= 12; j++){
      for(i = date; i <= months[j]; i++){
      htm += `<button type="button" class="btn btn-light" style="border-right: 2px solid rgb(179, 179, 179);" id="${date}/${monthsName[j]}/${year}" onclick="setDate(this.id)">${date} ${monthsName[j]}</button>`;
        date += 1;
      }
      date = 1;
    }
  return (document.getElementById("dates").innerHTML = htm);
}

function adding_To_JSON_Tree(selecteddata, site, locat, time){
  let locatio = false;
  let indx = 0;
  // let INDEX = 0;
  // selecteddata[0] Corporate data
  // // selecteddata[1] Mall data 
  // for(INDEX = 0; INDEX < selecteddata.length; INDEX++){
    for(indx = 0; indx < selecteddata[site].length; indx++){
      lo = selecteddata[site][indx]["id"];
      // Checking location exists or not
      if(lo == locat){
        locatio = true;
        break;
      }
    }
  // }
  if(locatio){
    // let dateio = false;
    // Object.keys(selecteddata[index]["slots"]).forEach(lo =>{
      //   // Checking date exists or not
      //   if(lo == localStorage.getItem("selectedDate")){
        //     return dateio =  true;
        //   }
        // });
        // if(locatio){
    let timio = false;
    Object.keys(selecteddata[site][indx]["slots"]).forEach(lo =>{
      // Checking time exists or not
      if(lo == time){
        return timio = true;
      }
    });
    if(timio){
      selecteddata[site][indx]["slots"][time] += 1;
    }else{
      selecteddata[site][indx]["slots"][time] = 1;
    }
      // }else{
        //   selecteddata[index][locat] = {};
        //   selecteddata[index][locat][time] = 1;
      // }
  }else{
      // creating new object containing location id and slots 
      // for(int )
      selecteddata[site].push({});
      selecteddata[site][indx]["id"] = locat;
      selecteddata[site][indx]["slots"] = {};
      selecteddata[site][indx]["slots"] = {};
      selecteddata[site][indx]["slots"][time] = 1;
    }
  localStorage.setItem("selectedData",JSON.stringify(selecteddata));
}

function addSlot(data, site){
  // console.log(data);
  // check()
  let selecteddata = JSON.parse(localStorage.getItem("selectedData"));
  // let corporateStatus = localStorage.getItem("corporate");
  // let mallStatus = localStorage.getItem("mall");
  let locat = data.split("/")[0];
  let time = data.split("/")[1];
  adding_To_JSON_Tree(selecteddata, site, locat, time);

  // if(corporateStatus == "true"){
  //   adding_To_JSON_Tree(selecteddata, site, locat, time, 0);
  // }else{
  //   adding_To_JSON_Tree(selecteddata, site, locat, time, 1);
  // }
}

// function setDate(data) {
//   localStorage.setItem("selectedDate",data); 
//   let dark = document.getElementsByClassName("btn-dark");
//   for (let i = 0; i < dark.length; i++) {
//     let classes = ``;
//     if(dark[i].id != "co" && dark[i].id != "ma"){
//       let x = dark[i].className.split(" ");
//       x.forEach(clas => {
//         if(clas != "btn-dark")
//         classes += ` ${clas}`;
//       });
//       dark[i].className = classes;
//     }
//   }
//   document.getElementById(data).className += " btn-dark";
// }


function corp(idc) {
  // if(localStorage.getItem("mall")){
  //   localStorage.setItem("mall",false);
  // }else{
  //   localStorage.setItem("mall",false);
  // }
  // localStorage.setItem("corporate",true);
  let DA = JSON.parse(localStorage.getItem("selectedData"));
  DA[idc] = [];
  localStorage.setItem("selectedData",JSON.stringify(DA));
  // calender()
  let corporate = data[0];
  let htm = ``;
  let loc;
  Object.keys(corporate).forEach((Colocation) => {
    Object.keys(corporate[Colocation]).forEach((dt) => {
      // Object.keys(corporate[Colocation][dt]).forEach((tme) => {
      //   console.log(Colocation + "  " + dt + " " + tme + " " + " " + corporate[Colocation][dt][tme]);
        if(Colocation == 1){
          loc = "Delhi";
        }else if(Colocation == 2){
          loc = "Mumbai";
        }else if(Colocation == 3){
          loc = "Kolkata";
        }
        htm += `
                                <div class="card mb-3 mx-3" style="width: 100%;">
                                    <div class="card-body">
                                        <h5 class="card-title">${loc}</h5>
                                        <div class="accordion" id="accordionExample">
                                          <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Book Slots
                                              </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                              <div class="accordion-body">
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/1:00" onclick="addSlot(this.id, '${idc}')">1:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/2:00" onclick="addSlot(this.id, '${idc}')">2:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/3:00" onclick="addSlot(this.id, '${idc}')">3:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/4:00" onclick="addSlot(this.id, '${idc}')">4:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/5:00" onclick="addSlot(this.id, '${idc}')">5:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/6:00" onclick="addSlot(this.id, '${idc}')">6:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/7:00" onclick="addSlot(this.id, '${idc}')">7:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/8:00" onclick="addSlot(this.id, '${idc}')">8:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/9:00" onclick="addSlot(this.id, '${idc}')">9:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/10:00" onclick="addSlot(this.id, '${idc}')">10:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/11:00" onclick="addSlot(this.id, '${idc}')">11:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/12:00" onclick="addSlot(this.id, '${idc}')">12:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/13:00" onclick="addSlot(this.id, '${idc}')">13:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/14:00" onclick="addSlot(this.id, '${idc}')">14:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/15:00" onclick="addSlot(this.id, '${idc}')">15:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/16:00" onclick="addSlot(this.id, '${idc}')">16:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/17:00" onclick="addSlot(this.id, '${idc}')">17:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/18:00" onclick="addSlot(this.id, '${idc}')">18:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/19:00" onclick="addSlot(this.id, '${idc}')">19:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/20:00" onclick="addSlot(this.id, '${idc}')">20:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/21:00" onclick="addSlot(this.id, '${idc}')">21:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/22:00" onclick="addSlot(this.id, '${idc}')">22:00</button>
                                                <button class="btn btn-primary mx-3 my-2" id="${Colocation}/23:00" onclick="addSlot(this.id, '${idc}')">23:00</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>  
                                    </div>
                                </div>`;
      // });
    });
  });
  // show(document.getElementById("calender"));
  return (document.getElementById("result").innerHTML = htm);
}

function mal(idc) {
  // if(localStorage.getItem("corporate")){
  //   localStorage.setItem("corporate",false);
  // }else{
  //   localStorage.setItem("corporate",false);
  // }
  // localStorage.setItem("mall",true);
  let DA = JSON.parse(localStorage.getItem("selectedData"));
  DA[idc] = [];
  localStorage.setItem("selectedData",JSON.stringify(DA));
  // calender()
  let mall = data[1];
  let htm = ``;
  Object.keys(mall).forEach((Colocation) => {
    Object.keys(mall[Colocation]).forEach((dt) => {
      // Object.keys(mall[Colocation][dt]).forEach((tme) => {
        // console.log(Colocation + "  " + dt + " " + tme + " " + " " + corporate[Colocation][dt][tme]);
        if(Colocation == 1){
          loc = "Delhi";
        }else if(Colocation == 2){
          loc = "Mumbai";
        }else if(Colocation == 3){
          loc = "Kolkata";
        }
        htm += `
        <div class="card mb-3 mx-3" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${loc}</h5>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Book Slots
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/1:00" onclick="addSlot(this.id, '${idc}')">1:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/2:00" onclick="addSlot(this.id, '${idc}')">2:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/3:00" onclick="addSlot(this.id, '${idc}')">3:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/4:00" onclick="addSlot(this.id, '${idc}')">4:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/5:00" onclick="addSlot(this.id, '${idc}')">5:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/6:00" onclick="addSlot(this.id, '${idc}')">6:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/7:00" onclick="addSlot(this.id, '${idc}')">7:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/8:00" onclick="addSlot(this.id, '${idc}')">8:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/9:00" onclick="addSlot(this.id, '${idc}')">9:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/10:00" onclick="addSlot(this.id, '${idc}')">10:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/11:00" onclick="addSlot(this.id, '${idc}')">11:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/12:00" onclick="addSlot(this.id, '${idc}')">12:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/13:00" onclick="addSlot(this.id, '${idc}')">13:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/14:00" onclick="addSlot(this.id, '${idc}')">14:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/15:00" onclick="addSlot(this.id, '${idc}')">15:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/16:00" onclick="addSlot(this.id, '${idc}')">16:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/17:00" onclick="addSlot(this.id, '${idc}')">17:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/18:00" onclick="addSlot(this.id, '${idc}')">18:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/19:00" onclick="addSlot(this.id, '${idc}')">19:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/20:00" onclick="addSlot(this.id, '${idc}')">20:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/21:00" onclick="addSlot(this.id, '${idc}')">21:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/22:00" onclick="addSlot(this.id, '${idc}')">22:00</button>
                        <button class="btn btn-primary mx-3 my-2" id="${Colocation}/23:00" onclick="addSlot(this.id, '${idc}')">23:00</button>
                      </div>
                    </div>
                  </div>
                </div>  
            </div>
        </div>`;
      // });
    });
  });
  // show(document.getElementById("calender"));
  return (document.getElementById("result").innerHTML = htm);
}
