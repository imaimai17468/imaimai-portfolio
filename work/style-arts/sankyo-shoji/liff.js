$(document).ready(function () {
    // liffId: LIFF URL "https://liff.line.me/xxx"のxxxに該当する箇所
    // LINE DevelopersのLIFF画面より確認可能
    var liffId = "1657505143-oqx9ae67";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            // Webブラウザからアクセスされた場合は、LINEにログインする
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントにログインしてください。");
                liff.login({redirectUri: location.href});
            }
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    if (!liff.isInClient()) {
        shareTargetPicker(text);
    } else {
        sendMessages(text);
    }
}

function sendTextWithImage(text, img_url) {
    if (!liff.isInClient()) {
        shareTargetPickerWithImage(text, img_url);
    } else {
        sendMessagesWithImage(text, img_url);
    }
}

function sendImage(img) {
    if (!liff.isInClient()) {
        shareTargetPickerImage(img);
    } else {
        sendMessagesImage(img);
    }
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

// LINEトーク画面上で複数のメッセージ送信
function sendMultiMessages(messages) {
    liff.sendMessages(messages)
    .then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

// LINEトーク画面上でメッセージと画像を送信
function sendMessagesWithImage(text, img_url) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    },{
        "type": "image",
        "originalContentUrl": img_url,
        "previewImageUrl": img_url
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

// Webブラウザからメッセージ送信
function shareTargetPicker(text) {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

// Webブラウザからメッセージ送信
function shareTargetPickerWithImage(text, img_url) {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    },{
        "type": "image",
        "originalContentUrl": img_url,
        "previewImageUrl": img_url
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

function getUserName(){
    const profile = liff.getProfile();
    return profile;
}