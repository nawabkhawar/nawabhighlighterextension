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
const highlightMap = new Map();
finalLocation = "";


//lets try highlight parent class way
$(html).find("#highlight").each(function(id,el){
});






//TODO -
//find the highlight and text from child of father of all highlights id by going parent-child way
$(html).find(".a-spacing-base").each(function(id,el){
highlightArrayWithLocation = [];
console.log("hiiii2");
console.log("ID FATHER OF ALL HIGHLIGHTS");
var highlightId = el.id;
console.log(highlightId);
if(el.id!=null && el.id!=''){
console.log("location is")
locationText = $(el).find("#annotationNoteHeader").text();
console.log(locationText);
if(null!==locationText){
locationSplit = locationText.split(":");
if(locationSplit.length>1){
    finalLocation = locationSplit[1];
    console.log(finalLocation);

}




console.log("highlight is")
highlight = $(el).find("#highlight").text();
console.log(highlight);


var data = {
'highlightId': highlightId,
//newcodestarts
'location': finalLocation,
'highlight': highlight
}


highlightMap.set(el.id,data);
} 
}
});

console.log(highlightMap);




