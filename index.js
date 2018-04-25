
var $tbody = document.querySelector('tbody');
var $dateTimeInput = document.querySelector("#DateTime");
var $stateInput = document.querySelector('#state');
var $cityInput=document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $searchBtn = document.querySelector('#search');


var ufo_data = data;

$searchBtn.addEventListener('click', handleSearchButtonClick);

function renderTable() {
    $tbody.innerHTML = '';
    for (var i = 0; i < ufo_data.length; i++) {

      var component = ufo_data[i];
      var fields = Object.keys(component);

      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {

        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
  }

  function fillTable() {
    var Search_for_State=$stateInput.value.trim().toLowerCase();
    var Search_for_City = $cityInput.value.trim().toLowerCase();
    var Search_for_Date= $dateInput.value.trim();
    var Search_for_Shape=$shapeInput.value.trim().toLowerCase();

      if (Search_for_State != '') {
      ufo_data=dataSet.filter(function(stateFiltered){
      var elementState=stateFiltered.state.toLowerCase();
      return elementState===Search_for_State; })
        });

      if (Search_for_City != '') {
      ufo_data=dataSet.filter(function(cityFiltered){
      var elementCity=cityFiltered.city.toLowerCase();
      return elementCity===Search_for_City;})
      	};

      if (Search_for_Date != '') {
		  ufo_data=dataSet.filter(function(dateFiltered){
		  var elementDate=dateFiltered.datetime.toLowerCase();
		  return elementDate===Search_for_Date;})
	      };

      if (Search_for_Shape!=''){
      ufo_data=dataSet.filter(function(shapeFiltered){
      var elementShape=shapeFiltered.shape.toLowerCase();
      return elementShape===Search_for_Shape;
      		})
      	};

      	fillTable();
