import React from "react";
import './index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faComment,
    faEllipsisH,
    faHeart,
    faLink,
    faRetweet,
    faShare
} from "@fortawesome/free-solid-svg-icons";

const HomePostItem = (
    {
        post = {
                        "userImage": "elon",
                        "userName": "Elon Musk",
                        "userLabel": "elonmusk",
                        "postTime": "23h",
                        "postDetail": "test post detail",
                        "detailImage": "elonPost",
                        "detailTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                        "detailOverview": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
                        "detailLink": "netflix.com",
                        "comment": "4.2K",
                        "retuit": "3.5K",
                        "likes": "37.5K"

        }
    }
) => {
    return (
        <div className="list-group-item bg-transparent">
            <div className="row mt-2">
                <div className="col-1 ms-1">
                    <img src={`/images/${post.userImage}.jpg`} className="rounded-pill user-image"/>
                </div>
                <div className="col ms-3">
                    <div className="d-flex justify-content-between">
                        <div className="flex-column">
                            <b>{post.userName}</b><FontAwesomeIcon icon={faCheckCircle} className="ms-1 me-2"/>
                            <span className="text-dark">@{post.userLabel} · {post.postTime}</span>
                        </div>
                        <div className="flex-column"><a className="text-white" href="#"><FontAwesomeIcon icon={faEllipsisH} size={"lg"}/></a></div>
                    </div>
                    <div>{post.postDetail}</div>
                    <div className="card mt-2 bg-transparent">
                        <img className={`img-fluid ${post.detailTitle === '' ? 'card-img' : 'card-img-top'}`} src={`/images/${post.detailImage}.jpg`}/>
                        {post.detailTitle === '' ? '' :
                            <div className="card-body">
                                <h6 className="card-title">{post.detailTitle}</h6>
                                <p className="card-text text-dark">
                                    {post.detailOverview}
                                    <br/>
                                    <a className="text-secondary" href="#"><FontAwesomeIcon icon={faLink}/> {post.detailLink}</a>
                                </p>
                            </div>
                        }
                    </div>
                    <div className="row m-1 mt-3 mb-2">
                        <div className="col text-secondary"><FontAwesomeIcon icon={faComment}/><span
                            className="ms-md-3">{post.comment}</span></div>
                        <div className="col text-secondary"><FontAwesomeIcon icon={faRetweet}/><span
                            className="ms-md-3">{post.retuit}</span></div>
                        <div className="col text-secondary"><FontAwesomeIcon icon={faHeart}/><span
                            className="ms-md-3">{post.likes}</span></div>
                        <div className="col text-secondary"><FontAwesomeIcon icon={faShare}/><span
                            className="ms-md-3"></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePostItem;