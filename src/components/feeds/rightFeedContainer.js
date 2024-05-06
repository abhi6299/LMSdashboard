import styled from "./feeds.module.css";

export default function RightFeedContainer(){
    return (
        <div className={styled.rightFeedContainer}>
            
            <div className={styled.blogs}>
                <h2 className={styled.heading}>Blogs by Kognics</h2>
                <div className={styled.lastestCourseContainer}>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            {/* <div>2 Members</div> */}
                            {/* <div>new</div> */}
                            <div>5 key Benefit of Integration What...</div>
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            {/* <div>2 Members</div> */}
                            {/* <div>new</div> */}
                            <div>5 key Benefit of Integration What...</div>
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            {/* <div>2 Members</div> */}
                            {/* <div>new</div> */}
                            <div>5 key Benefit of Integration What...</div>
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            {/* <div>2 Members</div> */}
                            {/* <div>new</div> */}
                            <div>5 key Benefit of Integration What...</div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={styled.seeMore}>
                    <p>See More</p>
                    <div><img src="down.svg" alt=""></img></div>
                </div>
            </div>

            <div className={styled.groups}>
                <h2 className={styled.heading}>Your Groups</h2>
                <div className={styled.lastestCourseContainer}>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>2 Members</div>
                            <div>new</div>
                            <div>xyz</div>
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>2 Members</div>
                            <div>new</div>
                            <div>xyz</div>
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>2 Members</div>
                            <div>new</div>
                            <div>xyz</div>
                        </div>
                    </div>
                    <div className={styled.coursePanel}>
                        <div className={styled.groupImg}><img src='https://d2s9pyuyxqivbc.cloudfront.net/GroupThumbnail1.svg' alt='image'></img></div>
                        <div className={styled.groupDetails}>
                            <div>2 Members</div>
                            <div>new</div>
                            <div>xyz</div>
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