import { useState } from "react";
import styles from "./feeds.module.css";
import styled from "styled-components";

const CommentCardSection = styled.div`
    // border:1px solid blue;
    display: ${props => (props.show? "visible": "none")}
`

export default function MiddleFeedContainer(props){

    const [viewComment, setViewComment] = useState(false); // Initialize search state

    const handleComments = () => {
        setViewComment(prevState => !prevState);
    }

    return (
        <div className={styles.middleFeedContainer}>
            <div className={styles.searchBox}>
                <input placeholder="Hi Abhinav, Share your thoughts and knowledge here." 
                    type="text" onClick={props.handle}/>
            </div>
            <div className={styles.feeds}>
                    <div className={styles.postHeader}>
                        <div className={styles.postHeaderImage}>
                            <img src="https://d2s9pyuyxqivbc.cloudfront.net/profile/Avtar2.png" alt="Icon"></img>
                        </div>
                        <div className={styles.postHeaderTitle}>
                            <p>Abhinav</p>
                            <p>45 seconds ago</p>
                        </div>
                    </div>
                    <div className={styles.postBody}>
                        <p>Good Morning</p>
                        <div className={styles.postBodyImage}>
                            <img src="https://d2s9pyuyxqivbc.cloudfront.net/dc80c18c-c1e6-4e20-8cad-543defdf3936.png" alt="Post feed"></img>
                        </div>
                    </div>
                    <div className={styles.zoom}>
                        <img src="zoom.svg"></img>
                    </div>
                    <div className={styles.postCommentSection}>
                        <div className={styles.commentHeartIcon}>
                            <div><img src="heart-solid.svg"></img></div>
                            <div>2</div>
                        </div>
                        <div className={styles.commentIcon}>
                            <div><img src="message.svg"></img></div>
                            <div>2</div>
                        </div>
                        <div className={styles.commentProfileIcon}>
                            <img src="https://d2s9pyuyxqivbc.cloudfront.net/profile/c1b3b49f-3889-4ecd-8f4e-e98135bf9875.png" alt="icon"></img>
                        </div>
                        <div className={styles.commentInput}>
                            <input placeholder="Write a Comment"
                        type="text"/>
                        </div>
                    </div>
                    <div className={styles.postFooter} onClick={handleComments}>
                        <u>View Comments</u>
                    </div>
                    <CommentCardSection show={viewComment}>
                        <div className={styles.commentContainer}>
                            <div className={styles.commentHeader}>
                                <div className={styles.commentHeaderImage}>
                                    <img src="https://d2s9pyuyxqivbc.cloudfront.net/profile/Avtar2.png" alt="Icon"></img>
                                </div>
                                <div className={styles.commentHeaderTitle}>
                                    <p>Abhinav</p>
                                    <p>45 seconds ago</p>
                                    <div>test</div>
                                </div>
                            </div>
                            <div className={styles.commentHeaderFooter}>
                                <span>0 Replies &nbsp;</span>
                                <span>| &nbsp;</span>
                                <span>Reply</span>
                            </div>
                        </div>
                        <div className={styles.commentContainer}>
                            <div className={styles.commentHeader}>
                                <div className={styles.commentHeaderImage}>
                                    <img src="https://d2s9pyuyxqivbc.cloudfront.net/profile/Avtar2.png" alt="Icon"></img>
                                </div>
                                <div className={styles.commentHeaderTitle}>
                                    <p>Abhinav</p>
                                    <p>45 seconds ago</p>
                                    <div>test</div>
                                </div>
                            </div>
                            <div className={styles.commentHeaderFooter}>
                                <span>0 Replies &nbsp;</span>
                                <span>| &nbsp;</span>
                                <span>Reply</span>
                            </div>
                        </div>
                    </CommentCardSection>
            </div>
        </div>
    )
}