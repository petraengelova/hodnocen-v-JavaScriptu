
HTMLCollection.prototype.indexOf = [].indexOf;

$(document).ready(function() {
    var stars = $(".review-star");
    stars.click(setStars);
    stars.mouseenter(starHover);
    stars.mouseleave(returnStarState);
    stars[2].click(); // po nacteni stranky vybere defautlne 3 hvezdicky
});

function setStars() {
	var selectedStars = this.parentElement.children.indexOf(this) + 1;
	$("#rating").val(selectedStars);

    returnStarState();
}

function starHover() { // vyresetuje hvezdicky a oznaci tolik, nad kolika ma uzivatel kurzor
    var stars = $(".review-star");
    var selectedStars = this.parentElement.children.indexOf(this) + 1;
    stars.addClass("glyphicon-star-empty");
    stars.removeClass("glyphicon-star");

    for (var i = 0; i < selectedStars; i++) {
        $(stars[i]).removeClass("glyphicon-star-empty");
        $(stars[i]).addClass("glyphicon-star");
    }
}

function returnStarState() { // vrati stav hvezdicky na formularovou hodnotu
	var stars = $(".review-star");
	stars.addClass("glyphicon-star-empty");
	stars.removeClass("glyphicon-star");

	for (var i = 0; i < $("#rating").val(); i++) {
	    $(stars[i]).removeClass("glyphicon-star-empty");
	    $(stars[i]).addClass("glyphicon-star");
	}
}