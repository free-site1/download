// Toggle sidebar menu on/off
document.getElementById('menuIcon').addEventListener('click', function() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
  });
  
  // Close sidebar when clicking the close button
  document.getElementById('closeBtn').addEventListener('click', function() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.style.left = '-250px'; // Menutup sidebar
  });
  
  // Close sidebar when clicking outside of the sidebar
  document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('sideMenu');
    const menuIcon = document.getElementById('menuIcon');
    if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
      sideMenu.style.left = '-250px'; // Menutup sidebar jika klik di luar sidebar
    }
  });
  // Ambil semua elemen dengan kelas "menu-item"
const menuItems = document.querySelectorAll('.menu-item');

// Tambahkan event listener untuk setiap item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const link = item.getAttribute('data-link'); // Ambil URL dari data-link
    window.location.href = link; // Arahkan pengguna ke URL
  });
});
