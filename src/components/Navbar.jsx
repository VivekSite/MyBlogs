import React from "react";
import './Navbar.css'

function Navbar(){
    return (
        <div style={{width:"100vw", backgroundColor:"#3b3b3b", height:"auto"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>

                <div style={{width:"60px", height:"30px", backgroundColor:"red", margin:"1rem", marginLeft:"3rem"}}></div>

                <div style={{display:"flex", alignItems:"center", marginRight:"3rem"}}>
                    <a href="https://viveksite.github.io/VivekPortfolio/" className="linkStyle" target="_blank">Home</a>
                    <a href="https://github.com/VivekSite/MyBlogs" className="linkStyle" target="_blank">Blogs</a>
                    <a href="https://github.com/VivekSite/MyBlogs" className="linkStyle" target="_blank">Skills</a>
                    <a href="https://github.com/VivekSite/MyBlogs" className="linkStyle" target="_blank">About</a>
                    <a href="https://github.com/VivekSite/MyBlogs" className="linkStyle" target="_blank">Contact</a>
                </div>

            </div>
        </div>
    )
}

export default Navbar;