window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        getProfile();
        initializeApp(data);
    });

    // Send message
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        // https://developers.line.me/en/reference/liff/#liffsendmessages()

        let n = '사슴고양이';
        let time = document.getElementById('birthdaytime').value;

    liff.sendMessages([{
            type: 'text',
            text: time
        }, {
            type: 'sticker',
            packageId: '11539',
            stickerId: '52114122'
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

