/**
 * Theme Toggle Script
 * Handles light/dark mode switching with system preference detection
 * and localStorage persistence.
 */
(function() {
  'use strict';

  const STORAGE_KEY = 'theme-preference';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  /**
   * Get the user's theme preference
   * Priority: localStorage > system preference
   */
  function getThemePreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT;
  }

  /**
   * Apply theme to the document
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateCodeTheme(theme);
    updateToggleButton(theme);
  }

  /**
   * Switch the code syntax theme
   */
  function updateCodeTheme(theme) {
    const codeThemeLink = document.getElementById('code-theme');
    if (!codeThemeLink) return;

    const baseurl = codeThemeLink.getAttribute('data-baseurl') || '';
    const newTheme = theme === THEME_DARK ? 'gruvbox.css' : 'github.css';
    codeThemeLink.href = baseurl + '/css/rouge/' + newTheme;
  }

  /**
   * Update toggle button icon visibility
   */
  function updateToggleButton(theme) {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;

    const sunIcon = toggleBtn.querySelector('.sun-icon');
    const moonIcon = toggleBtn.querySelector('.moon-icon');

    if (sunIcon && moonIcon) {
      if (theme === THEME_DARK) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || getThemePreference();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  }

  /**
   * Initialize theme toggle functionality
   */
  function init() {
    // Apply initial theme
    const theme = getThemePreference();
    applyTheme(theme);

    // Set up toggle button
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function(e) {
      // Only auto-switch if user hasn't set a manual preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose toggle function globally for inline handlers if needed
  window.toggleTheme = toggleTheme;
})();
