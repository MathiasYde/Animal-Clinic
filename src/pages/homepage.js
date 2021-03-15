import NavBar from "../components/navbar"
import React from 'react';

import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth"

export default function HomePage() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <div>
      <NavBar/>
      {!user ? <p>You need to be logged in to view this page</p> : <p>i got you homie</p>}
    </div>
  );
}