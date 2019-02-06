<template>
    <span contenteditable v-on:blur="updateContentInDB" v-model="content">{{ content }}</span>
</template>

<script>
    let firebase = require('firebase');

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAcjW2rWja6VayhZa90WQVu56NPbS-yq5Q",
        authDomain: "keepitpupper-dev.firebaseapp.com",
        databaseURL: "https://keepitpupper-dev.firebaseio.com",
        projectId: "keepitpupper-dev",
        storageBucket: "keepitpupper-dev.appspot.com",
        messagingSenderId: "212309711746"
    };

    let app = firebase.initializeApp(config);
    let firestore = app.firestore();

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
                docRef.set(({
                    value: newValue
                }));
            }
        }
    };
</script>

<style lang="scss">

</style>
