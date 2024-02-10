import './current-event.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const CurrentEvents=()=>{
    return(
        <div id="current-events">
           <div className='current-events-top'>
                 <img src='/images/Frame 1.png'></img>
                <AccountCircleIcon style={{ fontSize: '50px', color: 'blue' }}>
                 </AccountCircleIcon>                                  
           </div>
           <div className='current-events-bottom'>
                <h1>Current Events</h1> 
           </div>
       </div> 
    )
}
export default CurrentEvents;