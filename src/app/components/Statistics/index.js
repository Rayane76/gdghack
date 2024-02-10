import "../../styles/statistics.css"
import blueRect from "../../../../public/images/Rectangle3.svg"
import Image from "next/image"
import greenRect from "../../../../public/images/RectangleVert.svg"
import redRect from "../../../../public/images/RectangleRed.svg"


export default function Statistics(){
   return(
    <>
        <div className="statistics">
          <h1 className="title">Statistics</h1>
          <div className="statsDiv">
           <div className="blueRect"></div>
           <div className="greenRect"></div>
           <div className="redRect"></div>
          </div>
          <div className="rectTitles">
            <p className="t1">+10</p>
            <p className="t2">+25 events</p>
            <p className="t3">+2000 participants</p>
          </div>

        </div>
    </>
   )
}