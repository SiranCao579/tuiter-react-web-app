const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="col">
                <img class="logo-image" src="./images/${who.avatarIcon}" style="float:left">
                <div class="ms-lg-0 ms-xl-2 ms-xxl-3" style="float: left">
                    <div class="fw-bold">${who.userName}<span class="fa fa-check-circle ms-2" style="color: #ffcc00"></span></div>
                    <div class="text-dark">@${who.handle}</div>
                </div>
            </div>
            <div class="position-absolute end-0 me-3">
                <button type="button" class="btn btn-primary rounded-5 mt-1 ps-1 pe-1 pt-1 pb-1 ps-xl-3 pe-xl-3 ps-xxl-4 pe-xxl-4" style="font-size: 15px">Follow</button>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;