
$(function() {
	
	setProfile();
	setupCalendar();
    
	$('#profile_save').click( function() {
		//alert('She bun d man baskside yes');
		// Store
		saveProfile();
		setProfile();	
	});

});

function saveProfile() {
	localStorage.setItem("Name", $('#profile_name').val());
	localStorage.setItem("Age", $('#profile_age').val() + ' years' );
}

function setProfile() {
	$('#profileName').html(localStorage.getItem("Name"));
	$('#profileAge').html(localStorage.getItem("Age"));
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

	
