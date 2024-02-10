import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './event-teams.css';
const EventTeams = () => {
    return (
        <div id="event-teams">
            <div className="event-teams-top">
                <img src='/images/Frame 1.png'></img>
                <AccountCircleIcon style={{ fontSize: '50px', color: 'blue' }}>
                </AccountCircleIcon>
            </div>
            <div className='event-teams-middle'>
               <h1>Event Title</h1>
              <div className='search-for-teams'>
               <input type="text" placeholder="Search for teams" />
               <button><img src='/images/upload.png'></img>Criterias</button>
              </div> 
               
            <div className="event-teams-bottom">
            </div>
           
                
            </div>
        </div>
    );
}
export default EventTeams;