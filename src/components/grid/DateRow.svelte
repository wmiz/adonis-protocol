<script>
  import CheckCell from "./CheckCell.svelte";
  export let date;
</script>

<div class="flex w-full justify-between text-center items-center gap-4 my-2">
  <p class="w-1/6 italic text-lg">{date}</p>
  <CheckCell></CheckCell>
  <CheckCell></CheckCell>
  <CheckCell></CheckCell>
  <CheckCell></CheckCell>
  <CheckCell></CheckCell>
</div>
