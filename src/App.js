import React from "react"

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

  return (<Router>
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  </Router>)
}