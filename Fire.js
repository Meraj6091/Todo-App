import * as firebase from "firebase"
import "@firebase/firestore"
const firebaseConfig={ //constant variable (same as java final keyword)
    apiKey: "AIzaSyAuCWY0Ycz114jrEXuNtfh4tLsiBHbAtrg",
    authDomain: "todoapp-ab289.firebaseapp.com",
    projectId: "todoapp-ab289",
    storageBucket: "todoapp-ab289.appspot.com",
    messagingSenderId: "633455803231",
    appId: "1:633455803231:web:79af8c3d2fb267544754ea",
    measurementId: "G-8LCB6Y1LWM"
    
}

class Fire{
    constructor (callback){
        this.init(callback);
    }
    init(callback){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                callback(null,user);

            }
            else{
                firebase
                .auth()
                .signInAnonymously()
                .catch(error => {
                    callback(error);
                });
            }
        })
    }

    getLists(callback){
        let ref = this.ref.orderBy('name');
        this.unsubscribe= ref.onSnapshot(snapshot => {
            var lists;
            lists = [];

            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data() });
            });

            callback(lists);
        });
    }
    addList(list){
        let ref = this.ref;
        ref.add(list);
    }
    updateList(list){
        let ref = this.ref
        ref.doc(list.id).update(list)
    }

    get userId(){
        return firebase.auth().currentUser.uid
    }
    get ref(){
        return firebase
        .firestore().collection('users').doc(this.userId).collection('lists');
    }

    detach(){
        this.unsubscribe();
       
    }
}

export default Fire