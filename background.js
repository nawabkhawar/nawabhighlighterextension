//chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});
    //var newURL = "https://read.amazon.com/notebook?ref_=kcr_notebook_lib&language=en-US";
    //chrome.tabs.create({ url: newURL });
  //});

 // chrome.action.onClicked.addListener(handleActionClick);

  /*chrome.storage.local.get(["badgeText"], ({ badgeText }) => {
    chrome.action.setBadgeText({ text: badgeText });
  });
  */


chrome.tabs.onActivated.addListener((tab) => {

    console.log(tab)

    chrome.tabs.get(tab.tabId, (CurrentTabData) => {

        if (CurrentTabData.url === "*") {

            chrome.scripting.executeScript({
                target: { tabId: CurrentTabData.id },
                files: ['contentScript.js']
            });

            setTimeout(() => {
                chrome.tabs.sendMessage(
                    tab.tabId,
                    "hey I have injected you tab: " + tab.tabId,
                    (response) => {
                        console.log(response)
                    }
                )
            }, 2000)
        }

    })

})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message"+message)
    console.log("sender"+sender)

    sendResponse(document.all[0].outerHTML)


    
})