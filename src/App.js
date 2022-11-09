import { useState } from "react"
import "./App.css"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

function App() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prev) => !prev)
    }

    return (
        <div className="container">
            <Sidebar toggle={toggle} />
            <button className="btn__sidebar" onClick={handleToggle}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="main">
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default App
