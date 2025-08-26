// Enhanced dropdown with search and removable selected options
document.addEventListener('DOMContentLoaded', function() {
  const dropdownSelected = document.getElementById('dropdownSelected');
  const dropdownList = document.getElementById('dropdownList');
  const dropdownText = document.getElementById('dropdownText');

  // Add search box to dropdown
  const searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.placeholder = 'Search options...';
  searchBox.className = 'dropdown-search';
  dropdownList.insertBefore(searchBox, dropdownList.firstChild);

  // Filter options on search
  searchBox.addEventListener('input', function() {
    const val = searchBox.value.toLowerCase();
    dropdownList.querySelectorAll('.dropdown-option').forEach(function(label) {
      const text = label.textContent.toLowerCase();
      label.style.display = text.includes(val) ? 'flex' : 'none';
    });
  });

  // Open/close dropdown
  dropdownSelected.addEventListener('click', function(e) {
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    searchBox.value = '';
    searchBox.dispatchEvent(new Event('input'));
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdownSelected.contains(e.target) && !dropdownList.contains(e.target)) {
      dropdownList.style.display = 'none';
    }
  });

  // Render selected options with remove (cross) button
  function renderSelected() {
    const checked = Array.from(dropdownList.querySelectorAll('input[type="checkbox"]:checked'));
    dropdownText.innerHTML = '';
    if (checked.length === 0) {
      dropdownText.textContent = 'Select options';
      return;
    }
    checked.forEach(function(cb) {
      const span = document.createElement('span');
      span.className = 'selected-tag';
      span.textContent = cb.parentNode.textContent.trim();
      const remove = document.createElement('span');
      remove.className = 'remove-tag';
      remove.textContent = '×';
      remove.title = 'Remove';
      remove.onclick = function(e) {
        cb.checked = false;
        renderSelected();
      };
      span.appendChild(remove);
      dropdownText.appendChild(span);
    });
  }

  // Update selected tags on change
  dropdownList.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', renderSelected);
  });

  // Initial render
  renderSelected();
});

