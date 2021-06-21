import React, { createContext } from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './pages/login';

import LandingPage from './pages/landingpage';
import HomePage from "./pages/homepage";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth"
import { useDocumentData } from "react-firebase-hooks/firestore"
import UserContext from "./datamodels/usercontext";
import AddPetPage from "./pages/addpetpage";

firebase.initializeApp({
  apiKey: "AIzaSyD-jJXyFU7U-ZdiVfL0A_Cb7JSp3Lsoesg",
  authDomain: "animal-clinic-274a9.firebaseapp.com",
  projectId: "animal-clinic-274a9",
  storageBucket: "animal-clinic-274a9.appspot.com",
  messagingSenderId: "1009909112836",
  appId: "1:1009909112836:web:5528d1b3bfbc86ea5b5551"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function App() {
  const [user] = useAuthState(auth);
  const [account] = useDocumentData(firestore.collection("accounts").doc(user?.uid));

  const context = {
    user: user,
    account: account
  }

  return (
    <UserContext.Provider value={context}>
      <Router>
        <Switch>
          <Route path="/home">
            {account && account.pets.length > 0 && <HomePage/>}
            {account && account.pets.length == 0 && <AddPetPage/>}
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}