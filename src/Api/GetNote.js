import firebaseConfig from './firebaseConfig';
import 'firebase/firebase-database';

const rt = firebaseConfig.database();

export const GetOneNote = async (uid, idnote) => {
    if(uid  === "" || idnote === ""){
        return false;
    }
    
    const result = await rt.ref(`/notes/${uid}/${idnote}`).once('value').then(res => {
        let data = [];
        res.forEach(element => {
            if(element){
                data.push(element.val());
            }
        });
        return data;
    })
    return result;
}
