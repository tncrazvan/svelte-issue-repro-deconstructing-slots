<script>
  import FindUser from ':components/find-user.svelte'
</script>

<!-- this doesn't work -->
<FindUser id="1" let:using={{ user: { username } }}>
  <span>username: {username}</span>
</FindUser>

<!-- this works -->
<FindUser id="1" let:using={{ user }}>
  {@const { username } = user}
  <span>username: {username}</span>
</FindUser>
