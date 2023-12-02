<script>
  import StandardForm from "./standardForm.svelte";
  import { page } from "$app/stores";
  import { toastMessage } from "$lib/toaster/toastStore";

  $: console.log("page store", $page);

  $: {
    if (
      $page.form?.status == 200 &&
      $page.form?.toastMessage?.type == "positive"
    ) {
      const messageToSend = $page.form.toastMessage;

      $toastMessage = {
        type: messageToSend.type,
        message: messageToSend.message,
      };
    } else if ($page.form?.status !== 200) {
      $toastMessage = {
        type: "negative",
        message: "Something went wrong!",
      };
    }
  }
</script>

<StandardForm />
