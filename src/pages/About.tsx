import Navbar from "../components/Navbar"
import { ViewTransition } from "react"
import "./About.css"

export default function About() {
  return (
    <>
      <Navbar />
      <ViewTransition enter="slide-in" exit="slide-out">
        <main className="content">
          <div className="inner-content about-me">
            <h1>About Me</h1>
            <div className="about-info">
              <div className="techs">
                <h3>Technologies Learned:</h3>
                <p>JavaScript, React</p>
              </div>
            </div>
          </div>
        </main>
      </ViewTransition>
    </>
  )
}