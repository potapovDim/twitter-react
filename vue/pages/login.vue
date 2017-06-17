<template>
  <div>
    <input type="text" placeholder="Username" />
    <button @click="submitLogin()">Log in</button>
  </div>
</template>

<script>
import uuid from 'node-uuid'
import {loginUser} from '../reducers/users'
export default {
  data() {
    return {
      userName: ''
    }
  },
  props: {
    login: Function
  },
  methods: {
    submitLogin() {
      this.login(loginUser({
        username: this.userName,
        id: uuid()
      }))
    }
  }
}
</script>
