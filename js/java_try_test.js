// Extract query parameters
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Dummy data for blog posts
const blogPosts = [
    {
        id: "1",
        title: "Social Media Success: Pro Strategies for You",
        date: "30 Jun, 2023",
        author: "Admin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum..."
    },
    {
        id: "2",
        title: "Web Design Essentials for Optimal User Experience",
        date: "30 Jun, 2023",
        author: "Admin",
        content: "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus..."
    },
    {
        id: "3",
        title: "Digital Branding Mastery: Your Ultimate Guide",
        date: "30 Jun, 2023",
        author: "Admin",
        content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam..."
    }
];

// Load blog details based on ID
document.addEventListener('DOMContentLoaded', () => {
    const blogId = getQueryParam('id');
    if (blogId) {
        const blogPost = blogPosts.find(post => post.id === blogId);
        if (blogPost) {
            document.getElementById('blog-title').textContent = blogPost.title;
            document.getElementById('blog-date').textContent = blogPost.date;
            document.getElementById('blog-author').textContent = blogPost.author;
            document.getElementById('blog-content').textContent = blogPost.content;
        } else {
            document.getElementById('blog-details').textContent = "Blog post not found.";
        }
    }
});
