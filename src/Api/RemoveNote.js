import firebaseConfig from './firebaseConfig';
import 'firebase/firebase-database';

const rt = firebaseConfig.database();

export const RemoveNote = (uid, idNote) => {
    if(uid  === "" || idNote === ""){
        return false;
    }
    rt.ref(`/notes/${uid}/${idNote}`).remove();
}