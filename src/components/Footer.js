import React from "react"
import Image from "react-bootstrap/Image"
import call from "../assets/call.png"
import map from "../assets/map.png"

const Footer = () => <footer className="page-footer font-small blue" >
    <div className="footer-copyright text-center py-2" style={{backgroundColor: "#212529", color: "#ffffff"}}>
       © 2022 Copyright: Vitalii Piontkovskiy <Image width="25px" src={call}/> +38 (096) 931 64 10 <Image width="25px" src={map}/>проспект Степана Бандери, 157, Тернопіль 
    </div>
</footer>

export default Footer