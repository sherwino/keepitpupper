<template>
    <span contenteditable v-on:blur="updateContentInDB" v-model="content">{{ content }}</span>
</template>

<script>
// This should behave the same way as initializing it here.
import { firestore } from '../firebaseConfig';

    export default {
        name: 'editable',
        props: ['docKey'],
        data: function () {
            return {
                content: "Content goes here"
            };
        },
        async mounted() {
            let docRef = firestore.doc(this.docKey);
            let content = await docRef.get();
            let value = content.data().value;
            this.content = value;

            //Set up listener
            docRef.onSnapshot((doc) => {
                let value = doc.data().value;
                this.content = value;
            });
        },
        methods: {
            updateContentInDB(event) {
                let newValue = event.target.innerText;
                console.log("Updating in DB");
                console.log(newValue);
                let docRef = firestore.doc(this.docKey);
                docRef.update({
                    value: newValue
                });
            }
        }
    };
</script>

<style lang="scss">

</style>
