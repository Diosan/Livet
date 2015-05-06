
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
var readingsArray = [];
var readings = [];
var reading = {};

if (localStorage.getItem("readings") == null) {

	//alert('Reading Empty');

	//readingsArray = [ { 'summary' : 'Test event <img src=\"img/emoticons/PNG/icontexto-emoticons-03-032x032.png\">', 'begin' : new Date(), 'end' : new Date() } ]; 
  
} else {
	
	//alert('Reading NOT Empty');
	
	//localStorage.removeItem('readings');
	
	reading = { 'summary' : '<center><b>Today<b></center>', 'begin' : new Date(y, m, d), 'end' : new Date(y, m, d) };
	
	readingsArray.push(reading);
	// = [ { "summary" : "Test event", "begin" : new Date(), "end" : new Date() } ];
		
	readings = JSON.parse(localStorage.getItem("readings"));
	
	
	var bdate = date.getDate();
	var edate = date.getDate();
	var bd = date.getDate();
	var bm = date.getMonth();
	var by = date.getFullYear();
	var ed = date.getDate();
	var em = date.getMonth();
	var ey = date.getFullYear();  
  
    for (i = 0; i < readings.length; i++) {
    	
      reading = JSON.parse(readings[i]);
        
      bd = parseInt(reading.begin.substring(0, 4));
	  bm = parseInt(reading.begin.substring(5, 7));
	  by = parseInt(reading.begin.substring(8, 10));
	  ed = parseInt(reading.end.substring(0, 4));
	  em = parseInt(reading.end.substring(5, 7));
	  ey = parseInt(reading.end.substring(8, 10));
	        
      readingsArray.push( { 'summary' : reading.summary, 'begin' : new Date(y, m, d), 'end' : new Date(y, m, d) } );
      
    }
        
    //alert(readings[readings.length - 1]);
   
}





// Create an array that will contain the events
var events = [];


$(function() {
	
	setProfile();
	setupCalendar();
    
	$('#profile_save').click( function() {
		
		// Store
		saveProfile();
		setProfile();	
	});
	
	$('#reading_save').click( function() {
		//var today = new Date();
		//alert(today.getUTCMonth());
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		var type = $('#reading_type').val();
		var value = $('#reading_value').val();
		var units = '';
		
	   switch (type) {
		    case "Weight":
        		units = "lbs";
        		break;		
		}
		
		date = new Date();
		d = date.getDate();
		m = date.getMonth();
 		y = date.getFullYear();
 		
		reading = { "summary" : type + ":" + value + " " + units, "begin" : new Date(y, m, d), "end": new Date(y, m, d) };
		readingsArray.push(reading);
		$('#calendar').trigger('refresh');
		readings.push(JSON.stringify(reading));
		localStorage.setItem('readings', JSON.stringify(readings));
		//localStorage.setItem("readings", JSON.stringify(readingsArray));
		
		$('.ui-li-static').each(function() {
		//alert('decoding HTML');
    		$( this ).decHTML();
  			//alert($(this).html());
    	});

		$('#calendar .ui-btn').click(function() {
    	$('.ui-li-static').each(function() {
    		$( this ).decHTML();
  			//alert($(this).html());
    	});	
    });		
		
	});
	
	$('#craving_type').change( function() {
		
		var values = $(this).val();
		var arrayLength = values.length;
		$('#craving_tip').html('');
		
		for (var i = 0; i < arrayLength; i++) {
			
			switch (values[i]) {
			    case 'Bready':
			        $('#craving_tip').append('<strong>Sugary:</strong> Insecurity, soothes dissatisfaction. <br><br>');
        		break;
			    case 'Chewy':
			        $('#craving_tip').append('<strong>Chewy:</strong> Relieves Tension stress, slowdown so you can unwind. <br><br>');
		        break;
			    case 'Creamy':
			        $('#craving_tip').append('<strong>Creamy:</strong> Helps satisfy need to be nurtured and to receive comfort. <br><br>');
		        break;
			    case 'Crunchy':
			        $('#craving_tip').append('<strong>Crunchy:</strong> Helps release anxiety pressure. <br><br>');
		        break;
			    case 'Salty':
			        $('#craving_tip').append('<strong>Salty:</strong> Redirects anger, frustration and violence. <br><br>');
		        break;
			    case 'Sugary':
			        $('#craving_tip').append('<strong>Sugary:</strong> Substitutes for missing Love, affection ability to give and receive love. <br><br>');
		        break;
			}
			
    		//alert(myStringArray[i]);
    		//Do something
		}	
		//var values = $(this).val().split(',');
		//alert('The first value in the array is ' + values[0]);
	});
	
	
	$('#journal_save').click( function() {
		//var today = new Date();
		//alert(today.getUTCMonth());
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		var mood = $('#journal_mood').val();
		var note = $('#journal_note').val();
		var icon = '';
		
	   switch (mood) {
		    case "Happy":
        		icon = "img/emoticons/PNG/icontexto-emoticons-03-032x032.png";
        		//alert(icon);
        		break;
        	case "Sad":
        		icon = "img/emoticons/PNG/icontexto-emoticons-13-032x032.png";
        		//alert(icon);
        		break;
        	case "Sick":
        		icon = "img/emoticons/PNG/icontexto-emoticons-11-032x032.png";
        		//alert(icon);
        		break;        				
		}
		
		date = new Date();
		d = date.getDate();
		m = date.getMonth();
 		y = date.getFullYear();
 		
		reading = { 'summary' : mood + '<img src="' + icon + '" > :' + note, 'begin' : new Date(y, m, d), 'end': new Date(y, m, d) };
		readingsArray.push(reading);
		$('#calendar').trigger('refresh');
		readings.push(JSON.stringify(reading));
		localStorage.setItem('readings', JSON.stringify(readings));
		//localStorage.setItem("readings", JSON.stringify(readingsArray));
		
		$('.ui-li-static').each(function() {
			//alert('decoding html');
    		$( this ).decHTML();
  			//alert($(this).html());
    	});		
		
	});

	
	$('#calendar .ui-btn').click(function() {
	
    	$('.ui-li-static').each(function() {
    		$( this ).decHTML();
  			//alert($(this).html());
    	});	
    });
			

});

$(document).on("pagecreate", function(){    
    var opts = $("#journal_mood option");
    $( "#journal_mood-listbox-popup" ).on( "popupafteropen", function( event, ui ) {
        $("#journal_mood-menu li").each(function(index){
            if ($(this).find("img").length == 0){
                var imageURL = opts.eq(index).data("image");
                var imgElem = '<img src=' + imageURL + ' width="32px" height="32px" />';
                $(this).find("a").prepend(imgElem);
            }
        });
    });
});



function saveProfile() {
	//alert($('#profile_breakfast').val());
	localStorage.setItem("name", $('#profile_name').val());
	localStorage.setItem("age", $('#profile_age').val() + " years");
	localStorage.setItem("weight", $('#profile_weight').val());
	localStorage.setItem("breakfast", $('#profile_breakfast').val());
	localStorage.setItem("lunch", $('#profile_lunch').val());
	localStorage.setItem("dinner", $('#profile_dinner').val());
	localStorage.setItem("sugar", $('#profile_sugar').val());
	localStorage.setItem("sugar_fasting", $('#profile_sugar_fasting').val());
	calendar_events();
	
}

function setProfile() {

	//alert('Setting profile field');
	
	setProfilefield('name');
	setProfilefield('age');
	setProfilefield('breakfast');
	setProfilefield('lunch');
	setProfilefield('dinner');
	//setProfilefield('weight');
	//setProfilefield('sugar');
	//setProfilefield('sugar_fasting');
	
}

function setProfilefield(fieldName) {
	
	if (localStorage.getItem(fieldName) === null) {
		//alert('field IS empty');
		$('#profile' + fieldName).html('');
		//$('#profile_' + fieldName).val('');
	} else {
		//alert(fieldName + ' field is NOT empty');
		$('#profile' + fieldName).html(localStorage.getItem(fieldName));
		$('#profile_' + fieldName).val(localStorage.getItem(fieldName));
		//if ($('#profile_' + fieldName).attr('type') == 'range') {
			//$('#profile_' + fieldName).val(localStorage.getItem(fieldName)).slider('disabled', true).slider('refresh');
			//$('#profile_' + fieldName).val(localStorage.getItem(fieldName)).slider("refresh");
		//}
	}
	
}



function setupCalendar() {
	
	//alert(JSON.stringify(readingsArray[readingsArray.length - 1]));
        
    $("#calendar").jqmCalendar({
        events: readingsArray,
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        startOfWeek: 0        
    });
    
    $('#calendar').trigger('refresh');
    
    //alert('setting up calendar');
    
    $('.ui-li-static').each(function() {
    	$( this ).decHTML();
  		//alert($(this).html());
    });
    
    $('#calendar .ui-btn').click(function() {
    	$('.ui-li-static').each(function() {
    		$( this ).decHTML();
  			//alert($(this).html());
    	});	
    });    
}



function createNotifications() {

	/* Set Break Hour in 24hr Notation */
	var breakHour=9;
	/* Set Break Minute */
	var breakMinute=5;
	/* Set Break Message */
	var breakMessage="Reports! Take Your Break!";

	var theDate=new Date();

	if (Math.abs(theDate.getHours())==breakHour&&Math.abs(theDate.getMinutes())==breakMinute) {
		this.focus();
		clearInterval(breakInt);
		alert(breakMessage);
	}

	var breakInt=setInterval("breakTime()",58000);

}

function calendar_events() {

  alert('adding calendar event');
  //alert($('#profile_lunch').val());
	
  var startDate = new Date();
  
  startDate.setMinutes(startDate.getMinutes() + 20);
  
  startDate.setDate(startDate.getDate() + 1);
  alert(parseInt(startDate.getDate()));
  ///startDate.setHours(parseInt($('#profile_lunch').val().substring(0, 2)));
  //startDate.setMinutes(parseInt($('#profile_lunch').val().substring(3, 5)));
  
  alert(startDate.toString());
  
  
  var endDate = startDate;
  endDate.setMinutes(endDate.getMinutes() + 80);
  var title = "Lunch Time";
  var location = "Unknown";
  var notes = 'Please enter your craving';
  var success = function(message) { alert("Success: " + JSON.stringify(message)); };
  var error = function(message) { alert("Error: " + message); };
  

  //var calOptions = window.plugins.calendar.getCalendarOptions();
  
  //calOptions.recurrence = "daily"; // supported are: daily, weekly, monthly, yearly
  //eventEnd = startDate;
  //eventEnd.setFullYear(startDate.getFullYear() + 1);
  //calOptions.recurrenceEndDate = eventEnd;
  
  
  //alert(startDate.toString());

  //  window.plugins.calendar.createCalendar(calendarName,success,error);
  window.plugins.calendar.createEvent(title,location,notes,startDate,endDate,success,error);
  
}

	
