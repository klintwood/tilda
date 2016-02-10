var converter = new showdown.Converter();
var html      = converter.makeHtml($(".note").text());
var blog = $(".blog")


$("#new").click(function() {
	//blog.children().children().css("background-color", "red");
	//blog.prepend("lol");
	var asd = blog.children().first().clone(true);
	asd.css("border-right", "");
	// TODO: remove id
	asd.children(".note").attr("id", "-1");

	//asd.$(".rendered").css("color", "red");
	asd.children().children(".rendered").text("");
	asd.children().children(".markdown").val("");
	blog.prepend(asd);
	//asd.focus();
	//$.post( "/todo/all/");
});

$(".change_color").click(function() {

	var border = $(this).css('background-color');
	//$(this).parent().parent().parent().css("border-right-color", border);
	
	var border = "15px solid " + $(this).css('background-color');
	$(this).parent().parent().parent().css("border-right", border);
	
	// TODO: should be possible to select border-right-color and change only that
	//$(this).siblings(".marker").css("background-color", $(this).css('background-color'));
});

// show raw markdown when editing
/*
$("article").click(function() {

	var dies = $(this).children(".note");

	dies.children(".rendered").addClass("hidden");
	dies.children(".markdown").removeClass("hidden");
	dies.children(".colors").removeClass("hidden");
	dies.children(".markdown").focus();

});*/



$(".edit").click(function() {

	var dies = $(this).parent();

	dies.children(".rendered").addClass("hidden");
	dies.children(".markdown").removeClass("hidden");
	dies.children(".colors").removeClass("hidden");
	dies.children(".markdown").focus();
	dies.children(".close").removeClass("hidden");
	dies.children(".edit").addClass("hidden");

});


/*
$("article").click(function () {
	console.log("article clicked");
});

*/












// show rendered html when not editing
/*
$(".blog").on('blur', 'article', function() {

	var dies = $(this).children(".note").children("textarea");
	console.log(dies);

	// send new markdown to server
	var id = dies.parent().attr('id');
	var url = "/todo/" + id + "/";
	var color = dies.parent().parent().css("border-right-color");
	console.log(color);
	var data = {"note": dies.val(), "color": color};
	$.post( url, data);
	
	//TODO: also send color information
	

	// render markdown again
	var ml = converter.makeHtml(dies.val().trim())
	dies.parent().children(".rendered").html(ml);

	// show rendered markup
	dies.addClass("hidden");
	dies.parent().children(".colors").addClass("hidden");
	dies.parent().children(".rendered").removeClass("hidden");


});
*/
$(".close").click(function() {

	//var dies = $(this).children(".note").children("textarea");
	var dies = $(this).siblings("textarea");
	console.log(dies);

	// send new markdown to server
	var id = dies.parent().attr('id');
	var url = "/todo/" + id + "/";
	var color = dies.parent().parent().css("border-right-color");
	//console.log(dies.parent().parent().css("border-right-width"));
	if (dies.parent().parent().css("border-right-width") == "0px") {
		color = null;
	}
	//console.log(color);
	var data = {"note": dies.val(), "color": color};
	$.post( url, data);
	
	//TODO: also send color information
	

	// render markdown again
	var ml = converter.makeHtml(dies.val().trim())
	dies.parent().children(".rendered").html(ml);

	// show rendered markup
	dies.addClass("hidden");
	dies.parent().children(".colors").addClass("hidden");
	dies.parent().children(".rendered").removeClass("hidden");

	dies.siblings(".close").addClass("hidden");
	dies.siblings(".edit").removeClass("hidden");

});

/*
$(".note").on('blur', 'textarea', function() {

	// send new markdown to server
	var id = $(this).parent().attr('id');
	var url = "/todo/" + id + "/";
	var color = $(this).parent().parent().css("border-right-color");
	console.log(color);
	var data = {"note": $(this).val(), "color": color};
	$.post( url, data);
	
	//TODO: also send color information
	

	// render markdown again
	var ml = converter.makeHtml($(this).val())
	$(this).parent().children(".rendered").html(ml);

	// show rendered markup
	$(this).addClass("hidden");
	$(this).parent().children(".colors").addClass("hidden");
	$(this).parent().children(".rendered").removeClass("hidden");


});
*/

// render markdown initially on page load
var notes = $(".note");

notes.each(function () {
	$(this).children(".markdown").html($(this).children(".markdown").html().trim());
	var ml = converter.makeHtml($(this).children(".markdown").html().trim())
	$(this).children(".rendered").html(ml);
});
