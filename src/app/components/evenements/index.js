
import OneEvent from "../oneEvent";
import "../../styles/evenements.css"




export default function Evenements(){

    return(
        <>
            <div className="events">
              <div className="titleDiv">
              <h1 className="title">Events</h1>
              </div>
              <div className="evenements">
              <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Devfest 22"} date={"2022"} route={""}/>
              <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Devfest 22"} date={"2022"} route={""}/>
              <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Devfest 22"} date={"2022"} route={""}/>
              </div>
            </div>
        </>
    )
}