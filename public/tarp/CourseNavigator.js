function CourseNavigator(highlight) {
    const sections = [
        {label: 'Home', href: 'index.html'},
        {label: 'Modules', href: 'modules.html'},
        {label: 'Piazza', href: '#'},
        {label: 'Zoom', href: '#'},
        {label: 'Assignments', href: 'Assignments.html'},
        {label: 'Quizzes', href: 'quizzes.html'},
        {label: 'Grade', href: 'gradebook.html'},
        {label: 'people', href: 'people.html'},
        {label: 'Announcement', href: '#'},
        {label: 'Pages', href: '#'},
        {label: 'Discussions', href: '#'},
        {label: 'Syllabus', href: '#'}

    ]
    return(`
        <div class="list-group">
            ${sections.map(section => `
                <a class="list-group-item ${highlight === section.label ? 'active' : ''}" 
                    href="${section.href}">${section.label}</a>`).join('')}
        </div>
    `);
}
export default CourseNavigator;