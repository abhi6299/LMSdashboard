import style from "./feeds.module.css"
import styled from "styled-components"



const Box = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:100vw;
height:100vh;
position:fixed;
top:0;
background-color: rgba(211, 211, 211, 0.5); /* Change the color values and alpha (opacity) value as needed */
visibility: ${props => (props.present? "visible": "hidden")};
`

export default function SearchBox(props){
    // console.log(props);
    return (
        <Box present={props.present}>
            <div className={style.searchContainer}>
                <div className={style.searchHeader}>
                    <div className={style.searchHeaderImage}>
                        <img src="https://d2s9pyuyxqivbc.cloudfront.net/profile/Avtar2.png" alt="Icon"></img>
                    </div>
                    <div className={style.searchHeaderTitle}>
                        <p>Abhinav</p>
                        <p>Posting on your feed</p>
                    </div>
                </div>
                <div className={style.searchBody}>
                        <textarea placeholder="Share your thoughts and knowledge here"></textarea>
                </div>
                <div className={style.searchBottom}>
                    <div className={style.searchAttachment}>
                        <div className={style.searchPicture}>
                            <img src="picture.svg"></img>
                        </div>
                        <div className={style.searchPicture}>
                            <img src="link.svg"></img>
                        </div>
                        <div className={style.searchPicture}>
                            <img src="video.svg"></img>
                        </div>
                        <div className={style.searchPicture}>
                            <img src="document.svg"></img>
                        </div>
                    </div>
                    <hr className={style.hr}/>
                    <div className={style.searchFooter}>
                        <button type="submit" onClick={props.handleRemove}>Cancel</button>
                        <button type="submit">Post</button>
                    </div>
                </div>
                <div className={style.cross} onClick={props.handleRemove}>
                        <img src="cross.svg" onClick={props.handleRemove}></img>
                </div>
            </div>
        </Box>
    )
}