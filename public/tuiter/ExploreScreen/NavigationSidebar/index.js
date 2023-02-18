const NavigationSidebar = (active) => {
    const sections = [
        {label: '', icon:'fab fa-twitter', href: '../HomeScreen/index.html', color: '#1DA1F2'},
        {label: 'Home', icon:'fa fa-home', href: '../HomeScreen/index.html', color: ''},
        {label: 'Explore', icon:'fa fa-hashtag', href: '../ExploreScreen/index.html', color: ''},
        {label: 'Notification', icon:'fa fa-bell', href: '#', color: ''},
        {label: 'Messages', icon:'fa fa-envelope', href: '#', color: ''},
        {label: 'Bookmarks', icon:'fa fa-bookmark', href: '#', color: ''},
        {label: 'Top Articles', icon:'fa fa-fire-alt', href: '#', color: ''},
        {label: 'Profile', icon:'fa fa-user', href: '#', color: ''},
        {label: 'More', icon:'fa fa-ellipsis-h', href: '#', color: ''},
    ]
    return(`
            <div class="list-group">
                ${sections.map(section =>
                    `<a class="list-group-item border-0 ${active === section.label ? 'active' : ''}" href="${section.href}">
                        <div class="row mt-1 mb-1">
                            <div class="col-1"><i class="${section.icon} fa-lg" style="color: ${section.color}"></i></div>
                            <div class="d-done d-sm-none d-md-none d-lg-none d-xl-block col ms-3">${section.label}</div>
                        </div>
                    </a>`
                ).join('')}
            </div>
            <div class="d-grid mt-2">
             <a href="tuit.html" class="btn btn-primary btn-block rounded-pill">Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;
