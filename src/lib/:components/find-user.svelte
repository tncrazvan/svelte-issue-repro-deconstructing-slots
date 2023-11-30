<script>
  import { find_user } from ':scripts/remote_user'
  /**
   * @type {string}
   */
  export let id
</script>

{#await find_user({ id })}
  <span>Loading user...</span>
{:then [user, error]}
  {#if error}
    <span>{error.message}</span>
  {:else}
    <!-- this is the important part -->
    <slot using={{ user }} />
  {/if}
{/await}
