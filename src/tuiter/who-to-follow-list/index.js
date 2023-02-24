import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item pt-3 pb-0"><h4>Who to follow</h4></li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem key={who._id} who={who}/>
                )
            }
            <li className="list-group-item">
                <div className="mt-2 mb-2 text-primary">Show more</div>
            </li>
        </ul>
    );
};

export default WhoToFollowList;