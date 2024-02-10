'use client'
import "../../../styles/criterias.css"
import Image from "next/image"
import { useParams } from "next/navigation";
import logo from "../../../../../public/images/GEMP.svg"
import profile from "../../../../../public/images/profilePic.svg"
import criteria from "../../../../../public/images/criteria.svg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Criterias(){
    const params = useParams();
    const event = params.event;
    let repEvent = event.replace(/%/g, " ");
    return(
        <>
         <div className="criterias">
         <div className="logoSect">
                <Image className="logoImage" src={logo} alt="logo"/>
                <Image className="profile" src={profile} alt="profile"/>
              </div>
              <div className="title">
                <h1 className="titleText">{repEvent}</h1>
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
                     <div className="criteria">
                       <Image src={criteria} alt="criteria" className="criteriaImage"/>
                       <p className="criteriaText">Auto Extract</p>
                     </div>
                     <div className="criteria color">
                       Add Criteria
                     </div>
                    </div>
                    <div className="criteriasDiv">
                    <p style={{color:"white",marginBottom:"10px"}}>Criterias</p>
                    <Container>
                     <Row>
                        <Col><button className="critButton">Engagement</button></Col>
                        <Col><button className="critButton">Quality</button></Col>
                        <Col><button className="critButton">Interaction</button></Col>
                        <Col><button className="critButton">Interaction</button></Col>
                        <Col><button className="critButton">Interaction</button></Col>
                        <Col><button className="critButton">Interaction</button></Col>
                        <Col><button className="critButton">Interaction</button></Col>
                        <Col><button className="critButton">Interaction</button></Col>
                        <Col><button className="critButton">Interaction</button></Col>
                     </Row>
                    </Container>
                    </div>
                </div>
              </div>
         </div>
        </>
    )
}