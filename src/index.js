import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
        apiKey: "AIzaSyCWyu73PtNK8phhKtHTesbQ7fd0F8Tfv1w",
        authDomain: "chat-9b128.firebaseapp.com",
        projectId: "chat-9b128",
        storageBucket: "chat-9b128.appspot.com",
        messagingSenderId: "206792467249",
        appId: "1:206792467249:web:8b643725524dc479938610",
        measurementId: "G-H62G2FH0HH"
    }
);

export const Context = createContext(null)
const auth = firebase.auth()
const firestore= firebase.firestore()


ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App/>
        </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
