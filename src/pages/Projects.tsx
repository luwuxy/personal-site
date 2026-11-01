import Navbar from "../components/Navbar"
import "./Projects.css"
import { ViewTransition } from "react"

export default function Projects() {
  return (
    <>
      <Navbar />
      <ViewTransition enter="slide-in" exit="slide-out">
        <div className="content" style={{alignItems: "center"}}>
          <h1>WIP!!</h1>
        </div>
      </ViewTransition>
    </>
  )
}