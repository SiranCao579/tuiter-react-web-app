const PostItem = (post) => {
    return (`
              <div class="list-group-item bg-transparent">
                  <div class="row mt-2">
                      <div class="col-1 ms-1">
                          <img src="./images/${post.userImage}.jpg" class="rounded-pill user-image">
                      </div>
                      <div class="col ms-3">
                          <div class="d-flex justify-content-between">
                              <div class="flex-column">
                                <b>${post.userName}</b><i class="fa fa-check-circle ms-2 me-1"></i> 
                                <span class="text-dark">@${post.userLabel} · ${post.postTime}</span>
                              </div>
                              <div class="flex-column"><a class="text-white" href="#"><i class="fa fa-ellipsis-h fa-lg text-secondary"></i></a></div>
                          </div>
                          <div>${post.postDetail}</div>
                          <div class="card mt-2 bg-transparent border-secondary">
                              <img class="img-fluid ${post.detailTitle === '' ? 'card-img' : 'card-img-top'}" src="./images/${post.detailImage}.jpg">
                              ${post.detailTitle === '' ? '' :
                                                                `<div class="card-body">
                                                                    <h6 class="card-title">${post.detailTitle}</h6>
                                                                    <p class="card-text text-dark">
                                                                        ${post.detailOverview}
                                                                        <br/>
                                                                        <a class="text-secondary" href="#"><i class="fa fa-link mt-2"></i> ${post.detailLink}</a>
                                                                    </p>
                                                                </div>`
                                }
                          </div>
                          <div class="row m-1 mt-3 mb-2">
                              <div class="col text-secondary"><i class="fa fa-comment"></i><span class="ms-md-3">${post.comment}</span></div>
                              <div class="col text-secondary"><i class="fa fa-retweet"></i><span class="ms-md-3">${post.retuit}</span></div>
                              <div class="col text-secondary"><i class="fa fa-heart"></i><span class="ms-md-3">${post.likes}</span></div>
                              <div class="col text-secondary"><i class="fa fa-share"></i><span class="ms-md-3"></span></div>
                          </div>
                      </div>
                  </div>
              </div>
    `);
};

export default PostItem;