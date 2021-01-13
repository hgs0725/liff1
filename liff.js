window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app

    window.alert("0.1");

    liff.init(function (data) {
        initializeApp(data);
    });

    // Send message
    document.getElementById('a1').addEventListener('click', function () {

        if (document.getElementById('q1').value == 2) {
            liff.sendMessages([{
                type: 'text',
                text: "1번 정답"
            }]).then(function () {
                //window.alert("Sent");
            }).catch(function (error) {
                window.alert("Error sending message: " + error);
            });
        }
        else {
            liff.sendMessages([{
                type: 'text',
                text: "1번 오답"
            }]).then(function () {
                //window.alert("Sent");
            }).catch(function (error) {
                window.alert("Error sending message: " + error);
            });
        }
    
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
