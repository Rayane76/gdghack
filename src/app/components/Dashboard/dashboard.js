import Card from './Card';
import './dashboard.css';
import SideBar from './sidebar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Chart from './chart';

export default function Dashboard() {
  return (
      <section id="dashboard">
        <SideBar />
        <div className='Card-container'>
          <Card title="Sponsor" time="This year" number="+3" icon={<PersonOutlineIcon />} />
          <Card title="Participants" time="Last Event" number="200" icon={<PeopleOutlineIcon />} />
          <Card title="Events" time="This year" number="+3" icon={<AssignmentIndIcon />} />
        </div>
        <div className='chart-container'>
          <Chart />
        </div>
      </section>
    )
}

