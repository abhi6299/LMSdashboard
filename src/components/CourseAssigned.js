import styled from './middle.module.css';

export default function CourseAssigned(){
    return (
        <div className={styled.CourseAssigned}>
            <h2 className={styled.heading}>Latest Course Assinged</h2>
            <div className={styled.lastestCourseContainer}>
                <div className={styled.coursePanel}>
                    <div className={styled.courseImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Sales.svg' alt='image'></img></div>
                    <div className={styled.courseDetails}>
                        <div><span>Created by</span><span>Abhinav</span></div>
                        <div>Add course title</div>
                        <div><a href=''>Go to Course</a></div>
                    </div>
                </div>
                <div className={styled.coursePanel}>
                    <div className={styled.courseImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Sales.svg' alt='image'></img></div>
                    <div className={styled.courseDetails}>
                        <div><span>Created by</span><span>Abhinav</span></div>
                        <div>Add course title</div>
                        <div><a href=''>Go to Course</a></div>
                    </div>
                </div>
                <div className={styled.coursePanel}>
                    <div className={styled.courseImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Sales.svg' alt='image'></img></div>
                    <div className={styled.courseDetails}>
                        <div><span>Created by</span><span>Abhinav</span></div>
                        <div>Add course title</div>
                        <div><a href=''>Go to Course</a></div>
                    </div>
                </div>
                <div className={styled.coursePanel}>
                    <div className={styled.courseImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Sales.svg' alt='image'></img></div>
                    <div className={styled.courseDetails}>
                        <div><span>Created by</span><span>Abhinav</span></div>
                        <div>Add course title</div>
                        <div><a href=''>Go to Course</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}