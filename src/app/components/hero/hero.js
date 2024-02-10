import Navbar from '../navbar/navbar';
import './hero.css'
const Hero = () => {
    return (
        <>
          <Navbar />
          <div id="hero">
           <div className="hero-left" >
                <h1 className='gdg-algiers'>
                GDG Algiers Events Management Platform
                </h1>
                <img src='/images/Group.svg'></img>
           </div>
           <div className="hero-right" >
                <img src="/images/Screen-1 1.png" alt="Hero" height={'500px'}/>
           </div>

          </div>
        </>
      
    );
}
export default Hero;