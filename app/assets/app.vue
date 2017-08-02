<template>
  <div>
    <p>{{ serverTime }}</p>
    <p>{{ random }}</p>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        serverTime: '',
        random: 0,
      }
    },
    mounted () {
      const socket = io();
      socket.on('time', time => this.serverTime = time )
      socket.on('random', random => this.random = random )
    }
  }
</script>
