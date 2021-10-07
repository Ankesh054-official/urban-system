let CurrentDate = new Date();
let data = [{}, {}];
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
  let dat = [{},{}];
  localStorage.setItem("selectedData",JSON.stringify(dat));
  date = date.replace(/\s/g, '/');
  localStorage.setItem("selectedDate",date);
  document.getElementById("co").addEventListener("click", corp);
  document.getElementById("ma").addEventListener("click", mal);
}

// onInit()

function removeCaches(){
  localStorage.removeItem("mall");
  localStorage.removeItem("corporate");
  localStorage.removeItem("selectedSlots");
  localStorage.removeItem("selectedDate");
  // localStorage.removeItem("selectedData");
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



function addSlot(data){
  // check()
  let selecteddata = JSON.parse(localStorage.getItem("selectedData"));
  let corporateStatus = localStorage.getItem("corporate");
  let mallStatus = localStorage.getItem("mall");
  let locat = data.split("/")[0];
  let time = data.split("/")[1];
  if(corporateStatus == "true"){
    let locatio = false;
    Object.keys(selecteddata[0]).forEach(lo =>{
      if(lo == locat){
        locatio = true;
      }else{
        locatio = false;
      }
    });
    if(locatio){
      console.log(locatio)
      let dateio = false;
      Object.keys(selecteddata[0][locat]).forEach(lo =>{
        if(lo == localStorage.getItem("selectedDate")){
          dateio =  true;
        }else{
          datio = false;
        }
      });
        if(dateio){
          let timio = false;
          Object.keys(selecteddata[0][locat][localStorage.getItem("selectedDate")]).forEach(lo =>{
            if(lo == time){
              timio = true;
            }else{
              timio = false;
            }
          });
          if(timio){
            console.log(selecteddata[0][locat][localStorage.getItem("selectedDate")][time]);
          }else{
            selecteddata[0][locat][localStorage.getItem("selectedDate")][time] = 1;
          }
        }else{
          selecteddata[0][locat][localStorage.getItem("selectedDate")] = {};
          selecteddata[0][locat][localStorage.getItem("selectedDate")][time] = 1;
        }
    }else{
      selecteddata[0][locat] = {};
      selecteddata[0][locat][localStorage.getItem("selectedDate")] = {};
      selecteddata[0][locat][localStorage.getItem("selectedDate")][time] = 1;
    }
  }else{
    locatio = Object.keys(selecteddata[1]).forEach(lo =>{
      if(lo == locat){
        return true;
      }else{
        return false;
      }
    });
    if(locatio){
      dateio = Object.keys(selecteddata[1][locat]).forEach(lo =>{
        if(lo == localStorage.getItem("selectedDate")){
          return true;
        }else{
          return false;
        }
      });
        if(dateio){
          timio = Object.keys(selecteddata[1][locat][localStorage.getItem("selectedDate")]).forEach(lo =>{
            if(lo == time){
              return true;
            }else{
              return false;
            }
          });
          if(timio){
            selecteddata[1][locat][localStorage.getItem("selectedDate")][time] += 1;
          }else{
            selecteddata[1][locat][localStorage.getItem("selectedDate")][time] = 1;
          }
        }else{
          selecteddata[1][locat][localStorage.getItem("selectedDate")] = {};
          selecteddata[1][locat][localStorage.getItem("selectedDate")][time] = 1;
        }
    }else{
      selecteddata[1][locat] = {};
      selecteddata[1][locat][localStorage.getItem("selectedDate")] = {};
      selecteddata[1][locat][localStorage.getItem("selectedDate")][time] = 1;
    }
    
  }
  localStorage.setItem("selectedData",JSON.stringify(selecteddata));
}

function setDate(data) {
  localStorage.setItem("selectedDate",data); 
  let dark = document.getElementsByClassName("btn-dark");
  for (let i = 0; i < dark.length; i++) {
    let classes = ``;
    if(dark[i].id != "co" && dark[i].id != "ma"){
      let x = dark[i].className.split(" ");
      x.forEach(clas => {
        if(clas != "btn-dark")
        classes += ` ${clas}`;
      });
      dark[i].className = classes;
    }
  }
  document.getElementById(data).className += " btn-dark";
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
      // Object.keys(corporate[Colocation][dt]).forEach((tme) => {
        // console.log(Colocation + "  " + dt + " " + tme + " " + " " + corporate[Colocation][dt][tme]);
        htm += `
                                <div class="card mb-3 mx-3" style="width: 100%;">
                                    <div class="card-body">
                                        <h5 class="card-title">${Colocation}</h5>
                                        <div class="accordion" id="accordionExample">
                                          <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Book Slots
                                              </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                              <div class="accordion-body">
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/1:00" onclick="addSlot(this.id)">1:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/2:00" onclick="addSlot(this.id)">2:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/3:00" onclick="addSlot(this.id)">3:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/4:00" onclick="addSlot(this.id)">4:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/5:00" onclick="addSlot(this.id)">5:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/6:00" onclick="addSlot(this.id)">6:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/7:00" onclick="addSlot(this.id)">7:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/8:00" onclick="addSlot(this.id)">8:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/9:00" onclick="addSlot(this.id)">9:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/10:00" onclick="addSlot(this.id)">10:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/11:00" onclick="addSlot(this.id)">11:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/12:00" onclick="addSlot(this.id)">12:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/13:00" onclick="addSlot(this.id)">13:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/14:00" onclick="addSlot(this.id)">14:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/15:00" onclick="addSlot(this.id)">15:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/16:00" onclick="addSlot(this.id)">16:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/17:00" onclick="addSlot(this.id)">17:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/18:00" onclick="addSlot(this.id)">18:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/19:00" onclick="addSlot(this.id)">19:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/20:00" onclick="addSlot(this.id)">20:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/21:00" onclick="addSlot(this.id)">21:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/22:00" onclick="addSlot(this.id)">22:00</a>
                                              <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/23:00" onclick="addSlot(this.id)">23:00</a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>  
                                    </div>
                                </div>`;
      // });
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
      // Object.keys(mall[Colocation][dt]).forEach((tme) => {
        // console.log(Colocation + "  " + dt + " " + tme + " " + " " + corporate[Colocation][dt][tme]);
        htm += `
        <div class="card mb-3 mx-3" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${Colocation}</h5>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Book Slots
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/1:00" onclick="addSlot(this.id)">1:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/2:00" onclick="addSlot(this.id)">2:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/3:00" onclick="addSlot(this.id)">3:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/4:00" onclick="addSlot(this.id)">4:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/5:00" onclick="addSlot(this.id)">5:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/6:00" onclick="addSlot(this.id)">6:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/7:00" onclick="addSlot(this.id)">7:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/8:00" onclick="addSlot(this.id)">8:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/9:00" onclick="addSlot(this.id)">9:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/10:00" onclick="addSlot(this.id)">10:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/11:00" onclick="addSlot(this.id)">11:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/12:00" onclick="addSlot(this.id)">12:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/13:00" onclick="addSlot(this.id)">13:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/14:00" onclick="addSlot(this.id)">14:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/15:00" onclick="addSlot(this.id)">15:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/16:00" onclick="addSlot(this.id)">16:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/17:00" onclick="addSlot(this.id)">17:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/18:00" onclick="addSlot(this.id)">18:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/19:00" onclick="addSlot(this.id)">19:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/20:00" onclick="addSlot(this.id)">20:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/21:00" onclick="addSlot(this.id)">21:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/22:00" onclick="addSlot(this.id)">22:00</a>
                      <a href="#" class="btn btn-primary mx-3 my-2" id="${Colocation}/23:00" onclick="addSlot(this.id)">23:00</a>
                      </div>
                    </div>
                  </div>
                </div>  
            </div>
        </div>`;
      // });
    });
  });
  show(document.getElementById("calender"));
  return (document.getElementById("result").innerHTML = htm);
}
