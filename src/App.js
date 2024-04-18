import BasicExample from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboardMain';
// import 'antd/dist/antd.css';
import MiddleComponent from './components/middleComponent';
import Quiz from './components/Quizzes';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav/>
      {/* <BasicExample/> */}
      <div style={styles.headerImgContainer}><img style={styles.headerImg}src='headerImage.png'></img></div>
      <div style={styles.content}>
        <Dashboard></Dashboard>
        <MiddleComponent/>
        <Quiz/>
      </div>
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
    height:"81vh", 
    width:"100%",
    backgroundColor: "#edf7f9",
    marginTop:"-10%", 
    display:"flex", 
    justifyContent:"space-around"
  }
}