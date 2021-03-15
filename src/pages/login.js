import React from 'react';

import NavBar from "../components/navbar";

import firebase from "firebase/app";

export default function LoginPage() {
  const login = () => {
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((credentials) => {
        let user = credentials.user;
        window.location.href = "/home";
      })
      .catch((error) => {
        alert(error.code, error.message);
      })
  }

  const signup = () => {
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        let user = credentials.user;
        window.location.href = "/home";
      })
      .catch((error) => {
        alert(error.code, error.message);
      });
  }

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <section className="flex flex-col flex-1 w-64 mx-auto">
        <form className="flex flex-col p-4 rounded gap-y-2">
          <label for="email">Email</label>
          <input id="email-field" type="text" name="email" placeholder="email" />
          <label for="password">Password</label>
          <input id="password-field" type="password" name="password" placeholder="password" />
        </form>
        <div className="flex flex-row p-2 justify-evenly">
          <button className="px-4 py-2 rounded bg-gray-50" onClick={login}>Sign in</button>
          <button className="px-4 py-2 rounded bg-gray-50" onClick={signup}>Sign up</button>
        </div>
      </section>

    </div>
  );
}