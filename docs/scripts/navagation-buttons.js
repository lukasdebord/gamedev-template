function toggleMenu(element) {
  // Find the closest dropdown-content within the clicked nav-element
  const dropdown = element.parentElement.querySelector('.dropdown-content');
  const arrow = element.querySelector('.nav-arrow');

  // Close other open dropdowns
  document.querySelectorAll('.dropdown-content').forEach((menu) => {
    if (menu !== dropdown) menu.style.display = 'none';
  });
  document.querySelectorAll('.nav-arrow').forEach((icon) => {
    if (icon !== arrow) icon.classList.remove('open');
  });

  // Toggle the selected dropdown menu
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    arrow.classList.remove('open');
  } else {
    dropdown.style.display = 'block';
    arrow.classList.add('open');
  }
}

function loadPage(sectionId) {
  const allSections = document.querySelectorAll('.page-content');

  allSections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = 'flex';
}