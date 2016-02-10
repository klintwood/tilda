var converter = new showdown.Converter();
var html      = converter.makeHtml($(".note").text());
var blog = $(".blog")


$("#new").click(function() {
	//blog.children().children().css("background-color", "red");
	//blog.prepend("lol");
	var asd = blog.children().first().clone(true);
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
	//var border = "15px solid " + $(this).css('background-color');
	//$(this).parent().parent().css("border-right", border);
	$(this).siblings(".marker").css("background-color", $(this).css('background-color'));
});

// show raw markdown when editing
$(".note").click(function() {

	$(this).children(".markdown").removeClass("hidden");
	$(this).children(".rendered").addClass("hidden");
	$(this).children(".markdown").focus();

	var asd = $(this).children(".markdown");	
});

// show rendered html when not editing
$(".note").on('blur', 'textarea', function() {

	// send new markdown to server
	var id = $(this).parent().attr('id');
	var url = "/todo/" + id + "/";
	$.post( url, {data: $(this).val()});
	
	//TODO: also send color information
	

	// render markdown again
	var ml = converter.makeHtml($(this).val())
	$(this).parent().children(".rendered").html(ml);

	// show rendered markup
	$(this).addClass("hidden");
	$(this).parent().children(".rendered").removeClass("hidden");

});


// render markdown initially on page load
var notes = $(".note");

notes.each(function () {
	var ml = converter.makeHtml($(this).children(".markdown").html())
	$(this).children(".rendered").html(ml);
});
