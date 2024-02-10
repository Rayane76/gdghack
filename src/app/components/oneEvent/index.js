import "../../styles/oneEvent.css"
import Image from "next/image";

export default function OneEvent(props){
    return(
        <>
             <div className="imageandtitle">
                <Image className="devImage" src={props.image} height={250} width={250} alt="dev image"/>
                <div className="titleDate">
                 <p className="ev">{props.title}</p>
                 <p className="dt">{props.date}</p>
                </div>
              </div>
        </>
    )
}