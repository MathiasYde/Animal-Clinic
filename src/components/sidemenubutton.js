import React from "react"

import { Link } from "react-router-dom";

export default function SideMenuButton(props) {
  return (
    <li>
      <Link to={props.to}><p>{props.name}</p></Link>
    </li>
  )
}