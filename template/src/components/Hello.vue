<template>
    <div class="hello">
        <h1>\{{ msg }}</h1>
        {{#store}}
        <h2>\{{ hello }}</h2>
        {{/store}}
    </div>
</template>

<script>
{{#store}}
import { mapGetters } from 'vuex';
{{/store}}

export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },{{#store}}
    computed: {
        ...mapGetters({
            hello: 'getHello',
        }),
    },{{/store}}
};
</script>

<style scoped>
h1, h2 {
    font-weight: normal;
}
</style>
