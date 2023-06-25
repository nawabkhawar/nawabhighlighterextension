fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        //debugger;
        //alert(jokeData);
        console.log(jokeData);
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;

        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
              console.log(sender.tab ?
                          "from a content script:" + sender.tab.url :
                          "from the extension");
              if (request.greeting == "hello")
                sendResponse({farewell: "goodbye"});
            });
    })