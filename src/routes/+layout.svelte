<script>
  import "../app.css";
  import LightDarkMode from "../components/ui/LightDarkMode.svelte";

  export let dates = [];

  function getDateString(date, daysToAdd) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return `${
      newDate.getMonth() + 1
    }/${newDate.getDate()}/${newDate.getFullYear()}`;
  }
</script>

<div class="p-8 relative font-roboto">
  <div class="w-full text-right">
    <!-- <LightDarkMode /> -->
  </div>
  <slot />
  <div class="w-full text-center mt-8">
    <div class="w-full flex justify-center">
      <a href="https://github.com/wmiz/adonis-protocol" target="_blank">
        <img
          src="/svg/github-mark-white.svg"
          alt="Github Logo"
          height="25"
          width="25"
          class="m-2"
        /></a
      >
    </div>
    <a href="https://github.com/wmiz/adonis-protocol" target="_blank"
      ><p class="italic text-xs underline">wmiz on GitHub</p></a
    >
    <a href="https://www.skool.com/adonis-gang" target="_blank"
      ><p class="text-xs mt-2">Hamza's Adonis Gang on Skool</p></a
    >
  </div>
</div>
