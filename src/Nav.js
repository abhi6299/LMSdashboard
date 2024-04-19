import styled from './Nav.module.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Nav(){
    return (
        <div className={styled.navContainer}>
            <div className={styled.navIcon}><img src='kognicsLogo.jpeg'></img></div>
            <div className={styled.navOptions}>
                <div style={{fontWeight: 600}}>Dashboard</div>
                <div>Feed</div>
                <NavDropdown title="Assets" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Training" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Insights" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <div>Groups</div>
                <NavDropdown title="Product Hub" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <div>Feedback</div>
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