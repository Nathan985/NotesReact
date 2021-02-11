import React, {useState} from 'react';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebaseConfig;

export const Login = async (email, senha) => {
    if(email === "" || senha === ""){
        return false;
    }
    const result = await firebaseApp.auth().signInWithEmailAndPassword(email, senha).then(data => {
        console.log(data);
        if(data.user){
            localStorage.setItem('uid', data.user.uid);
            return true;  
        }
        else{
            return false;
        }
        
    })
    return result;
}