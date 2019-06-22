<template>
    <nav>
        <ul class="nav">
            <li>Vue Twitter</li>
            <li v-if="user.loggedIn" @click="logout">Logout</li>
            <li v-else>Sign in</li>
        </ul>
    </nav>
</template>

<script>
import firebase from 'firebase';
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState(['user'])
    },
    mounted () {
        console.log(this.use)
    },
    methods: {
        ...mapActions(['removeUser']),
        logout () {
            firebase.auth().signOut();
            this.removeUser();
            this.$router.replace('/')
        }
    }
}
</script>

<style scoped>
    .nav {
        list-style: none;
        height: 100px;
    }
    .nav li {
        display: inline;
        float: left;
        margin-right: 20px;
    }
    .nav li:last-child {
        float: right;
    }
</style>

