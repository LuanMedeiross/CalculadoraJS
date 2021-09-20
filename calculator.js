const operators = ['-', '+', '*', '/']

var op = ""
var last_value = op[op.length-1]
var value
var res

$("input").click(function() {
	value = String($(this).val())
	
	if (operators.includes(value)) {

		if (value == last_value)
			return false
		else if (operators.includes(last_value)) {
			if (value != '-') 
				return false
		} 

		op += value
		$("#current").text(op)

	} else if (value == "AC") { 
		$("#current").text('')
		$("input[value=AC").val("CE")
		op = ''

	} else if (value == "CE") {
		if (op != '') {
			var opApagar = ''

			for (let i = 0; i < op.length-1; i++) {
				opApagar += op[i]
			}

			op = opApagar 
			opApagar = ''
			$("#current").text(op)
		}

	} else if (value == '=') {
		try {
			res = eval(op)
			if (op != '')
				$("#history").text(op + " =")
			$("#current").text(res)
			$("input[value=CE").val("AC")
			op = ''
		} catch (err) {
			$("#current").text("Error")
			op = ''
		}

	} else {
		$("input[value=AC]").val("CE")
		op += value		
		$("#current").text(op)
	}
})
