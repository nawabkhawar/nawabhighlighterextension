//console.log("working");

//document.body.innerHTML = "hello"

html = document.all[0].innerHTML;
console.log(html);

chrome.runtime.sendMessage(
    "hello background page",
    (response) => {
        console.log(response)
    }
)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)

    sendResponse("Thank you")
})



//parsing html
console.log(html);

console.log("hiiii");

locations = new Array();
highlights = new Array();
allBookIds = new Array();
const highlightMap = new Map();
finalLocation = "";


//lets try highlight parent class way
$(html).find("#highlight").each(function(id,el){
});



//find all books


$(html).find(".kp-notebook-library-each-book").each(function(id,el){
    highlightArrayWithLocation = [];
    console.log("hiiii2");
    console.log("ID FATHER OF ALL HIGHLIGHTS");
    var highlightId = el.id;
    //console.log(el);
    //console.log("highlightId");
    console.log(highlightId);
    allBookIds.push(highlightId);
    });

    console.log(allBookIds);


$(allBookIds).each(function(id){
    console.log("id");
    console.log(allBookIds[id]);

    fetch('https://read.amazon.com/notebook?asin='+ allBookIds[id] + '&contentLimitState=&').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');
//	console.log(html);
//	console.log(doc);

	  //id = doc.getElementsById("annotationNoteHeader")[0];
	  //console.log(id);

//console.log("hi now we will parse html");
//console.log($(html).find("#annotationNoteHeader").text());
//console.log("lets parse highlights");
//console.log($(html).find("#highlight").text());






}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

    });









