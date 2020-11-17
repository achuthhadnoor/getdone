import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useFirestoreQuery } from "../hooks/use-firestore";
import { TODAY } from "./constants";
if (!firebase.apps.length) {
    // Add your Firebase credentials
    firebase.initializeApp({
        apiKey: "AIzaSyCWvbVoWV_1garK_RwqxLIwonrzoTwgGuw",
        authDomain: "coder-2e6f6.firebaseapp.com",
        databaseURL: "https://coder-2e6f6.firebaseio.com",
        projectId: "coder-2e6f6",
        storageBucket: "coder-2e6f6.appspot.com",
        messagingSenderId: "854069867003",
        appId: "1:854069867003:web:c8b24f446b01622c889b5e"
    });
}

const firestore = firebase.firestore();

const getStripeRole = async () => {
    await firebase.auth().currentUser.getIdToken(true);
    const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

    return decodedToken.claims.stripeRole || 'free';
};

const formatUser = async (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.xa,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        darkmode: false,
        stripeRole: await getStripeRole(),
        tab: TODAY
    };
};

export const getUser = async (uid, data) => { 
    let userExists = localStorage.getItem('userId');
    if (userExists) {
        let userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            return JSON.parse(userInfo);
        }
    }

    let doc = await firestore.doc(`users/${uid}`).get();
    if (doc.exists) {
        let data = doc.data();
        localStorage.setItem('userId', data.uid);
        localStorage.setItem('userInfo', JSON.stringify(data))
        return data;
    }
    let user = await formatUser({ uid, ...data });
    var data = await firebase.firestore().collection(`users`).doc(uid).set(user); 
    localStorage.setItem('userId', uid);
    localStorage.setItem('userInfo', Json.stringify(user))
    return user
}

export default firebase;