<template>
  <div>
    <div>HELLLO</div>
    <login 
        v-if="!state.users.loggedInUser"
        v-bind:login="loginUser"
        ></login>
  </div>
</template>

<script>
import login from './login'
import {store} from '../reducers/'
export default {
  components: {
    login
  },
  data () {
    return {
      dispatch: store.dispatch,
      state: store.getState()
    }
  },
  methods: {
    loginUser(userData) {
      this.dispatch(userData)
    }
  }
}
</script>
