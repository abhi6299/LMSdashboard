import React from 'react';
// import styled from 'styled-components';
import Calendar from 'react-calendar';
import styled from './dashboard.module.css';
export default class Dashboard extends React.Component{
    render(){
        return(
            <div className={styled.outer}>
                <div className={styled.header}>
                    <div style={{display:"inline-block",width:"70%"}}>
                        <div>Welcome back,</div>
                        <div>Abhinav</div>
                    </div>
                    <div className={styled.hand}>
                        <img style={{width:"100%"}} src="wave.png"></img>
                    </div>
                </div>
                <div className={styled.lastLogin}>
                    <span>Last Login &nbsp;</span>
                    <span style={{fontSize:"1.1rem", marginLeft:"2%"}}>7.13 AM(UTC)</span>
                </div>
                <div className={styled.data}>
                    <div className={styled.dataImg} style={{display:"inline-block"}}><img src='leaderboard.png'></img></div>
                    <div className={styled.dataContent} style={{display:"inline-block"}}>
                        <div>Points Earned</div>
                        <div>6150</div>
                    </div>
                    <div className={styled.dataArrow} style={{display:"inline-block"}}>&gt;</div>
                </div>
                <div className={styled.data}>
                    <div className={styled.dataImg} style={{display:"inline-block"}}><img src='leaderboard.png'></img></div>
                    <div className={styled.dataContent} style={{display:"inline-block"}}>
                        <div>Your rank</div>
                        <div>4</div>
                    </div>
                    <div className={styled.dataArrow} style={{display:"inline-block"}}>&gt;</div>
                </div>
                <div className={styled.data}>
                    <div className={styled.dataImg} style={{display:"inline-block"}}><img src='leaderboard.png'></img></div>
                    <div className={styled.dataContent} style={{display:"inline-block"}}>
                        <div>Certificate Earned</div>
                        <div>6</div>
                    </div>
                    <div className={styled.dataArrow} style={{display:"inline-block"}}>&gt;</div>
                </div>
                <div className={styled.calendarSection}>
                    <h5>Calendar</h5>
                    <div className={styled.calendar}>
                        <div className={styled.calendarHead}>
                            <div>&lt;</div>
                            <div>April 2024</div>
                            <div>&gt;</div>
                        </div>

                        <div className={styled.calendarDate}>
                            <div className={styled.date}><div>15</div><div>Mon</div></div>
                            <div className={styled.date}><div>16</div><div>Tues</div></div>
                            <div className={styled.date}><div>17</div><div>Wed</div></div>
                            <div className={styled.date}><div>18</div><div>Thurs</div></div>
                            <div className={styled.date}><div>19</div><div>Fri</div></div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}