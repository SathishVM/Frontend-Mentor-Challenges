const projects = [
  'article-preview-component',
  'base-apparel-coming-soon',
  'four-card-feature-section',
  'fylo-data-storage-component',
  'fylo-landing-page-with-two-column-layout',
  'huddle-landing-page',
  'huddle-page-with-feature',
  'ping-coming-soon-page',
  'single-price-grid-component',
  'social-media-dashboard-with-theme-switcher',
];

const list = document.getElementById('list');

projects.forEach((name, i) => {
  const listItem = document.createElement('li');

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
