import React from "react"

export default function SideMenuGroup(props) {
  return (
    <li className="py-2">
      <p className="font-bold tracking-wider">{props.name}</p>
      <ul>
        {props.children}
      </ul>
    </li>
  )
}