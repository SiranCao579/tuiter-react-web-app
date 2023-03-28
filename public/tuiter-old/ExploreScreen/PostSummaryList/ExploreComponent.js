import PostSummaryList from "./PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="list-group">
                <!-- search field and cog -->
                <div class="list-group-item border-top-0 border-bottom-0 bg-transparent">
                    <div class="row mt-2">
                        <div class="col position-relative">
                            <input id="search-input" class="rounded-pill form-control search-input pt-2 pb-2 border-0 bg-dark" type="search" placeholder="Search Tuiter">
                            <label for="search-input" class="fa fa-search fa-1x search-input-icon" style="color: dimgray"></label>
                        </div>
                        <div class="col-1 mt-2">
                            <i class="fa fa-cog fa-lg"></i>
                        </div>
                    </div>
                </div>
                
                <!-- nav bar and tabs -->
                <div class="list-group-item border-top-0 bg-transparent">
                    <ul class="nav justify-content-between">
                        <li class="nav-item">
                            <a class="nav-link fw-bold text-primary" style="border-bottom: 4px solid #1DA1F2" href="#">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold text-dark" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold text-dark" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold text-dark" href="#">Sports</a>
                        </li>
                        <li class="d-none nav-item d-md-block">
                            <a class="nav-link fw-bold text-dark" href="#">Entertainment</a>
                        </li>
                    </ul>
                </div>
                
                <!-- image with overlaid text -->
                <div class="list-group-item border-top-0 border-bottom-0 p-0">
                    <img class="img-fluid" src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-01/australian-open-2022-011422_rp7ywi9r9nu71allc1prfz08s.jpg?itok=lXrUVnMN">
                    <div class="position-absolute bottom-0 text-white mb-2">
                        <div class="ms-2">Tennis Tournament · LIVE</div>
                        <h2 class="h2 ms-2">Australian Open 2023</h2>
                    </div>
                </div>
                
                ${PostSummaryList()}
            </div>
    `);
}
export default ExploreComponent;
