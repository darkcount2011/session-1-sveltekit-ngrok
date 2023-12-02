<script>
  import { Toast, initializeStores } from "@skeletonlabs/skeleton";
  import ToastBody from "$lib/toaster/toastBody.svelte";
  import { toastMessage } from "$lib/toaster/toastStore";
  import Heading from "./heading.svelte";

  import "../app.pcss";

  initializeStores();
</script>

<Heading />
<Toast />
<ToastBody message={$toastMessage} />

<slot />
