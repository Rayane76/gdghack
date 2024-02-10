import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';import './footer.css';
const Footer = () => {
    return (
        <div id="footer">
            <div className="logo">
                <img src="/images/GEMP.png" alt="GEMP" />
            </div>
            <div className="footer-element">
                <h4>Events</h4>
                <ul>
                    <li>GDG Events</li>
                    <li>Internal Events</li>
                    <li>Online Events</li>
                    <li>Next Events</li>
                </ul>    
            </div>
            <div className="footer-element">
                <h4>Projects</h4>
                <ul>
                    <li>Dev Projects</li>
                    <li>GDG Projecst</li>
                </ul>    
            </div>
            <div className="footer-element">
                <h4>Our Team</h4>
                <ul>
                    <li>Alumnis</li>
                    <li>Testimonials</li>
                    <li>Members</li>
                </ul>    
            </div>
            <div className="footer-element">
                <h4>About Us</h4>
                <ul>
                    <li>Who are we?</li>
                    <li>Statistics</li>
                    <li>Goals</li>
                    <li>Sponsors</li>
                </ul>    
            </div>
            <div className="footer-element">
                <LinkedInIcon></LinkedInIcon>
                <FacebookIcon></FacebookIcon>
                <XIcon></XIcon>
                <InstagramIcon></InstagramIcon>
            </div>
        </div>
    );
}
export default Footer;