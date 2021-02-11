import firebaseConfig from './firebaseConfig';
import 'firebase/firebase-database';

const firebaseApp = firebaseConfig;
const rt = firebaseConfig.database();
export const Register = async (nome, email, senha) => {
    if(nome  === "" || email === "" || senha === ""){
        return false;
    }
    const result = await firebaseApp.auth().createUserWithEmailAndPassword(email, senha).then(data => {
        rt.ref(`/user/${data.user.uid}/`).set({
            "Nome": nome
        })
        if(data.user){
            return true;
        }
        else{
            return false;
        }
    })
    return result;
}