<template>
    <input type="text"
           class="form_control"
           v-model="value"
           v-on:input="changeValueInput"
    >
</template>
<script>
    export default {
        name: 'search_input',
        data(){
            return {
                value: '',
            }
        },
        methods: {
            changeValueInput(){
                const value = this.value
                this.$emit('changeValue', value)
            }
        }
    }
</script>