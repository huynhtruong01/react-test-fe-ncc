import React from "react"
import "./Sidebar.css"

Sidebar.propTypes = {}

function Sidebar({ toggle }) {
    return (
        <div className={`sidebar ${toggle ? "active" : ""}`}>
            <nav id="nav">
                <ul className="nav-list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
