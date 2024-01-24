<script>
  export let title;

  let url_handle = title.toLowerCase().replace(/\s/g, "-");
</script>

<div class="w-1/6">
  <button
    class="w-full btn btn-outline text-lg btn-error text-white rounded-md"
  >
    <a href={url_handle}>
      {title}
    </a>
  </button>
</div>
