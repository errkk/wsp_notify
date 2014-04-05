var pusher = new Pusher('db1b62b7ae963a6c8e55');
var channel = pusher.subscribe('pump');

channel.bind('on', function(data) {
    var havePermission = window.webkitNotifications.checkPermission();
    if (havePermission == 0) {
        // 0 is PERMISSION_ALLOWED
        var notification = window.webkitNotifications.createNotification(
            'img/on.png',
            'Pump On',
            'Uplift: ' + data + 'ºC'
            );

        notification.onclick = function () {
            window.open("http://wottonpool.co.uk/panel/data/");
            notification.close();
        }
        notification.show();
    } else {
        window.webkitNotifications.requestPermission();
    }
});
channel.bind('off', function(data) {
    var havePermission = window.webkitNotifications.checkPermission();
    if (havePermission == 0) {
        // 0 is PERMISSION_ALLOWED
        var notification = window.webkitNotifications.createNotification(
            'img/off.png',
            'Pump Off',
            'Uplift: ' + data + 'ºC'
            );

        notification.onclick = function () {
            window.open("http://wottonpool.co.uk/panel/data/");
            notification.close();
        }
        notification.show();
    } else {
        window.webkitNotifications.requestPermission();
    }
});
