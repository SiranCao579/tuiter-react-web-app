import NavigationSidebar from "../ExploreScreen/NavigationSidebar/index.js";
import PostSummaryList from "../ExploreScreen/PostSummaryList/PostSummaryList.js";
import PostList from "./PostList.js";
function homeComponent() {
    $('#wd-home').append(`
       <div class="row mt-2">
           <a class="mb-2" href="../navigation.html">Back</a>
           <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('Home')}
           </div>
           <div class="col-10 col-lg-7 col-xl-6">
                <div class="list-group">${PostList()}</div>
           </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <div class="list-group">
                    <div class="list-group-item fw-bold bg-transparent border-bottom-0" style="font-size: 20px;">What's happpening</div>
                    ${PostSummaryList()}
                </div>
           </div>
      </div>
   `);
}

$(homeComponent);