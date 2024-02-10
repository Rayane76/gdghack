'use client'
import { useParams} from "next/navigation";
import "../../../../styles/team.css"
import Image from "next/image"
import logo from "../../../../../../public/images/GEMP.svg"
import profile from "../../../../../../public/images/profilePic.svg"
import figma from "../../../../../../public/images/figma.svg"
import star from "../../../../../../public/images/Star.svg"
import star2 from "../../../../../../public/images/Star2.svg"


export default function Team(){
    const params = useParams();
    const event = params.event;
    const team = params.team;
    let repEvent = event.replace(/%/g, " ");
    return(
        <>
          <div className="team">
          <div className="logoSect">
                <Image className="logoImage" src={logo} alt="logo"/>
                <Image className="profile" src={profile} alt="profile"/>
              </div>
              <div className="title">
                <h1 className="titleText">{team}</h1>
              </div>
              <div className="descAndCrit">
                <div className="descriptionDiv">
                 <p style={{color:"white"}}>Description</p>
                 <div className="descTextDiv">
                   <p className="descText">“DevFest”, short for “  Developer Festival” is an annual technical event organized by Google Developer Groups (GDGs), aiming to deliver conferences and workshops to students, developers, professionals, and everyone passionate about the tech field. It is considered a great opportunity for tech enthusiasts to build and expand their networks and get updated about the latest trends.</p>
                 </div>
                </div>
                <div className="critsAndBtnsDiv">
                    <div className="btnsDiv">
                     <div className="criteria color">
                       Submit
                     </div>
                    </div>
                    <div>
                        <p style={{color:"white"}}>Links</p>
                        <div className="subs">
                            <div className="figma">
                             <Image src={figma} alt="figma" className="figmaImage"/>
                             <p className="subsColor">Figma</p>
                            </div>
                            <div className="front">
                              <Image src={figma}  alt="figma" className="figmaImage"/>
                              <p className="subsColor">Frontend</p>
                            </div>
                            <div className="back">
                              <Image src={figma}  alt="figma" className="figmaImage"/>
                              <p className="subsColor">Backend</p>
                            </div>
                        </div>
                        <p style={{color:"white"}}>Criterias</p>
                        <div>
                            <div className="oneCriteria">
                            <button className="critButton">Engagement</button>
                            <div style={{display:"flex"}}>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                            </div>
                            </div> 
                            <div className="oneCriteria">
                            <button className="critButton">Interaction</button>
                            <div style={{display:"flex"}}>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                            </div>
                            </div> 
                            <div className="oneCriteria">
                            <button className="critButton">Technology</button>
                            <div style={{display:"flex"}}>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                            </div>
                            </div> 
                            <div className="oneCriteria">
                            <button className="critButton">Architecture</button>
                            <div style={{display:"flex"}}>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                            </div>
                            </div> 
                            <div className="oneCriteria">
                            <button className="critButton">Engagement</button>
                            <div style={{display:"flex"}}>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                            </div>
                            </div> 
                            <div className="oneCriteria">
                            <button className="critButton">Engagement</button>
                            <div style={{display:"flex"}}>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                              <Image src={star2} alt="star" className="star"/>
                            </div>
                            </div> 
                        </div>
                    </div>
                   
                </div>
              </div>
          </div>
        </>
    )
}