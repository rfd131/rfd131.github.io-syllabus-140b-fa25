<!-- navigation.js -->
<script>
/**
 * Math 140B Navigation Components
 * This file contains the shared navigation HTML and functionality
 */

// Navigation data structure
const navigationData = {
    mainNav: [
        {
            title: "Overview",
            href: "index.html",
            dropdown: [
                { title: "Welcome", href: "index.html#welcome" },
                { title: "Course Overview", href: "index.html#course-overview" }
            ]
        },
        {
            title: "Instructors",
            href: "instructors.html",
            dropdown: [
                { title: "Russ deForest", href: "instructors.html#russ-deforest" },
                { title: "Sam Fuller", href: "instructors.html#sam-fuller" },
                { title: "Ashley Pallone", href: "instructors.html#ashley-pallone" },
                { title: "Jan Reimann", href: "instructors.html#jan-reimann" },
                { title: "Michael Steward", href: "instructors.html#michael-steward" },
                { title: "Sam Vancini", href: "instructors.html#sam-vancini" },
                { title: "Office Hours", href: "instructors.html#office-hours" }
            ]
        },
        {
            title: "Class Times and Locations",
            href: "class-times.html",
            dropdown: [
                { title: "MWF Classes", href: "class-times.html#mwf-classes" },
                { title: "Tuesday Recitations", href: "class-times.html#tuesday-recitations" },
                { title: "LA Office Hours", href: "class-times.html#la-office-hours" }
            ]
        },
        {
            title: "Course Materials",
            href: "materials.html",
            dropdown: [
                { title: "Textbooks", href: "materials.html#textbooks" },
                { title: "Online Resources", href: "materials.html#online-resources" },
                { title: "Canvas Materials", href: "materials.html#canvas" }
            ]
        },
        {
            title: "Learning Targets",
            href: "learning-targets.html",
            dropdown: [
                { title: "Learning Targets and Quiz Sessions", href: "learning-targets.html" },
                { title: "List of Learning Targets", href: "https://docs.google.com/document/d/1xH-NffeL-NXhjz-lYjF5E8q2tQYvWcCNPKukSQMfelY/edit?usp=sharing", external: true },
                { title: "Learning Target FAQ", href: "learning-targets.html#faq" }
            ]
        },
        {
            title: "Writing Projects",
            href: "writing-projects.html",
            dropdown: [
                { title: "Overview", href: "writing-projects.html#overview" },
                { title: "Schedule", href: "writing-projects.html#schedule" },
                { title: "Grading Criteria", href: "writing-projects.html#grading" },
                { title: "Revisions", href: "writing-projects.html#revisions" }
            ]
        },
        {
            title: "How Your Grade is Determined",
            href: "grading.html",
            dropdown: [
                { title: "Grading Overview", href: "grading.html#overview" },
                { title: "Final Grade Table", href: "grading.html#final-grades" },
                { title: "Experience Points", href: "grading.html#xp" },
                { title: "XP Modifications", href: "grading.html#modifications" },
                { title: "Math 197 Option", href: "grading.html#math197" }
            ]
        },
        {
            title: "Course Policies",
            href: "policies.html",
            dropdown: [
                { title: "Academic Integrity", href: "policies.html#academic-integrity" },
                { title: "Attendance", href: "policies.html#attendance" },
                { title: "Make-up Policy", href: "policies.html#makeup" },
                { title: "Disability Accommodation", href: "policies.html#disability" }
            ]
        },
        {
            title: "Getting Help!",
            href: "help.html",
            dropdown: [
                { title: "Instructor Office Hours", href: "help.html#office-hours" },
                { title: "LA Office Hours", href: "help.html#la-hours" },
                { title: "Free Tutoring", href: "help.html#tutoring" },
                { title: "Study Tips", href: "help.html#study-tips" }
            ]
        },
        {
            title: "Student Resources",
            href: "resources.html",
            dropdown: [
                { title: "Counseling Services", href: "resources.html#counseling" },
                { title: "Academic Support", href: "resources.html#academic-support" },
                { title: "Technology Resources", href: "resources.html#technology" },
                { title: "Health & Wellness", href: "resources.html#wellness" }
            ]
        }
    ],
    quickLinks: [
        { 
            icon: "📊", 
            title: "How Your Grade is Determined", 
            href: "grading.html" 
        },
        { 
            icon: "📋", 
            title: "Learning Target List", 
            href: "https://docs.google.com/document/d/1xH-NffeL-NXhjz-lYjF5E8q2tQYvWcCNPKukSQMfelY/edit?usp=sharing",
            external: true
        },
        { 
            icon: "📝", 
            title: "Make-up Quiz Policy", 
            href: "policies.html#makeup" 
        },
        { 
            icon: "🕐", 
            title: "Shared Office Hours", 
            href: "instructors.html#office-hours" 
        },
        { 
            icon: "👥", 
            title: "LA Community Learning Sessions", 
            href: "help.html#la-hours" 
        }
    ],
    importantDates: [
        "First Day: Aug 25",
        "Midterm 1: Oct 2",
        "Midterm 2: Nov 6",
        "Final Exam: TBD"
    ]
};

/**
 * Generate the sidebar navigation HTML
 * @param {string} currentPage - The current page filename to highlight
 */
function generateSidebarNav(currentPage = '') {
    let html = `
        <nav class="sidebar-navigation" role="navigation" aria-label="Syllabus sections">
            <h2>Syllabus Sections</h2>
            <ul>`;
    
    navigationData.mainNav.forEach(item => {
        const isCurrentPage = item.href === currentPage;
        html += `
                <li class="nav-item${isCurrentPage ? ' current-page' : ''}">
                    <a href="${item.href}">${item.title} <span class="dropdown-arrow">▼</span></a>`;
        
        if (item.dropdown && item.dropdown.length > 0) {
            html += `
                    <div class="dropdown-menu">`;
            item.dropdown.forEach(subItem => {
                const external = subItem.external ? ' target="_blank" rel="noopener noreferrer"' : '';
                html += `
                        <a href="${subItem.href}"${external}>${subItem.title}</a>`;
            });
            html += `
                    </div>`;
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
 * Initialize navigation functionality
 */
function initializeNavigation() {
    // Add dropdown functionality
    document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const link = item.querySelector('a');
            
            link.addEventListener('click', function(e) {
                const dropdown = item.querySelector('.dropdown-menu');
                if (dropdown) {
                    if (e.target === link || e.target.parentElement === link) {
                        e.preventDefault();
                        
                        // Close other dropdowns
                        navItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        item.classList.toggle('active');
                    }
                }
            });
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-item')) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
        
        // Handle keyboard navigation
        navItems.forEach(item => {
            const link = item.querySelector('a');
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    const dropdown = item.querySelector('.dropdown-menu');
                    if (dropdown) {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                }
            });
        });
    });
}

/**
 * Insert navigation into the page
 * Call this function in each page to add the navigation
 * @param {string} currentPage - The current page filename
 */
function insertNavigation(currentPage) {
    // Find the content-wrapper element
    const contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
        // Insert sidebar nav at the beginning
        contentWrapper.insertAdjacentHTML('afterbegin', generateSidebarNav(currentPage));
        
        // Insert quick links at the end
        contentWrapper.insertAdjacentHTML('beforeend', generateQuickLinks());
        
        // Initialize functionality
        initializeNavigation();
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateSidebarNav,
        generateQuickLinks,
        insertNavigation,
        navigationData
    };
}
</script>
