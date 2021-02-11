import firebaseConfig from './firebaseConfig';
import 'firebase/firebase-database';

const rt = firebaseConfig.database();

export const UpdateNote = (uid, title, body, idnote) => {
    console.log(uid, title, body, idnote)
    if(title  === ""){
        return false;
    }
    rt.ref(`/notes/${uid}/${idnote}`).update({
        "Title": title,
        "Body": body
    })
    return true;
}