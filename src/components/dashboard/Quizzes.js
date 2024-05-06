import styled from './middle.module.css';

export default function Quiz(){
    return (
        <div className={styled.quizContainer}>
            <div style={{height:"40%"}}>
                <h2 className={styled.quizHeading}>Live Quizzes</h2>
                <div className={styled.liveQuizContainer}><p><i>No live Quiz yet!</i></p></div>
            </div >
            <div style={{height:"60%", paddingLeft:"1%",paddingRight:"7%"}}>
                <h2 className={styled.quizHeading}>Assinged Quizzes</h2>
                <div className={styled.quizPanel}>
                    <div>
                        <div className={styled.quizImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Quiz.svg' alt='image'></img></div>
                        <div className={styled.quizDetails}>
                            <div><span>Created by</span><span>Abhinav</span></div>
                            <div>Go to Quiz</div>
                        </div>
                    </div>
                    <div>
                        <div className={styled.quizImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Quiz.svg' alt='image'></img></div>
                        <div className={styled.quizDetails}>
                            <div><span>Created by</span><span>Abhinav</span></div>
                            <div>Development</div>
                        </div>
                    </div>
                    <div>
                        <div className={styled.quizImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Quiz.svg' alt='image'></img></div>
                        <div className={styled.quizDetails}>
                            <div><span>Created by</span><span>Abhinav</span></div>
                            <div>Human Resources</div>
                        </div>
                    </div>
                    <div>
                        <div className={styled.quizImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Quiz.svg' alt='image'></img></div>
                        <div className={styled.quizDetails}>
                            <div><span>Created by</span><span>Abhinav</span></div>
                            <div>Marketing</div>
                        </div>
                    </div>
                    <div>
                        <div className={styled.quizImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Quiz.svg' alt='image'></img></div>
                        <div className={styled.quizDetails}>
                            <div><span>Created by</span><span>Abhinav</span></div>
                            <div>Campagning</div>
                        </div>
                    </div>
                    <div>
                        <div className={styled.quizImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Quiz.svg' alt='image'></img></div>
                        <div className={styled.quizDetails}>
                            <div><span>Created by</span><span>Abhinav</span></div>
                            <div>Go to Course</div>
                        </div>
                    </div>
                    <div>
                        <div className={styled.quizImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/Quiz.svg' alt='image'></img></div>
                        <div className={styled.quizDetails}>
                            <div><span>Created by</span><span>Abhinav</span></div>
                            <div>Go to Course</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}