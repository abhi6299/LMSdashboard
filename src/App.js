// import BasicExample from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Nav';
import Chat from './chat';
import FeedsMain from './components/feeds/feedsMain';
import DashboardMainParent from './components/dashboard/dashboardMainParent';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboardLeft';
import MiddleComponent from './components/dashboard/middleComponent';
import Quiz from './components/dashboard/Quizzes';

function App() {
  return (
    <>
      {/* <Nav/> */}
          {/* <BasicExample/> */}
          {/* <div style={styles.headerImgContainer}><img style={styles.headerImg}src='headerImage.png'></img></div>
          <div style={styles.content}>
            <Dashboard/>
            <MiddleComponent/>
            <Quiz/>
            <Chat/>
          </div> */}
      {/* <DashboardMainParent/> */}
      {/* Feed */}
        {/* <FeedsMain/> */}
      <Router>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<DashboardMainParent />} />
            <Route path="/feeds" element={<FeedsMain />} />
          </Routes>
      </Router>
      
    </>
  )
}

export default App;

const styles = {
  headerImgContainer:{
    height:"30vh", width:"100%"
  },
  headerImg:{
    height:100+"%", 
    width:"100%"
  },
  content:{
    height:"80vh", 
    width:"100%",
    backgroundColor: "#edf7f9",
    marginTop:"-10%", 
    display:"flex", 
    justifyContent:"space-around",
    postion:"relative",
    // border:"5px solid black"
  }
}