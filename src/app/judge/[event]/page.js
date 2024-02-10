'use client'
import { useParams, useRouter} from "next/navigation";
import Image from "next/image"
import logo from "../../../../public/images/GEMP.svg"
import profile from "../../../../public/images/profilePic.svg"
import OneEvent from "@/app/components/oneEvent";
import search from "../../../../public/images/search.svg"
import criteria from "../../../../public/images/criteria.svg"
import "../../styles/specificEvent.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function JudgeSpecificEvent(){
    const router = useRouter();
    const params = useParams();
    const event = params.event;
    let repEvent = event.replace(/%/g, " ");
    const url = "/judge/" + event + "/criterias";
    const url2 = "/judge/" + event + "/teams";
    return(
        <>
         <div className="specificEvent">
         <div className="logoSect">
                <Image className="logoImage" src={logo} alt="logo"/>
                <Image className="profile" src={profile} alt="profile"/>
              </div>
              <div className="title">
                <h1 className="titleText">{repEvent}</h1>
              </div>
              <div className="searchWithCriteria">
              <div className="searchDiv">
                <Image src={search} alt="search" className="search"/>
                <input placeholder="Search for A team" className="searchInput"></input>
              </div>
              <div className="criteria" onClick={()=>router.push(url)}>
              <Image src={criteria} alt="criteria" className="criteriaImage"/>
              <p className="criteriaText">Criterias</p>
              </div>
              </div>
              <Container>
                <Row>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Ra9mana"} date={"2022"} route={url2}/></Col>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Elfari9"} date={"2022"} route={url2}/></Col>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Ra9mana"} date={"2022"} route={url2}/></Col>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Elfari9"} date={"2022"} route={url2}/></Col>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Ra9mana"} date={"2022"} route={url2}/></Col>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Elfari9"} date={"2022"} route={url2}/></Col>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Ra9mana"} date={"2022"} route={url2}/></Col>
                    <Col> <OneEvent className="cardItem" image={"/images/devfest.png"} title={"Elfari9"} date={"2022"} route={url2}/></Col>
                </Row>
              </Container>
         </div>
        </>
    )
}