function switchTab(n) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('tab-' + n).classList.add('active');
}

// Auto-load top picks when page loads
window.onload = function() {
  populateTopPicks();
  console.log('%c🪐 Saturn Research initialized — ready to hunt 5x-80x gems', 'color:#c026d3; font-size:1.2rem');
};
