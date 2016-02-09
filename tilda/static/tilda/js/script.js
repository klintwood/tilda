var converter = new showdown.Converter();
var html      = converter.makeHtml($(".note").text());

// show markdown when editing
$(".note").click(function() {

	//$(this).children(".rendered").html($(this).children(".markdown").html());
	$(this).children(".markdown").removeClass("hidden");
	$(this).children(".rendered").addClass("hidden");


	var asd = $(this).children(".markdown");

	
});

// show rendered html when not editing
$(".note").on('blur', 'textarea', function() {
	console.log("blur");
	console.log($(this).val());


	//TODO: send new markdown to server

	// render markdown again
	var ml = converter.makeHtml($(this).val())
	console.log(ml);
	$(this).parent().children(".rendered").html(ml);



	$(this).addClass("hidden");
	$(this).parent().children(".rendered").removeClass("hidden");
	/*

	$(this).children(".markdown").addClass("hidden");
	$(this).children(".rendered").removeClass("hidden");

	*/

});

/*
// show rendered html when not editing
$(".note").blur(function() {
	console.log("blur");

	//TODO: send new markdown to server

	// render markdown again
	var ml = converter.makeHtml($(this).children(".markdown").html())
	$(this).children(".rendered").html(ml);



	$(this).children(".markdown").addClass("hidden");
	$(this).children(".rendered").removeClass("hidden");

	

});
*/


/*
var markdown = $(".markdown");
var stuff = markdown.siblings(".rendered").html(converter.makeHtml($(this).html()));
console.log(stuff);
//$(".rendered").html(converter.makeHtml($(".markdown").html()));
*/


// render markdown to html on page load
var notes = $(".note");

notes.each(function () {
	var ml = converter.makeHtml($(this).children(".markdown").html())
	$(this).children(".rendered").html(ml);
});