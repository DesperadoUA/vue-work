<template>
    <div class="left_part">
        <p class="label">{{title}}</p>
        <SearchInput v-on:changeValue="changeValue"/>
        <hr>
        <p class="label">{{titleResult}}</p>
        <List
                v-bind:listTotal="listTotal"
                v-bind:defaultItem="defaultItem"
                v-bind:filter="filter"
                v-on:setItemCurrent="setItemCurrent"
        />
    </div>
</template>
<script>
    import SearchInput from './search_input'
    import List from './list'
    export default {
        name: 'left_part',
        props: ['listTotal', 'defaultItem'],
        data(){
            return {
                title: 'Поиск казино',
                titleResult: 'Результаты поиска',
                filter: ''
            }
        },
        components: {
            SearchInput, List
        },
        methods: {
            changeValue(value){
                this.filter = value
            },
            setItemCurrent(item){
                this.$emit('setCurrentItem', item)
            }
        }
    }
</script>