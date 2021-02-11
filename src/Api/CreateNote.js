import firebaseConfig from './firebaseConfig';
import 'firebase/firebase-database';

const rt = firebaseConfig.database();

export const CreateNote = (uid, title, body) => {
    if(title  === ""){
        return false;
    }
    const data = new Date().getTime().toString();
    rt.ref(`/notes/${uid}/${data}`).set({
        "Title": title,
        "Body": body,
        "id": data
    })
}