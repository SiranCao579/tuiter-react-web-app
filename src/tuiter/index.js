import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import Nav from "../nav";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import Labs from "../labs";

function Tuiter() {
    return (
        <div className="container mt-2">
            <Nav/>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                    <div className="d-grid mt-2">
                        <a href="#" className="btn btn-primary btn-block rounded-pill">Tuit</a>
                    </div>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route index    element={<ExploreComponent/>}/>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                    <div>
                        <div className="d-flex justify-content-start mt-3">
                            <div className="text-secondary me-2">Term of Service</div>
                            <div className="text-secondary me-2">Privacy Policy</div>
                            <div className="text-secondary">Cookie Policy</div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="text-secondary me-2">Accessibility</div>
                            <div className="text-secondary me-2">Ads info</div>
                            <div className="text-secondary">More...</div>
                        </div>
                        <div className="text-secondary"><span><FontAwesomeIcon icon={faCheckSquare}/> 2023 Twitter, Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tuiter