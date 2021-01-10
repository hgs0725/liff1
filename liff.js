window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    
     window.alert("0.3");
    
    liff.init(function (data) {
        getProfile();
        initializeApp(data);
    });

    // Send message
      document.getElementById('sendmessagebutton').addEventListener('click', function () {
        // https://developers.line.me/en/reference/liff/#liffsendmessages()
        let date_time = document.getElementById('birthdaytime').textContent;
        let userid = data.context.userId;
        liff.sendMessages([{
            type: 'text',
            text: "Send text message"
        }, {
            type: 'text',
            text: "Send text message"
        }]).then(function () {
            window.alert("Sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
};


function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;
}

