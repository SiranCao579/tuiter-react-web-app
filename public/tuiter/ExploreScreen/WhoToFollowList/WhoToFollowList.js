import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item fw-bold border-0" style="font-size: 20px;">Who to follow</li>
                ${who.map(w => {return(WhoToFollowListItem(w));}).join('')}
                <li class="list-group-item border-0">
                    <div class="mt-2 mb-2" style="color: #1DA1F2">Show more</div>
                </li>
            </ul>
            <div>
                <div class="d-flex justify-content-start mt-3">
                    <div class="text-secondary me-2">Term of Service</div>
                    <div class="text-secondary me-2">Privacy Policy</div>
                    <div class="text-secondary">Cookie Policy</div>
                </div>
                <div class="d-flex justify-content-start">
                    <div class="text-secondary me-2">Accessibility</div>
                    <div class="text-secondary me-2">Ads info</div>
                    <div class="text-secondary">More...</div>
                </div>
                <div class="text-secondary"><span><i class="fa fa-check-square"></i> 2023 Twitter, Inc.</span></div>
            </div>
`); }
export default WhoToFollowList;
