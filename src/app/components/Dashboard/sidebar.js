import './sidebar.css'
export default function SideBar() {
    return (
        <>
            <div className="sidebar">
                <div className="dashboard-top">
                    <img src='/images/Frame 1.png' />
                </div>
                <div className="sidebar-bottom-container">

                    <div className="sidebar-bottom active">
                        <img src='/images/Dashboard.svg'></img>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="sidebar-bottom">
                        <img src='/images/Events.svg'></img>
                        <h1>Events</h1>
                    </div>
                    <div className="sidebar-bottom">
                        <img src='/images/Events.svg'></img>
                        <h1>Participants</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
