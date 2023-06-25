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




console.log(html);
//console.log(doc);

//id = doc.getElementsById("annotationNoteHeader")[0];
////console.log(id);

console.log("hiiii");
//try to get directly highlight primary keyword id
//$(html).find('.kp-notebook-highlight-pink').each(function(id,el){
// console.log("hiiii");
//console.log(id);
//console.log($(el).text());
//locations.push(($(el).text()).split('|')[1]);
//});


//console.log("hi now we will parse html");
//console.log($(html).find("#annotationNoteHeader").text());

locations = new Array();
highlights = new Array();
const highlightMap = new Map();
finalLocation = "";

$(html).find("#annotationNoteHeader").each(function(id,el){
////console.log("hiiii");
//console.log(el);
//console.log($(el).text());
// locations.push(($(el).text()).split('|')[1]);
});

//lets try highlight parent class way
$(html).find("#highlight").each(function(id,el){
//    console.log("hiiii2");
//  console.log("highlight primary id");
//console.log($(this).parent().get(0).id);
//console.log("highlight text")
//console.log($(el).text());
//console.log($(el).parent().id);

// highlights.push($(el).text());
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

//console.log($(el).text());
//console.log($(el).parent().id);


highlightMap.set(el.id,data);
} 
}
});

console.log(highlightMap);

$(locations).each(function(id){
//console.log(locations[id]);    
//console.log(highlights[id]);
});


////console.log("lets parse highlights");
////console.log($(html).find("#highlight").text());

