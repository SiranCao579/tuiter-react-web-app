import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faHashtag,
    faBell,
    faEnvelope,
    faBookmark,
    faList,
    faUser,
    faEllipsisH,
    faTag
} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";



const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="/tuiter/home" className="list-group-item">
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faTwitter} size={"lg"} color="#1DA1F2"/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3"></div>
                </div>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faHome} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Home</div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faHashtag} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Explore</div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faTag} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Labs</div>
                </div>
            </Link>
            <Link to="" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faBell} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Notifications</div>
                </div>
            </Link>
            <Link to="" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faEnvelope} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Messages</div>
                </div>
            </Link>
            <Link to="" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faBookmark} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Bookmarks</div>
                </div>
            </Link>
            <Link to="" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faList} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Lists</div>
                </div>
            </Link>
            <Link to="" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faUser} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">Profile</div>
                </div>
            </Link>
            <Link to="" className={`list-group-item ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-1"><FontAwesomeIcon icon={faEllipsisH} size={"lg"}/></div>
                    <div className="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">More</div>
                </div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;