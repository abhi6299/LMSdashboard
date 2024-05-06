import styled from './middle.module.css';

export default function Groups(){
    return (
        <div className={styled.CourseAssigned}>
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
        </div>
    )
}