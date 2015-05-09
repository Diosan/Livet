      // Load the Visualization API and the piechart package.
      google.load('visualization', '1', {packages: ['corechart', 'bar']});
      google.load('visualization', '1', {packages: ['corechart', 'line']});

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
                       'width':700,
                       'height':350};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('moodchart_div'));
        chart.draw(data, options);
      }
      

      
      
      
	  function drawGlucoseChart() {

              var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Sugar');

      data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
        [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

      var options = {
      	'title':'My Glucose for the last 30 days',
      	'width':700,
        'height':350,
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Value'
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.visualization.LineChart(document.getElementById('glucosechart_div'));
      chart.draw(data, options);
        
      }