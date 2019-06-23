<template>
    <div id="tweets w-100">
        <b-modal id="add-tweet" title="Add Tweet" @ok="makeTweet" :ok-title="'Tweet'">
            <b-form-textarea
                id="textarea"
                v-model="inputText"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>
                <p class="text-right text-muted">{{lengthCount}}</p>
        </b-modal>
        <div class="w-50  margin-auto" v-if="tweets.length > 0">
            <div class="tweet mt-10 text-left" v-for="(tweet, index) of tweets" :key="index">
                <tweet :tweet="tweet"/>
            </div>
        </div>
        <div class="w-50  margin-auto" v-else>
            <h3>
                No tweet found!
            </h3>
        </div>
    </div>
</template>

<script>
import Tweet from '@/components/tweet.component';
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    components: {
        Tweet
    },
    data () {
        return {
            inputText: ''
        }
    },
    computed: {
        ...mapState(['user']),
        ...mapGetters(['tweets']),
        lengthCount () {
            return 160 - this.inputText.length;
        }
    },
    methods: {
        ...mapActions(['addTweet']),
        makeTweet () {
            const tweet = {
                text: this.inputText,
                userEmail: this.user.email,
                time: new Date(),
                id: new Date().getTime()
            };
            this.addTweet(tweet);
            this.inputText = '';
        }
    }
}
</script>

