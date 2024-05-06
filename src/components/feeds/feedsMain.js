import LeftFeedContainer from "./leftFeedContainer";
import MiddleFeedContainer from "./middleFeedContainer";
import RightFeedContainer from "./rightFeedContainer";
import Chat from "../../chat";
import SearchBox from "./searchBox";
import React, { useState } from 'react';


export default function FeedsMain() {
    const [search, setSearch] = useState(false); // Initialize search state

    const handleClick = () => {
        setSearch(true); // Update search state to true
    }
    const handleRemove = () => {
        setSearch(false);
    }

    return (
        <div className="feedContainer" style={style.feedContainer}>
            <LeftFeedContainer/>
            <MiddleFeedContainer handle={handleClick}/>
            <RightFeedContainer/>
            <Chat/>
            <SearchBox present={search} handleRemove={handleRemove}/>
        </div>
    );
}

const style = {
    feedContainer:{
        backgroundColor:"#edf7f9",
        display:"flex",
        justifyContent:"space-around",
        border:"2px solid green",
        height:"fit-content",
        paddingTop:"2%",
        marginTop:"10vh", 
        // overflowY:"scroll",
    }
}