<script>
  import ColumnTitle from "../components/grid/ColumnTitle.svelte";
  import DateRow from "../components/grid/DateRow.svelte";

  let currDate = new Date();
  let dates = Array.from({ length: 3 }, (_, i) => getDateString(currDate, i));

  function getDateString(date, daysToAdd) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return `${
      newDate.getMonth() + 1
    }/${newDate.getDate()}/${newDate.getFullYear()}`;
  }

  function addDate() {
    dates = [...dates, getDateString(currDate, dates.length)];
  }
</script>

<div class="flex w-full justify-center mb-7">
  <div class="w-1/6"></div>
  <div class="w-5/6 flex justify-center gap-2 mr-2">
    <img
      src="/png/right-arm.png"
      alt=""
      height="48"
      width="60"
      style="transform: scaleX(-1);"
    />
    <h1 class="text-6xl text-center font-anton">Adonis Protocol</h1>
    <img src="/png/right-arm.png" alt="" height="48" width="60" />
  </div>
</div>

<div class="flex w-full justify-between text-center gap-4">
  <div class="w-1/6"></div>
  <ColumnTitle title="Cold Shower"></ColumnTitle>
  <ColumnTitle title="Meditation"></ColumnTitle>
  <ColumnTitle title="Gratitude"></ColumnTitle>
  <ColumnTitle title="Eat the Frog"></ColumnTitle>
  <ColumnTitle title="Adonis Workout"></ColumnTitle>
</div>
{#each dates as date}
  <DateRow {date}></DateRow>
{/each}

<div class="flex w-full justify-between text-center gap-4">
  <div class="w-1/6"></div>
  <button class="btn btn-neutral w-5/6" on:click={addDate}>(+) Add Date</button>
</div>
