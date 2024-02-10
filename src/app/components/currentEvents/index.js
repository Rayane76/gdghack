import "../../styles/currentEvents.css"
import Image from "next/image"
import logo from "../../../../public/images/GEMP.svg"
import profile from "../../../../public/images/profilePic.svg"
import OneEvent from "../oneEvent"

export default function CurrentEvents(){
    return(
        <>
            <div className="currentEvents">
              <div className="logoSect">
                <Image className="logoImage" src={logo} alt="logo"/>
                <Image className="profile" src={profile} alt="profile"/>
              </div>
              <div className="title">
                <h1 className="titleText">Current Events</h1>
              </div>
              <div className="evenements">
              <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Devfest 22"} date={"2022"} route={"/judge"}/>
              <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Devfest 22"} date={"2022"} route={"/judge"}/>
              <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Devfest 22"} date={"2022"} route={"/judge"}/>
              </div>
            </div>
        </>
    )
}