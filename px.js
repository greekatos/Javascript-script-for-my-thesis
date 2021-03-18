/*function handleFiles(files){
	if(window.FileReader){
	getAsText(files[0]);
	fileUploaded = true;
	}else{
	alert('Is not supported.');
	}
	}
	
	function getAsText(fileToRead){
	let reader = new FileReader();
	
	reader.readAsText(fileToRead);
	
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	}
	
	function loadHandler(event){
	let csv = event.target.result;
	processData(csv);
	}
	
	fuction errorHandler(event){
	if(evt.target.error.name == "NotReadableError"){
	alert("Cannot read file");
	}
	}
	
	function processData(csv){
	let allTextLines = csv.split(/\r\n|\n);
	
	for(let i = 0; i<allTextLines.length; i++){
	let row = allTextLines[i].split(';');
	let col = [];
	
	for(let j=0;j<row.length;j++){
	col.push(row[j]);
	}
	
	attendeesArray.push(col);
	}
}*/
function test(){
	var file = document.getElementById("fileInput").files[0];
	
	
	console.log(file);
	file.text()
	
	.then(function(result){
		const regex = /^\d*\/\d*\/\d*/;
		const regexhour=/\d*:\d*:\d*/gm;
		var outcome = [];
		var headers = [];//Periexei olous tous aritmous pou periexei to excel. Prin to Number periexei se string morfi ola ta kelia kai to ekana etsi
		//wste na einai disdiastatos o pinakas stin [0] thesi exei tin prwti grammi kai stin [0][0] periexei to A[0]
		var hours = [];//Periexei tis wres 
		var wattreal = [];//periexei to pedio Combined Active Power Line 1+2 +3 (watt)
		var wattdeh = [];//periexei to pedio Combined Combined Apparent Power Line 1+2+3
		var days = [];//periexei tis hmeromhnies		
		var wattworkdays = [];//periexei ta watt sta workdays
		var wattweekend = [];//periexei ta watt sta weekends
		var watt = [];//Periexei ta watt opou stis thesi 0 exei gia tin prwti kathimerini ola ta watt kai antistoixa.Exei xrhsimopoihthei sto all button
		var averageworkdays = [];
		var averageweekend = [];
		var lines=result.split("\n");//xwrizw to csv ana grammi diladi i a grammi tou excel einai to prwto stoixeio tou pinaka
		var a = 0;
		var watt1 = [];
		
		for(let i=0;i<24;i++){
			wattworkdays[i]=[];
			wattweekend[i]=[];
		}
		
		for(let j=0;j<lines.length;j++){//Could be j=1
			headers[j] =lines[j].split(",");//Edw opou exei komma xwrizei kai edw ginetai o xwrismos twn keliwn 
			for(let i=0;i<headers[j].length;i++){
				headers[j][i]=Number(headers[j][i]);
			}
			
			if(lines[j].match(regex) != null){
				days[j]=lines[j].match(regex);
				hours[j]=lines[j].match(regexhour);
				if(getDayName(days[j][0]) == "Saturday" || getDayName(days[j][0]) == "Sunday"){
					if(hours[j][0] == "0:00:00" || hours[j][0] == "00:00:00"){
						wattweekend[0].push(headers[j][7]);
						}else if(hours[j][0] == "1:00:00" || hours[j][0] == "01:00:00"){
						wattweekend[1].push(headers[j][7]);
						}else if(hours[j][0] == "2:00:00" || hours[j][0] == "02:00:00"){
						wattweekend[2].push(headers[j][7]);
						}else if(hours[j][0] == "3:00:00" || hours[j][0] == "03:00:00"){
						wattweekend[3].push(headers[j][7]);
						}else if(hours[j][0] == "4:00:00" || hours[j][0] == "04:00:00"){
						wattweekend[4].push(headers[j][7]);
						}else if(hours[j][0] == "5:00:00" || hours[j][0] == "05:00:00"){
						wattweekend[5].push(headers[j][7]);
						}else if(hours[j][0] == "6:00:00" || hours[j][0] == "06:00:00"){
						wattweekend[6].push(headers[j][7]);
						}else if(hours[j][0] == "7:00:00" || hours[j][0] == "07:00:00"){
						wattweekend[7].push(headers[j][7]);
						}else if(hours[j][0] == "8:00:00" || hours[j][0] == "08:00:00"){
						wattweekend[8].push(headers[j][7]);
						}else if(hours[j][0] == "9:00:00" || hours[j][0] == "09:00:00"){
						wattweekend[9].push(headers[j][7]);
						}else if(hours[j][0] == "10:00:00"){
						wattweekend[10].push(headers[j][7]);
						}else if(hours[j][0] == "11:00:00"){
						wattweekend[11].push(headers[j][7]);
						}else if(hours[j][0] == "12:00:00"){
						wattweekend[12].push(headers[j][7]);
						}else if(hours[j][0] == "13:00:00"){
						wattweekend[13].push(headers[j][7]);
						}else if(hours[j][0] == "14:00:00"){
						wattweekend[14].push(headers[j][7]);
						}else if(hours[j][0] == "15:00:00"){
						wattweekend[15].push(headers[j][7]);
						}else if(hours[j][0] == "16:00:00"){
						wattweekend[16].push(headers[j][7]);
						}else if(hours[j][0] == "17:00:00"){
						wattweekend[17].push(headers[j][7]);
						}else if(hours[j][0] == "18:00:00"){
						wattweekend[18].push(headers[j][7]);
						}else if(hours[j][0] == "19:00:00"){
						wattweekend[19].push(headers[j][7]);
						}else if(hours[j][0] == "20:00:00"){
						wattweekend[20].push(headers[j][7]);
						}else if(hours[j][0] == "21:00:00"){
						wattweekend[21].push(headers[j][7]);
						}else if(hours[j][0] == "22:00:00"){
						wattweekend[22].push(headers[j][7]);
						}else if(hours[j][0] == "23:00:00"){
						wattweekend[23].push(headers[j][7]);
					}
					}else{
					watt.push(headers[j][7]);
					if(hours[j][0] == "0:00:00" || hours[j][0] == "00:00:00"){
					wattworkdays[0].push(headers[j][7]);
					}else if(hours[j][0] == "1:00:00" || hours[j][0] == "01:00:00"){
					wattworkdays[1].push(headers[j][7]);
					}else if(hours[j][0] == "2:00:00" || hours[j][0] == "02:00:00"){
					wattworkdays[2].push(headers[j][7]);
					}else if(hours[j][0] == "3:00:00" || hours[j][0] == "03:00:00"){
					wattworkdays[3].push(headers[j][7]);
					}else if(hours[j][0] == "4:00:00" || hours[j][0] == "04:00:00"){
					wattworkdays[4].push(headers[j][7]);
					}else if(hours[j][0] == "5:00:00" || hours[j][0] == "05:00:00"){
					wattworkdays[5].push(headers[j][7]);
					}else if(hours[j][0] == "6:00:00" || hours[j][0] == "06:00:00"){
					wattworkdays[6].push(headers[j][7]);
					}else if(hours[j][0] == "7:00:00" || hours[j][0] == "07:00:00"){
					wattworkdays[7].push(headers[j][7]);
					}else if(hours[j][0] == "8:00:00" || hours[j][0] == "08:00:00"){
					wattworkdays[8].push(headers[j][7]);
					}else if(hours[j][0] == "9:00:00" || hours[j][0] == "09:00:00"){
					wattworkdays[9].push(headers[j][7]);
					}else if(hours[j][0] == "10:00:00"){
					wattworkdays[10].push(headers[j][7]);
					}else if(hours[j][0] == "11:00:00"){
					wattworkdays[11].push(headers[j][7]);
					}else if(hours[j][0] == "12:00:00"){
					wattworkdays[12].push(headers[j][7]);
					}else if(hours[j][0] == "13:00:00"){
					wattworkdays[13].push(headers[j][7]);
					}else if(hours[j][0] == "14:00:00"){
					wattworkdays[14].push(headers[j][7]);
					}else if(hours[j][0] == "15:00:00"){
					wattworkdays[15].push(headers[j][7]);
					}else if(hours[j][0] == "16:00:00"){
					wattworkdays[16].push(headers[j][7]);
					}else if(hours[j][0] == "17:00:00"){
					wattworkdays[17].push(headers[j][7]);
					}else if(hours[j][0] == "18:00:00"){
					wattworkdays[18].push(headers[j][7]);
					}else if(hours[j][0] == "19:00:00"){
					wattworkdays[19].push(headers[j][7]);
					}else if(hours[j][0] == "20:00:00"){
					wattworkdays[20].push(headers[j][7]);
					}else if(hours[j][0] == "21:00:00"){
					wattworkdays[21].push(headers[j][7]);
					}else if(hours[j][0] == "22:00:00"){
					wattworkdays[22].push(headers[j][7]);
					}else if(hours[j][0] == "23:00:00"){
					wattworkdays[23].push(headers[j][7]);
					}
					a++;
				}	
			}
			
			//wattreal.push(headers[j][7]); Edw briskontai ola ta watt 
			//wattdeh.push(headers[j][8]); Opws kai edw
		}
		
		for(let i=0;i<wattworkdays.length;i++){
			averageworkdays.push(calculate(wattworkdays[i]));
			averageweekend.push(calculate(wattweekend[i]));
		}
		
		
		console.log(watt1);
		console.log(averageworkdays);
		console.log(wattweekend);
		console.log(wattworkdays);
		console.log(days);
		console.log(headers);
		console.log(lines);
		console.log(watt);
		//console.log(result);
		let b = 0;
		for(let j=0;j<a/24;j++){//Gia to plithos twn kathimerinwn
			watt1[j]=[];
			for(let i=0;i<24;i++){				
				watt1[j].push(watt[b]);
				b++;
				}
			}
		const CHART = document.getElementById("lineChart").getContext('2d');
		
		let lineChart = new Chart(CHART,{
			type:'line',
			data:{
				labels:["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
				datasets:[{
					label:'Watt Consumption',
					data:averageworkdays,
					backgroundColor:'yellow',
					borderWidth:1,
					borderColor:'#777',
					hoverBorderWidth:3,
					hoverBorderColor:'#000',
					fill:false
				}]
				
			},
			options:{
				scales:{
					yAxes:[{
						ticks:{
							beginAtZero: true
						}
					}]
				}
			}
		})
		$("#btn").on("click",function(){
			lineChart.data.datasets[0].data = averageweekend;
			console.log(averageweekend);
			console.log(wattweekend);
			lineChart.update();
			let error = document.getElementById("error");
			error.textContent = "Weekend";
			error.style.color = "red";
			})
		$("#btn1").on("click",function(){
			lineChart.data.datasets[0].data = averageworkdays;
			lineChart.update();
			error.textContent = "";
			})
		$("#btn2").on("click",function(){
		lineChart.data.datasets = [];
		for(i=0;i<watt1.length;i++){
			var dataSet = {
				pointBackgroundColor: "black",
				showLine: false,
				data:watt1[i]
				}
				lineChart.data.datasets.push(dataSet);
			}
			lineChart.update();
			error.textContent = "";
			})	
		
	})
	
	
	function getDayName(custom_date)
	{
		var myDate=custom_date;
		myDate=myDate.split("\/");
		var newDate=myDate[2]+"-"+myDate[1]+"-"+myDate[0];
		//var my_ddate=new Date(newDate).getTime();
		var currentDate = new Date(newDate);
		var day_name = currentDate.getDay();
		var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
		return days[day_name];       
	}
	
	function calculate(array) {
		var i = 0, sum = 0, len = array.length;
		while (i < len) {
			sum = sum + array[i++];
		}
		return sum / len;
	}
}

