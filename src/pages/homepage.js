import NavBar from "../components/navbar"
import React, { useContext } from 'react';

import firebase from "firebase/app";

import SideMenuButton from "../components/sidemenubutton"
import SideMenuGroup from "../components/sidemenugroup"
import SideMenu from "../components/sidemenu"

import { useCollectionData } from "react-firebase-hooks/firestore"

import UserContext from "../datamodels/usercontext";

export default function HomePage() {
  const firestore = firebase.firestore();

  const { account } = useContext(UserContext);
  const query = firestore.collection("pets").where("__name__", "in", account.pets);
  const [pets] = useCollectionData(query);

  return (
    <div className="flex flex-col flex-1">
      <NavBar />
      <div className="flex flex-row flex-1">
        <SideMenu>
          <SideMenuGroup name="Pet">
            <SideMenuButton name="Quickview" to="/home/quickview/" />
          </SideMenuGroup>
          <SideMenuGroup name="Account">
            <SideMenuButton name="Manage Account" to="/account" />
          </SideMenuGroup>
        </SideMenu>

        <section className="flex flex-col flex-1 bg-red-400">
          <table className="flex-1 p-4 bg-blue-200">
            <thead>
              <tr className="text-left">
                <th className="p-2">Pet name</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                pets && pets.map((pet, index) => {
                  return <tr key={index}>
                    <td className="p-2">{pet.name}</td>
                    <td className="p-2">{pet.status}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}