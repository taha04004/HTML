// Load header and footer from separate files
document.addEventListener('DOMContentLoaded', () => {
  fetch('components/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      setupThemeToggle();  // Ensure toggle works even after dynamic load
    });

  fetch('components/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});

// Move theme toggle code into a function so it works after header is loaded
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = 'Switch to Light Mode';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
      } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = 'Switch to Light Mode';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            toggleBtn.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const blogList = document.getElementById('blog-list');

  // Only run this if the blog section exists
  if (blogList) {
    fetch('data/posts.json')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('blog-post');
          postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
            <hr class="section-divider" />
          `;
          blogList.appendChild(postElement);
        });
      })
      .catch(error => console.error('Error loading blog posts:', error));
  }
});
