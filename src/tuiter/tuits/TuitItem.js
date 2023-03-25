import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEllipsisH, faLink,} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./TuitStats";
const TuitItem = (
    {
        post = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return(
        <div className="list-group-item bg-transparent">
            <div className="row mt-2">
                <div className="col-1 ms-1">
                    <img src={`/images/${post.image}.jpg`} className="rounded-pill user-image"/>
                </div>
                <div className="col ms-3">
                    <div className="d-flex justify-content-between">
                        <div className="flex-column">
                            <b>{post.userName}</b><FontAwesomeIcon icon={faCheckCircle} className="ms-1 me-2"/>
                            <span className="text-dark">@ {post.topic} · {post.time}</span>
                        </div>
                        <div className="flex-column"><a className="text-white" href="#"><FontAwesomeIcon icon={faEllipsisH} size={"lg"}/></a></div>
                    </div>
                    <div>{post.tuit}</div>
                    <TuitStats key={post._id} post={post}/>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;