$(document).ready(function(){
    loadCharacters();
    });
    
    
            const loadCharacters = async () => {
                try {
                   //const res = await fetch('http://nawabkhawar.in:8080/nawab-clubs-1/nawabClubSearch/getAllClubsCached');
                    //data = await res.json();
                    //const res = await fetch('./bookshort.html');
                    //data = await res.html;
                    
                    fetch('./bookshort.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
    
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
    
    
    
    
    
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    
                    
                    
                    //console.log("data is ");
                    //console.log(data);
                            //console.log("data is ");
                    //console.log(data);
                } catch (err) {
                    console.error(err);
                }
            };


            //book name -
            //class="a-size-base a-spacing-top-mini a-color-base kp-notebook-selectable kp-notebook-metadata"

            //author name-
            //<div class="a-row a-spacing-top-mini">
            //<span class="a-size-small a-color-secondary kp-notebook-selectable kp-notebook-metadata">James Clear</span></div>