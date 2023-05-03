document.addEventListener('DOMContentLoaded', function () {
  const homeContent = `
  <h2>Welcome to the Buffalo Bills Fan Blog</h2>
<p>Your source for the latest news, updates, and analysis on the Buffalo Bills. Click on the navigation links above to explore our content.</p>
<img src="buffalo-bills-stadium.jpg" alt="Buffalo Bills Stadium">`;

  const newsContent = `
    <!-- Add the content of the News section here -->
  `;

  const rosterContent = `
    <!-- Add the content of the Roster section here -->
  `;

  const scheduleContent = `
    <!-- Add the content of the Schedule section here -->
  `;

  const contentSection = document.getElementById('content');

  function loadContent(content) {
    contentSection.innerHTML = content;
  }

  // Load the Home content by default
  loadContent(homeContent);

  // Add click event listeners to the nav links
  document.getElementById('home').addEventListener('click', () => loadContent(homeContent));
  document.getElementById('news').addEventListener('click', () => loadContent(newsContent));
  document.getElementById('roster').addEventListener('click', () => loadContent(rosterContent));
  document.getElementById('schedule').addEventListener('click', () => loadContent(scheduleContent));
});
