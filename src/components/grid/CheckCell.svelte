<script>
  let checked = "";

  function toggleCheckBox() {
    checked = checked === "checked" ? "" : "checked";
    // this.classList.toggle("checkbox-success");
  }
</script>

<div class="w-1/6 text-2xl py-4 rounded-md justify-center flex">
  <input
    type="checkbox"
    {checked}
    class="checkbox checkbox-md"
    on:click={toggleCheckBox}
  />
</div>
