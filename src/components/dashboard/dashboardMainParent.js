import Chat from "../../chat"
import Dashboard from "./dashboardLeft"
import Quiz from "./Quizzes"
import MiddleComponent from "./middleComponent"

export default function DashboardMainParent(){
    return (
        <>
            <div style={styles.headerImgContainer}><img style={styles.headerImg}src='headerImage.png'></img></div>
            <div style={styles.content}>
                <Dashboard></Dashboard>
                <MiddleComponent></MiddleComponent>
                <Quiz/>
                <Chat/>
            </div>
        </>
    )
}

const styles = {
    headerImgContainer:{
      height:"30vh", 
      width:"100%",
      marginTop:"10vh",
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