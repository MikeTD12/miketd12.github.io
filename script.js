document.addEventListener('DOMContentLoaded', function () {
  const homeContent = `
  <h2>Welcome to the Buffalo Bills Fan Blog</h2>
<p>Your source for the latest news, updates, and analysis on the Buffalo Bills. Click on the navigation links above to explore our content.</p>
<img src="buffalo-bills-stadium.jpg" alt="Buffalo Bills Stadium">`;

  const newsContent = `
        <h2>Latest News</h2>
    <article>
      <h3>Josh Allen: The Future of the Buffalo Bills</h3>
      <p>Josh Allen, the star quarterback for the Buffalo Bills, has taken the NFL by storm since being drafted in 2018. With his powerful arm and exceptional athleticism, Allen has quickly become one of the league's top quarterbacks and a fan favorite in Buffalo.</p>
      <img src="josh-allen.jpg" alt="Josh Allen in action">
    </article>
    <article>
      <h3>Buffalo Bills' Offseason Moves: Strengthening the Roster</h3>
      <p>The Buffalo Bills made some significant offseason moves, bolstering their roster with key acquisitions and draft picks. With an eye on building a championship-caliber team, General Manager Brandon Beane and Head Coach Sean McDermott focused on addressing areas of need and adding depth to the roster.</p>
      <img src="bills-offseason.jpg" alt="Buffalo Bills players during offseason training">
    </article>
    <article>
      <h3>Sean McDermott: The Coach Behind the Bills' Resurgence</h3>
      <p>Since his arrival in 2017, head coach Sean McDermott has played a pivotal role in transforming the Buffalo Bills into a formidable NFL team. With a strong emphasis on culture, accountability, and attention to detail, McDermott has instilled a winning mentality in Buffalo that has resonated with players and fans alike.</p>
      <img src="sean-mcdermott.jpg" alt="Sean McDermott on the sidelines">
    </article>
  `;

  const rosterContent = `
      <h2>Buffalo Bills Roster</h2>
  <table>
    <thead>
      <tr>
        <th>Position</th>
        <th>Name</th>
        <th>Number</th>
        <th>College</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>QB</td>
        <td>Josh Allen</td>
        <td>17</td>
        <td>Wyoming</td>
      </tr>
      <tr>
        <td>RB</td>
        <td>Devin Singletary</td>
        <td>26</td>
        <td>Florida Atlantic</td>
      </tr>
      <tr>
        <td>WR</td>
        <td>Stefon Diggs</td>
        <td>14</td>
        <td>Maryland</td>
      </tr>
      <!-- Add more players as needed -->
    </tbody>
  </table>
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
