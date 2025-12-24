importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAafXkJwyZ5F7Xuax0VktZ9cpqWD4oCvxU",
    messagingSenderId: "584797187828",
    appId: "1:584797187828:web:4c643f83dfd9b700adb8a1",
    projectId: "tournament-97743"
});

const messaging = firebase.messaging();

// Background Notification Handler
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1067/1067568.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1067/1067568.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});