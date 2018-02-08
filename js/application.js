$(document).ready(function() {

	// $("#textInput").on("click", "#textarea", function(event) {
	// 	event.preventDefault()

	// 	// Mousetrap.bind("up", function() {
	// 	// console.log("up")
	// 	// })
	// })

	$("#submit").on("click", function(event) {
		event.preventDefault()
		textarea = $("#textarea")
		transformed = transform(textarea.val())
		$("#preview").append(transformed)
	})

	// $("textarea").on("click", function(event) {
	// 	console.log("click")
	// })

	$("textarea").keyup(function(){
		textarea = $(this)
		transformed = transform(textarea.val())
		$("#preview").text(" ")
		$("#preview").append(transformed)
		$("#preview").contents().wrap()
	});


});