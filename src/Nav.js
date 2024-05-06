import styled from './Nav.module.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default function Nav(){
    return (
        <div className={styled.navContainer}>
            <div className={styled.navIcon}><img src='kognicsLogo.jpeg'></img></div>
            <div className={styled.navOptions}>
                <Link to="/" className={styled.link}><div className={styled.dashboard}><div>Dashboard</div></div></Link>
                <Link to="/feeds" className={styled.link}><div className={styled.dashboard}><div>Feeds</div></div></Link>
                <Link to="/assets" className={styled.link}>
                <div className={styled.dashboard}>
                    <NavDropdown title="Assets" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                </div>
                </Link>
                <Link to="/training" className={styled.link}>
                    <div className={styled.dashboard}>
                        <NavDropdown title="Training" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Link>
                <Link to="/insights" className={styled.link}>
                    <div className={styled.dashboard}>
                        <NavDropdown title="Insights" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Link>
                <Link to="/groups" className={styled.link}><div className={styled.dashboard}><div>Groups</div></div></Link>
                <Link to="/productHub" className={styled.link}>
                    <div className={styled.dashboard}>
                        <NavDropdown title="Product Hub" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Link>
                <Link to="/feedback" className={styled.link}><div className={styled.dashboard}><div>Feedback</div></div></Link>
            </div>
            <div className={styled.navImg}>
                <div><img src='settings.png' alt=''></img></div>
                <div><img src='ranking1.svg' alt=''></img></div>
                <div><img src='setting.svg' alt=''></img></div>
                <div><img src='calendar.svg' alt=''></img></div>
                <div><img src='https://d2s9pyuyxqivbc.cloudfront.net/profile/c1b3b49f-3889-4ecd-8f4e-e98135bf9875.png' alt=''></img></div>
            </div>
        </div>
    )
}