      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      //google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawMoodChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Mood');
        data.addColumn('number', 'Readings');
        
        if (localStorage.getItem("readings") == null) {
        	
        	data.addRows([
          		['Happy', 10],
          		['Sad', 3],
          		['Sick', 4]
        	]);
        		
        } else {
        	
        	readings = JSON.parse(localStorage.getItem("readings"));
        	
        	var happy = 0;
        	var sad = 0;
        	var sick = 0;
        	
        	for (i = 0; i < readings.length; i++) {
        		
        		reading = JSON.parse(readings[i]);
        		
        		if (reading.type = 'journal') {
        			//alert(reading.value);
        			switch (reading.value) {
			    		case 'Happy':
			        		happy++;
        					break;
			    		case 'Sad':
			    			sad++;
			        		break;
			    		case 'Sick':
			        		sick++;
		        			break;
					}
        		} 
       
        	}
        	
        	data.addRows([
          		['Happy', happy],
          		['Sad', sad],
          		['Sick', sick]
        	]);
        	
        	
        }

        // Set chart options
        var options = {'title':'My mood for the last 30 days',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }