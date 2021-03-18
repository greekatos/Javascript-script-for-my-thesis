<!DOCTYPE html>
<html>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
	<head>
		<title>Web Exetasi</title>
	</head>
	<body>
		
		<div class = "container">
			<canvas id = "lineChart" width="400" height="200" aria-label="Hello ARIA World" role="img"></canvas>
		</div>
		
	</body>
</html>
<script type="text/javascript">
	
	function ajxfunc(){
		return $.ajax({
			url:"theoxaris.php",
			dataType:"json",
			success: function(array){
				return array;
			}
		});
	}
	
	
	var a = ajxfunc();
	a.done(b);
	function b(){
		var c = [];
		var d = [];
		var e = [];
		d = a.responseJSON;
		console.log(d);
		for(var i=0;i<d.length;i++){
			c[i] = "T+" +i;
			e[i] = d[i].val;
			}
		console.log(e);	
		console.log(c);	
		const CHART = document.getElementById("lineChart").getContext('2d');
		
		let lineChart = new Chart(CHART,{
					type:'line',
					data:{
						labels:c,
						datasets:[{
							label:'Timings',
							data:e,
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
		
	}
	
</script>