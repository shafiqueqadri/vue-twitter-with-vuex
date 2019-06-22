<template>
    <div>
        Welcome, <b class="text-muted">{{user.email}}</b>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'home-page',
    data () {
        return {
            user: {}
        }
    },
    mounted () {
        const { currentUser } = firebase.auth();
        this.user = currentUser;
    }
    
}
</script>

<style scoped>
    .text-muted {
        color: gray;
    }
</style>
