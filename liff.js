window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        initializeApp(data);
    });

    liff.sendMessages([
        {
            type: 'text',
            text: 'Hello, World!'
        }
    ])
        .then(() => {
            console.log('message sent');
        })
        .catch((err) => {
            console.log('error', err);
        });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    //document.getElementById('groupidfield').textContent = data.context.groupId;
    document.getElementById('groupidfield').textContent = data.context.datetime
}
