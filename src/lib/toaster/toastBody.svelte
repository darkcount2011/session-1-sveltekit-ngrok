<script>
  import { getToastStore } from "@skeletonlabs/skeleton";

  const toastStore = getToastStore();

  // This is a prop!
  /**
   * @type {Object} message - The message to display in the toast.
   * @property {String} type - The type of message to display. Can be "positive", "negative", or "neutral".
   * @property {String} message - The message to display.
   */
  export let message = {
    type: "",
    message: "",
  };

  function triggerPositiveToast(message) {
    toastStore.trigger({
      message: message,
      background: "variant-filled-success",
    });
  }
  function triggerNegativeToast(message) {
    toastStore.trigger({
      message: message,
      background: "variant-filled-error",
    });
  }

  function triggerNeutralToast(message) {
    toastStore.trigger({
      message: message,
      background: "variant-filled-tertiary",
    });
  }

  $: if (message) {
    if (message.type === "positive") {
      triggerPositiveToast(message.message);
    } else if (message.type === "negative") {
      triggerNegativeToast(message.message);
    } else if (message.type === "neutral") {
      triggerNeutralToast(message.message);
    } else {
    }
  }
</script>
