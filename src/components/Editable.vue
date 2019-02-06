<template>
    <div contenteditable="true">
        <slot v-bind:content="content">
            {{ content }}
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'editable',
        props: {
            docKey: String
        },
        data: function () {
            return {};
        },
        computed: {
            content() {
                return 'This is the content';
            }
        },
        methods: {}
    };
</script>

<style lang="scss">

</style>
