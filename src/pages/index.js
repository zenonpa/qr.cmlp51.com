import React from "react"
import Accordion from "../components/Accordion"
import PlacaSection from "../components/PlacaSection"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <main className="index-page">
      <PlacaSection />
      {/* <Accordion /> */}
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Cmlp51.com</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
      rel="stylesheet"
    />
  </>
)
