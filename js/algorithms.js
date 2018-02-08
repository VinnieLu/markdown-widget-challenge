var log = function() {
	console.log("I'm here")
}

var transform = function(text) {
	var finished = "<p>"
	var italic = 0
	var bold = 0
	for(i=0;i<text.length;i++) {
		if(text[i] === "*" || text[i] === "_") {
			if(text[i+1] != text[i]) {
				if(italic === 0) {
					italic = 1
					finished += "<em>"
				}
				else if(italic === 1) {
					italic = 0
					finished += "</em>"
				}
			}
			else if(text[i+1] === text[i]) {
				if(bold === 0) {
					bold = 1
					i += 1
					finished += "<strong>"
				}
				else if(bold === 1) {
					bold = 0
					i += 1
					finished += "</strong>"
				}
			}
		}
		else if(text[i] === "\n") {
			finished += "<br>"
		}
		else {
			finished += text[i]
		}
	}
	finished += "</p>"
	return finished
}