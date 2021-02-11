import firebaseConfig from './firebaseConfig';

const firebaseApp = firebaseConfig;

export const SignOut = () => {
    firebaseApp.auth().signOut().then(() => {
        localStorage.removeItem('Note');
    })

}