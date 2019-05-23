// from data.js
 //var tableData = data;

// YOUR CODE HERE!

var tbody = document.querySelector("tbody");
var dateInput = document.querySelector("#datetime");
var stateInput = document.querySelector("#state");
var searchBtn = document.querySelector("#search");
var cityInput = document.querySelector("#city");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");


// event listener button
searchBtn.addEventListener("click", handleSearchButtonClick);


var tableData = data;


function renderTable() {
  tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    
    var ufotbl = tableData[i];
    console.log(ufotbl)
    var fields = Object.keys(ufotbl);
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = ufotbl[field];
    }
  }
}

function handleSearchButtonClick(event) {
  event.preventDefault();
  var filterDate = dateInput.value;
  var filterState = stateInput.value.trim().toLowerCase();
  var filterCity = cityInput.value.trim().toLowerCase();
  var filterCountry = countryInput.value.trim().toLowerCase();
  var filterShape = shapeInput.value.trim().toLowerCase();

  // if condition matches the filter
  if (filterDate != "")
  {
    tableData= data.filter(function(ufotbl) 
    {
      var uDate = ufotbl.datetime; 
    
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return uDate === filterDate;
    });
  }
  else {tableData};
  

 if(filterState != "")
  {
    tableData = tableData.filter(function(ufotbl)
    {
      var uState = ufotbl.state;
      return uState === filterState;
    });
  }
  else{tableData};

  if(filterCity != "")
  {
    tableData = tableData.filter(function(ufotbl)
    {
      var uCity = ufotbl.city;
      return uCity === filterCity;
    });
  }

  else{tableData};

  if(filterCountry != "")
  {
    tableData = tableData.filter(function(ufotbl)
    {
      var uCountry = ufotbl.country;
      return uCountry === filterCountry;
    });
  }
  else{tableData};

  if(filterShape != "")
  {
    tableData= tableData.filter(function(ufotbl)
    {
      var uShape = ufotbl.shape;
      return uShape === filterShape;
    });
  }
  else{tableData};


// show table which matches condition 
renderTable();

}

// show the table initially
renderTable();


$(document).ready(function() {
  $('#table').DataTable();
});