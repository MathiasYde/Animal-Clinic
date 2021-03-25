import React from 'react';

import NavBar from "../components/navbar";

import swal from 'sweetalert';
import firebase from "firebase/app";

export default function LoginPage() {
  const firestore = firebase.firestore();

  let errormap = {
    "auth/invalid-email": "Invalid Email",
    "auth/wrong-password": "Wrong Password",
    "auth/weak-password": "Weak Password"
  }

  const humanizeerror = (code) => {
    return errormap[code] ? errormap[code] : code;
  }

  const login = () => {
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((_) => {
        window.location.href = "/home";
      })
      .catch((error) => {
        swal(humanizeerror(error.code), error.message, "error");
      })
  }

  const signup = () => {
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;
    const name = document.getElementById("name-field").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        firestore.collection("accounts").doc(credentials.user.uid).set({
          uid: credentials.user.uid,
          pets: [],
          name: name
        })
        .then((_) => {
          window.location.href = "/home";
        })
        .catch((error) => {
          swal(error.code, error.message, "error");
        });
      })
      .catch((error) => {
        swal(humanizeerror(error.code), error.message, "error");
      });
  }

  return (
    <div className="flex flex-col flex-1">
      <NavBar />
      <section className="flex flex-col flex-1 w-64 mx-auto">
        <form className="flex flex-col p-4 rounded gap-y-2">
          <label for="email">Email</label>
          <input id="email-field" type="text" name="email" placeholder="email" />
          <label for="password">Password</label>
          <input id="password-field" type="password" name="password" placeholder="password" />
          <p>Fill these in if you're signing up</p>
          <label for="name">Name</label>
          <input id="name-field" type="text" name="name" placeholder="name" />
        </form>
        <div className="flex flex-row p-2 justify-evenly">
          <button className="px-4 py-2 rounded bg-gray-50" onClick={login}>Sign in</button>
          <button className="px-4 py-2 rounded bg-gray-50" onClick={signup}>Sign up</button>
        </div>
      </section>

    </div>
  );
}