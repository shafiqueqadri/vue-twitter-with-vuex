<template>
    <div>
        <b-card :title="username" :sub-title="`@${username}`">
            <b-dropdown class="options m-2" variant="primary">
                <b-dropdown-item @click="remove">Remove</b-dropdown-item>
            </b-dropdown>
            <b-card-text>
                {{tweet.text}}
            </b-card-text>
            <!-- <b-card-text>A second paragraph of text in the card.</b-card-text> -->

            <a class="card-link"><font-awesome-icon icon="comment" /></a>
            <a @click="likeUnlike" class="card-link text-primary" :class="{'text-muted': !tweet.like}"><font-awesome-icon icon="heart" /></a>
            
        </b-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'tweet',
    props: ['tweet'],
    computed: {
        username () {
            const { userEmail } = this.tweet;
            return userEmail && userEmail.split('@')[0];
        }
    },
    methods: {
        ...mapActions(['removeTweet', 'likeUnlikeTweet']),
        remove () {
            this.removeTweet(this.tweet.id)
        },
        likeUnlike () {
            this.likeUnlikeTweet(this.tweet.id)
        }
    }
}
</script>
<style>
    .options {
        float: right;
        top: 0px !important;
        position: absolute;
        right: 0px;
    }
    .options button {
        background: transparent;
        border: none;
        color: gray;
    }
    .options button:hover {
        background: transparent;
        border: none;
        color: gray;
    }
    .options button:focus {
        background: transparent;
        border: none;
        color: gray;
    }
</style>
