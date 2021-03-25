import React from "react"

export default function SideMenu(props) {
  return (
    <section id="side-menu" className="flex flex-grow-0 flex-shrink-0 w-64 p-4">
      <ul className="flex flex-col flex-1 divide-y">
        {props.children}
      </ul>
    </section>
  )
}