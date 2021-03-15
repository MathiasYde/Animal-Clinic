import {
  Link
} from "react-router-dom";

import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth"

export default function NavBar(props) {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const signout = () => {
    auth.signOut();
    window.location.href = "/";
  }

  return (
    <nav className="flex flex-row items-center justify-between h-10 m-1 mx-4 bg-white">
      <Link to="/">Roskilde Dyreklinik</Link>

      {
        user ? <button onClick={signout}>{user.email}</button> : <Link to="/login">Login</Link>
      }
    </nav>
  );
}