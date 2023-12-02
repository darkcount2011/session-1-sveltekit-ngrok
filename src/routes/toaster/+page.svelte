<script>
  // What do you need to import to get the toaster to work?

  import { toastMessage } from "$lib/toaster/toastStore";

  $: {
    if (count == 10) {
      $toastMessage = {
        type: "positive",
        message: "You have 10 toasts left!",
      };
    }
  }

  let count = 10;
</script>

<div class="grid place-items-center gap-20">
  <h1 class="text-5xl">Welcome to the toaster</h1>
  <div class="grid grid-flow-row gap-10 place-items-center">
    <div>
      <button class="btn variant-filled-tertiary"> Toast up! </button>
      <button class="btn variant-filled-success"> Toast down! </button>
    </div>
    <span class=" badge-icon">
      <!-- Make this a reactive number --> 10
    </span>
  </div>
</div>
