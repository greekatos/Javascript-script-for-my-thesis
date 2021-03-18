<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<script src="px.js"></script>
<div id="page-wrapper">
	<div>
		Select a text file:
		<input type="file" id="fileInput" accept=".csv" onchange="triggerValidation(this)">
	</div>
	<pre id="fileDisplayArea"></pre>
	<pre id="csvData"></pre>
	<button onClick="test()" id="btn1">Show Diagrams</button>
	<button id="btn">Weekend Diagram</button>
	<button id="btn2">All</button>
	<span id="names"></span>
	<span id="error"></span>
</div>
<div class = "container">
	<canvas id = "lineChart" width="400" height="300" aria-label="Hello ARIA World" role="img"></canvas>
</div>

<script>
	var regex = new RegExp("(.*?)\.(csv)$");
	
	function triggerValidation(timi) {
		let name = document.getElementById("fileInput");
		let Name = document.getElementById("names");
		console.log(name);
		Name.textContent = name.value;
	if (!(regex.test(timi.value.toLowerCase()))) {
	timi.value = '';
	alert('Please select correct file format CSV');
	}
	}
</script>