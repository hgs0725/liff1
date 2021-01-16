window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    
    const dialogflow = require('dialogflow');
const uuid = require('uuid');
 
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(projectId = 'fbtest-cagf') {
  // A unique identifier for the given session
  const sessionId = uuid.v4();
 
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
 
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };
 
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
}

    liff.init(function (data) {
        initializeApp(data);
    });

    // Send message
    document.getElementById('a1').addEventListener('click', function () {

        if (document.getElementById('q1').value == 2) {
            liff.sendMessages([{
                type: 'text',
                text: '1번 정답'
            }]).then(function () {
                //window.alert("Sent");
            }).catch(function (error) {
                window.alert("Error sending message: " + error);
            });
        }
        else {
            liff.sendMessages([{
                type: 'text',
                text: '1번 오답'
            }]).then(function () {
                //window.alert("Sent");
            }).catch(function (error) {
                window.alert("Error sending message: " + error);
            });
        }
    
    });
    
    document.getElementById('a2').addEventListener('click', function () {

        if (!$(':input:checkbox[id=test]:checked').val()) {
            alert("1개 이상 선택해 주세요.");
            return;
        }

        if ($(":input:radio[name='test']:checked").val() == 'HTML') {
            liff.sendMessages([{
                type: 'text',
                text: '2번 정답'
            }]).then(function () {
                //window.alert("Sent");
            }).catch(function (error) {
                window.alert("Error sending message: " + error);
            });
        }
        else {
            liff.sendMessages([{
                type: 'text',
                text: '2번 오답'
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
