
$(function() {
    
	$('#profile_save').click( function() {
		//alert('She bun d man baskside yes');
		// Store
		localStorage.setItem("Name", $('#profile_name').val());	
	});

});

