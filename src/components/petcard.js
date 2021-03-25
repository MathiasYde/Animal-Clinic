import React from "react"

import MaterialIcon, { colorPalette } from 'material-icons-react';

export default function PetCard(props) {

  return (
    <div className="flex flex-col flex-grow-0 flex-shrink-0 w-64 overflow-hidden bg-white rounded shadow h-96">
      <div className="relative w-full h-32">
        <img src={props.imagesource} alt={props.imagealt} />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center w-20 h-20 mx-auto transform translate-y-12 bg-white rounded-full shadow">
          <MaterialIcon icon="check" size="large" color="#00ee00"/>
        </div>
      </div>
      {/* <div className="flex items-center justify-center w-24 h-24 mx-auto transform -translate-y-12 bg-white rounded-full shadow">
        <MaterialIcon icon="check" size="large" color="#00ee00"/>
      </div> */}


      <div className="flex flex-col items-center flex-1 p-4 mt-10">
        <p className="text-xl font-bold">{props.name}</p>
      </div>

      <button className="p-2 m-2 bg-gray-200 rounded">See more</button>
    </div>
  )
}