import styled from './feeds.module.css';

export default function LeftFeedContainer(){
    return (
        <div className={styled.leftFeedContainer}>
            <div className={styled.feedUserProfile}>
                <div className={styled.userProfile}><img src="https://d2s9pyuyxqivbc.cloudfront.net/profile/c1b3b49f-3889-4ecd-8f4e-e98135bf9875.png"></img></div>
                <div className={styled.userInfo}>
                    <h2>Bharat Khati</h2>
                    <p>Developer</p>
                </div>
            </div>
            <div className={styled.userPostCount}>
                <p>My Posts</p>
                <p>32</p>
            </div>
            <div className={styled.feedPublicCourses}>
                <h2 className={styled.heading}>Public Courses</h2>
                <div className={styled.lastestCourseContainer}>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={styled.seeMore}>
                    <p>See More</p>
                    <div><img src="down.svg" alt=""></img></div>
                </div>
            </div>

            <div className={styled.feedAssignCourses}>
                <h2 className={styled.heading}>Assign Courses</h2>
                <div className={styled.lastestCourseContainer}>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>Created by Abhinav</div>
                            <div>Tech 10</div>
                            {/* <div>xyz</div> */}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={styled.seeMore}>
                    <p>See More</p>
                    <div><img src="down.svg" alt=""></img></div>
                </div>
            </div>
        </div>
    )
}