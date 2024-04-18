import CourseAssigned from "./CourseAssigned";
import Groups from "./Groups";
import CourseOverview from "./CourseOverview";
import styled from './middle.module.css';
export default function MiddleComponent(){
    return (
        <div className={styled.middle}>
            <CourseOverview/>
            <div style={{display:"flex", justifyContent:"space-between", marginTop:"1.5%", height:"55%"}}>
                <CourseAssigned/>
                <Groups/>
            </div>
        </div>
    )
}