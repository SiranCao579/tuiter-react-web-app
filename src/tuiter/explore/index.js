import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <div className="list-group">
            <div className="list-group-item border-bottom-0">
                <div className="row mt-2">
                    <div className="col-11 position-relative">
                        <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5"/>
                        <i className="bi bi-search position-absolute wd-search-input-icon"></i>
                    </div>
                    <div className="col-1">
                        <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"></i>
                    </div>
                </div>
            </div>
            <div className="list-group-item border-top-0 bg-transparent">
                <ul className="nav justify-content-between">
                    <li className="nav-item">
                        <a className="nav-link fw-bold wd-selected" href="#">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold text-dark" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold text-dark" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold text-dark" href="#">Sports</a>
                    </li>
                    <li className="d-none nav-item d-md-block">
                        <a className="nav-link fw-bold text-dark" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div className="list-group-item border-top-0 border-bottom-0 p-0">
                <img className="img-fluid"
                     src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-01/australian-open-2022-011422_rp7ywi9r9nu71allc1prfz08s.jpg?itok=lXrUVnMN"/>
                    <div className="position-absolute bottom-0 text-white mb-2">
                        <div className="ms-2">Tennis Tournament · LIVE</div>
                        <h2 className="h2 ms-2">Australian Open 2023</h2>
                    </div>
            </div>

            <PostSummaryList/>
        </div>
    );
};
export default ExploreComponent;