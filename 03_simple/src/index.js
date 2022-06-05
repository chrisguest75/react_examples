import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav>
                <img src="./react.svg" width="40px" />
            </nav>
        </header>
    )
}
function Content() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )    
}
function Footer() {
    return (
        <footer className="footerbox">
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )   
}
function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))



