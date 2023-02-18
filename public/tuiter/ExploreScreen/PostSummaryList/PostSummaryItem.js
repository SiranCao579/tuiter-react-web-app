const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item d-flex justify-content-between border-top-0 border-bottom-0 bg-transparent">
            <div class="flex-column m-1 me-2">
                ${post.topic === '' ? '' : `<div class="text-dark">${post.topic}</div>`}
                ${post.userName === '' ? '' : `<div>
                                                <b>${post.userName}</b>
                                                <span class="fa fa-check-circle ms-2"></span>
                                                <span class="text-dark"> - ${post.time}</span>
                                               </div>`}
                ${post.title === '' ? '' : `<div><b>${post.title}</b></div>`}
                ${post.tweets === '' ? '' : `<div class="text-dark">${post.tweets} Tweets </div>`}
            </div>
            <div class="flex-column">
                ${post.image === '' ? '<a class="text-white" href="#"><i class="fa fa-ellipsis-h fa-lg mt-3 text-dark"></i></a>'
                                    : `<img class="image-style m-1 rounded-2" src="./images/${post.image}">`}
            </div>
        </div>
    `);
}

export default PostSummaryItem;