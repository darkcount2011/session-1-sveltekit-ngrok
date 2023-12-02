<script>
  import { enhance } from "$app/forms";
</script>

<div class="grid grid-flow-row place-items-center">
  <!-- This form needs an action to the relevant action in the page server-->
  <h1>Standard Form</h1>
  <p>This is a standard form.</p>
  <form method="POST" action="?/standardFormHandler" use:enhance>
    <label class="label" for="fullName">Full Name</label>
    <input class="input" type="text" id="fullName" name="fullName" />

    <label for="email">Email</label>
    <input class="input" type="email" id="email" name="email" />

    <button class="btn variant-filled-primary mt-5" type="submit">Submit</button
    >
  </form>
</div>

<!-- Bonus: On succesful validation, bring up a positive toast, on error or negative validation, bring up a negative toast -->
