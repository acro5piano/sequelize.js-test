<template>
  <div>
    <p>{{ serverTime }}</p>
    <p>{{ random }}</p>
    Messages:
    <ul>
      <li v-for="message in messages">
        {{message}}
      </li>
    </ul>
    <input @keydown.enter="sendMessage" v-model="text">
    <button @click="sendMessage"></button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        serverTime: '',
        random: 0,
        messages: [],
        text: ''
      }
    },
    mounted () {
      const socket = io();
      socket.on('time', time => this.serverTime = time )
      socket.on('random', random => this.random = random )
      socket.on('message', message => this.messages.push(message))
    },
    methods: {
      sendMessage () {
        axios.get('/send?text='+ this.text)
      }
    }
  }
</script>
