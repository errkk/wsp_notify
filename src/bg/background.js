var pusher = new Pusher('db1b62b7ae963a6c8e55', { encrypted: true });
var channel = pusher.subscribe('panel');

channel.bind('pump', function(data) {
    var icon = {'On': 'on.png', 'Off': 'off.png'}[data];
    var notification = chrome.notifications.create('Notification title', {
            iconUrl: 'img/' + icon,
            title: 'Pump',
            message: 'Pump ' + data,
            type: 'basic'
        });

    notification.onclick = function () {
        window.open("http://wottonpool.co.uk/panel/data/");
        notification.close();
    }
    notification.show();
});
