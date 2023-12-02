import { writable } from "svelte/store";

/**
 * @type {import("svelte/store").Writable<{ type: string; message: string; }>}
 * @description This store is used to display toast messages.
 * @example
 * import { toastMessage } from "$lib/toaster/toastStore";
 *
 * toastMessage.set({
 *  type: "positive",
 * message: "This is a positive message",
 * });
 */
export const toastMessage = writable({
  type: "",
  message: "",
});
