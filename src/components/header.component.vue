<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="bg-white">
    <div class="logo-container">
      <b-navbar-brand to="/">
        <img src="../assets/logo.png" alt="logo" class="logo">
      </b-navbar-brand>
    </div>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto mt-lg-0">
        <b-nav-item v-if="user.loggedIn" :to="{name: 'home'}">Home</b-nav-item>
        <b-nav-item v-if="user.loggedIn" :to="{name: 'tweets'}">Tweets</b-nav-item>
        <b-button
            v-if="!user.loggedIn"
            class="mx-lg-2 my-2 my-lg-0 px-4 text-white"
        >Sign In</b-button>
        <b-button
            v-b-modal.add-tweet
            v-if="user.loggedIn"
            class="mx-lg-2 my-2 my-lg-0 px-4"
            variant="outline-primary"
        >Add Tweet</b-button>
        <b-button
            v-if="user.loggedIn"
            @click="logout()"
            class="mx-lg-2 my-2 my-lg-0 px-4 text-white"
        >Logout</b-button>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from 'firebase';
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState(['user'])
    },
    methods: {
        ...mapActions(['removeUser']),
        logout () {
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'signin'})
                this.removeUser();
            });
            
        }
    }
}
</script>

<style scoped>
    .logo {
        width: 80px;
    }
</style>

