<script>
  // Store for the theme
  let theme = "dark";

  // Function to toggle the theme
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    document.querySelector("html").dataset.theme = theme;
  }
</script>

<input type="checkbox" class="toggle" checked on:click={toggleTheme} />
