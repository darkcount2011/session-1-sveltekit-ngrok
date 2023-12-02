<script>
  import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
</script>

<div>
  <AppBar
    gridColumns="grid-cols-3"
    slotDefault="place-self-center"
    slotTrail="place-content-end"
    slotLead="place-content-start"
    border="border-b-1 border-surface-600-300-token shadow-lg"
  >
    <svelte:fragment slot="lead">
      <div class="grid grid-flow-col gap-4">
        <a href="/"> Home </a>
      </div>
    </svelte:fragment>
    <svelte:fragment slot="default">
      <div class="flex gap-20">
        <a href="forms"> Forms </a>
        <a href="toaster"> Toaster </a>
      </div>
    </svelte:fragment>
    <svelte:fragment slot="trail">
      <div class="grid grid-flow-col gap-3">
        <LightSwitch />
      </div>
    </svelte:fragment>
  </AppBar>
</div>
