/**
 * Navigation Components for Math 140B Syllabus
 * This file contains functions to generate consistent navigation across all pages
 */

// Navigation data structure
const navigationData = {
    topNav: [
        {
            title: "Home",
            href: "index.html"
        },
        {
            title: "Instructors",
            href: "instructors.html",
            dropdown: [
                { title: "Russ deForest", href: "instructors.html#russ-deforest" },
                { title: "Sam Fuller", href: "instructors.html#sam-fuller" },
		{ title: "Sam Vancini", href: "instructors.html#sam-vancini" },
		{ title: "Jan Reimann", href: "instructors.html#jan-reimann" },
                { title: "Ashley Pallone", href: "instructors.html#ashley-pallone" },
                { title: "Michael Steward", href: "instructors.html#michael-steward" }
            ]
        },
        {
            title: "Class Schedule",
            href: "class-times.html",
            dropdown: [
                { title: "MWF Classes", href: "class-times.html#mwf-classes" },
                { title: "Tuesday Recitations", href: "class-times.html#tuesday-recitations" }
            ]
        },
        {
            title: "Course Materials",
            href: "materials.html",
            dropdown: [
                { title: "Textbooks", href: "materials.html#textbooks" },
                { title: "Canvas Resources", href: "materials.html#canvas" }
            ]
        },
        {
            title: "Learning Targets",
            href: "learning-targets.html",
            dropdown: [
                { title: "Overview", href: "learning-targets.html#overview" },
                { title: "How It Works", href: "learning-targets.html#how-it-works" },
                { title: "FAQ", href: "learning-targets.html#faq" }
            ]
        },
	{
            title: "Writing Projects",
            href: "writing-projects.html",
            dropdown: [
                { title: "Overview", href: "writing-projects.html#overview" },
                { title: "Schedule", href: "writing-projects.html#schedule" },
                { title: "Revisions", href: "writing-projects.html#revisions" }
            ]
        },
        {
            title: "How Your Grade is Determined",
            href: "grading.html",
            dropdown: [
                { title: "Overview", href: "grading.html#overview" },
		{ title: "Final Course Grades", href: "grading.html#final-grades" },
		{ title: "Experience Points", href: "grading.html#xp" },
                { title: "XP Modifications", href: "grading.html#modifiers" },
                { title: "Math 197", href: "grading.html#math197" }
            ]
        },
        {
            title: "Course Policies",
            href: "policies.html",
            dropdown: [
                { title: "Quiz Session Policies", href: "policies.html#quiz-exam-policies" },
                { title: "Midterms", href: "policies.html#midterm-section" },
		{ title: "Final Exam", href: "policies.html#final-section" },
                { title: "Academic Integrity", href: "policies.html#academic-integrity" },
		{ title: "Generative AI", href: "policies.html#ai-policy" },
		{ title: "Attendance", href: "policies.html#attendance" },
		{ title: "Late Work", href: "policies.html#late-work" },	
            ]
        },
        {
            title: "Getting Help",
            href: "help.html",
            dropdown: [
                { title: "Instructor Office Hours", href: "help.html#instructor-office-hours" },
                { title: "Common Office Hours", href: "help.html#common-office-hours" },
                { title: "LA Sessions", href: "help.html#la-sessions" },
                { title: "Guided Study Groups", href: "help.html#gsg" },
                { title: "Penn State Learning", href: "help.html#tutoring" }
            ]
        },
        {
            title: "Student Resources",
            href: "resources.html",
            dropdown: [
                { title: "Counseling Services", href: "resources.html#counseling" },
                { title: "Academic Support", href: "resources.html#academic-support" },
                { title: "Technology Resources", href: "resources.html#technology" },
            ]
        }
    ],
    sidebarNav: [
        { title: "Welcome & Overview", href: "index.html" },
        { title: "Instructors", href: "instructors.html" },
        { title: "Class Times & Locations", href: "class-times.html" },
        { title: "Course Materials", href: "materials.html" },
        { title: "Learning Targets", href: "learning-targets.html" },
	{ title: "Writing Projects", href: "writing-projects.html" },
        { title: "How Your Grade is Determined", href: "grading.html" },
        { title: "Course Policies", href: "policies.html" },
        { title: "Getting Help", href: "help.html" },
        { title: "Student Resources", href: "resources.html" }
    ],
    quickLinks: [
        { 
            icon: "📊", 
            title: "How Your Grade is Determined", 
            href: "grading.html" 
        },
        { 
            icon: "📋", 
            title: "Learning Targets Detailed List", 
            href: "https://docs.google.com/document/d/1xH-NffeL-NXhjz-lYjF5E8q2tQYvWcCNPKukSQMfelY/edit?usp=sharing",
            external: true
        },
	{ 
            icon: "📋", 
            title: "LT Quiz Schedule", 
            href: "quizschedule.html" 
        },
        { 
            icon: "📝", 
            title: "Make-up Quiz Policy", 
            href: "policies.html#makeup" 
        },
        { 
            icon: "🕐", 
            title: "Common Office Hours", 
            href: "instructors.html#office-hours" 
        },
        { 
            icon: "👥", 
            title: "LA Community Learning Sessions", 
            href: "help.html#la-sessions" 
        }
    ],
    importantDates: [
        "Regular Drop Deadline: Aug 30",
	"Midterm One: Tues, Sept 23",
	"Midterm Two: Wed, Oct 29",
        "Late Drop: Nov 8",
        "Finals Week: Dec 15-19"
    ]
};

/**
 * Generate the top navigation bar HTML
 * @param {string} currentPage - The current page filename to highlight
 */
function generateTopNav(currentPage = '') {
    let html = `
    <nav>
        <div class="nav-container">
            <ul class="nav-links">`;
    
    navigationData.topNav.forEach(item => {
        const isCurrentPage = item.href === currentPage;
        html += `
                <li class="nav-item${isCurrentPage ? ' current-page' : ''}">
                    <a href="${item.href}">${item.title}`;
        
        if (item.dropdown && item.dropdown.length > 0) {
            html += ` <span class="dropdown-arrow">▼</span></a>
                    <div class="dropdown-menu">`;
            item.dropdown.forEach(subItem => {
                html += `
                        <a href="${subItem.href}">${subItem.title}</a>`;
            });
            html += `
                    </div>`;
        } else {
            html += `</a>`;
        }
        html += `
                </li>`;
    });
    
    html += `
            </ul>
        </div>
    </nav>`;
    
    return html;
}

/**
 * Generate the sidebar navigation HTML
 * @param {string} currentPage - The current page filename to highlight
 */
function generateSidebarNav(currentPage = '') {
    // Add the CSS styles inline to ensure they're applied
    let html = `
        <style>
            /* CSS Variables */
            :root {
                --penn-state-blue: #001e44;
                --penn-state-navy: #041e42;
                --light-gray: #f5f5f5;
                --white: #ffffff;
            }
            
            /* Sidebar Navigation Styles */
            .sidebar-navigation {
                width: 280px;
                background-color: var(--light-gray);
                padding: 2rem 1rem;
                position: sticky;
                top: 0;
                height: 100vh;
                overflow-y: auto;
                border-right: 2px solid var(--penn-state-blue);
            }
            
            .sidebar-navigation h2 {
                font-size: 1.1rem;
                color: var(--penn-state-navy);
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 2px solid var(--penn-state-blue);
            }
            
            .sidebar-navigation ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            
            /* Navigation Items */
            .sidebar-navigation .nav-item {
                position: relative;
                margin-bottom: 0.25rem;
            }
            
            .sidebar-navigation .nav-item > a {
                color: var(--penn-state-blue);
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.5rem;
                border-radius: 4px;
                transition: background-color 0.3s ease;
                font-weight: 500;
                font-size: 0.95rem;
            }
            
            .sidebar-navigation .nav-item > a:hover, 
            .sidebar-navigation .nav-item > a:focus {
                background-color: var(--white);
                text-decoration: underline;
                outline: 2px solid var(--penn-state-blue);
                outline-offset: 2px;
            }
            
            .sidebar-navigation .nav-item.current-page > a {
                background-color: var(--penn-state-blue);
                color: var(--white);
            }
            
            .sidebar-navigation .dropdown-arrow {
                font-size: 0.8em;
                transition: transform 0.3s ease;
            }
            
            .sidebar-navigation .nav-item.active .dropdown-arrow {
                transform: rotate(180deg);
            }
            
            /* Dropdown Menus */
            .sidebar-navigation .dropdown-menu {
                display: none;
                background-color: var(--white);
                border: 1px solid #ddd;
                border-radius: 4px;
                margin-top: 4px;
                position: static;
                margin-left: 0.5rem;
                margin-top: 0.25rem;
                box-shadow: inset 0 0 4px rgba(0,0,0,0.1);
            }
            
            .sidebar-navigation .nav-item.active .dropdown-menu {
                display: block;
            }
            
            .sidebar-navigation .dropdown-menu a {
                display: block;
                padding: 0.5rem 1rem;
                color: #666;
                text-decoration: none;
                font-size: 0.9rem;
                transition: background-color 0.3s ease;
            }
            
            .sidebar-navigation .dropdown-menu a:hover {
                background-color: var(--light-gray);
            }
        </style>
        <nav class="sidebar-navigation" role="navigation" aria-label="Syllabus sections">
            <h2>Syllabus Sections</h2>
            <ul>`;
    
    navigationData.sidebarNav.forEach(item => {
        const isCurrentPage = item.href === currentPage;
        // Check if this item has dropdown content
        const hasDropdown = navigationData.topNav.find(navItem => navItem.href === item.href)?.dropdown;
        
        html += `
                <li class="nav-item${isCurrentPage ? ' current-page' : ''}">
                    <a href="${item.href}">${item.title}${hasDropdown ? ' <span class="dropdown-arrow">▼</span>' : ''}</a>`;
        
        // Add dropdown menu if exists
        if (hasDropdown) {
            const topNavItem = navigationData.topNav.find(navItem => navItem.href === item.href);
            if (topNavItem && topNavItem.dropdown) {
                html += `
                    <div class="dropdown-menu">`;
                topNavItem.dropdown.forEach(subItem => {
                    html += `
                        <a href="${subItem.href}">${subItem.title}</a>`;
                });
                html += `
                    </div>`;
            }
        }
        
        html += `
                </li>`;
    });
    
    html += `
            </ul>
        </nav>`;
    
    return html;
}


/**
 * Generate the quick links sidebar HTML
 */
function generateQuickLinks() {
    let html = `
    <aside class="quick-links" role="complementary" aria-label="Quick Links">
        <h2>Quick Links</h2>
        <ul>`;
    
    navigationData.quickLinks.forEach(link => {
        const external = link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
        html += `
            <li>
                <a href="${link.href}"${external}>
                    <span class="icon">${link.icon}</span>
                    ${link.title}
                </a>
            </li>`;
    });
    
    html += `
        </ul>
        
        <div class="important-dates-box">
            <h3>Important Dates</h3>
            <ul>`;
    
    navigationData.importantDates.forEach(date => {
        html += `
                <li>${date}</li>`;
    });
    
    html += `
            </ul>
        </div>
    </aside>`;
    
    return html;
}

/**
 * Initialize navigation on page load
 * Call this function with the current page filename
 */
function initializeNavigation(currentPage = '') {
    // Get the current page from URL if not provided
    if (!currentPage) {
        const path = window.location.pathname;
        currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    }
    
    // Insert top navigation if container exists
    const topNavContainer = document.getElementById('top-navigation');
    if (topNavContainer) {
        topNavContainer.innerHTML = generateTopNav(currentPage);
    }
    
    // Insert sidebar navigation if container exists
    const sidebarContainer = document.getElementById('sidebar-navigation');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = generateSidebarNav(currentPage);
    }
    
    // Insert quick links if container exists
    const quickLinksContainer = document.getElementById('quick-links-sidebar');
    if (quickLinksContainer) {
        quickLinksContainer.innerHTML = generateQuickLinks();
    }
}

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateTopNav,
        generateSidebarNav,
        generateQuickLinks,
        initializeNavigation,
        navigationData
    };
}
