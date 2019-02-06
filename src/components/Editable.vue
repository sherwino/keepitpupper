<template>
    <span contenteditable="true">{{ content }}</span>
</template>

<script>
    export default {
        name: 'editable',
        props: ['docKey'],
        data: function () {
            return {};
        },
        computed: {
            content() {
                return 'Editable content';
            }
        },
        methods: {}
    };
</script>

<style lang="scss">

</style>
