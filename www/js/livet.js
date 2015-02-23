
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();



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
		events.push({ type : value, "begin": new Date(y, m, d), "end": new Date(y, m, d + 1) });
		$('#calendar').trigger('refresh');
		//, "begin": new Date(y, m, d + 3), "end": new Date(y, m, d + 4)
	});
	
		

});



function saveProfile() {
	localStorage.setItem("name", $('#profile_name').val());
	localStorage.setItem("age", $('#profile_age').val() + ' years' );
}

function setProfile() {
	
	setProfilefield('name');
	setProfilefield('age');
	
}

function setProfilefield(fieldName) {
	
	if (localStorage.getItem(fieldName) === null) {
		//alert('field IS empty');
		$('#profile' + fieldName).html('');
		//$('#profile_' + fieldName).val('');
	} else {
		//alert('field is NOT empty');
		$('#profile' + fieldName).html(localStorage.getItem(fieldName));
		//$('#profile_' + fieldName).val(localStorage.getItem(fieldName));
		//if ($('#profile_' + fieldName).attr('type') == 'range') {
			//$('#profile_' + fieldName).val(localStorage.getItem(fieldName)).slider('disabled', true).slider('refresh');
			//$('#profile_' + fieldName).val(localStorage.getItem(fieldName)).slider("refresh");
		//}
	}
	
}



function setupCalendar() {
	
	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $("#calendar").jqmCalendar({
        events: [{
            "summary": "Meet PM",
            "begin": new Date(y,m, 27 ),
            "end": new Date(y, m, 28)
            
        }, {
            "summary": "Dinner",
            "begin": new Date(y, m, d + 3),
            "end": new Date(y, m, d + 4)
            
        }, {
            "summary": "Lunch with Friends",
            "begin": new Date(y, m, d + 6),
            "end": new Date(y, m, d + 7)
            
        }, 
                ],
                 months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        startOfWeek: 0
        
    });
}

	
