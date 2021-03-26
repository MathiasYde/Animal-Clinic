import NavBar from "../components/navbar"
import React, { useEffect, useState } from 'react';

import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth"

import SideMenuButton from "../components/sidemenubutton"
import SideMenuGroup from "../components/sidemenugroup"
import SideMenu from "../components/sidemenu"

import { useDocumentData } from "react-firebase-hooks/firestore"

export default function HomePage() {
  //TODO: Get list of pets for this user
  // For now, assume this data comes from the database
  const pets = [  
    {name: "Søren Snegl", status: "healthy"}
  ]
  
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
              <tr className="text-left">
                <th className="p-2">Pet name</th>
                <th className="p-2">Status</th>
              </tr>
            {
              pets && pets.map((pet, index) => {
                return <tr>
                  <td className="p-2">{pet.name}</td>
                  <td className="p-2">{pet.status}</td>
                </tr>
              })
            }
          </table>
        </section>
      </div>
    </div>
  );
}