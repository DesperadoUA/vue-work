<template>
    <ul class="list">
        <li class="list-item"
            v-for = "list of listTitle"
            v-bind:key = "list.id"
            v-on:click="activate"
        >{{list.name}}</li>
    </ul>
</template>
<script>
    export default {
        name: 'list',
        props: ['listTotal', 'filter', 'defaultItem'],
        data(){
            return {
                listTitle: [],
            }
        },
        watch:{
            filter: function(value){
                console.log('Good', value)
                if(value !== '') {
                    const list = this.listTotal
                    this.listTitle = []
                    list.forEach(item => {
                        if(item.name.toLowerCase().includes(value.toLowerCase())) this.listTitle.push(item)
                    })
                    if(this.listTitle.length === 0) this.listTitle.push(this.defaultItem)
                }
            }
        },
        methods: {
            changeValue(value){
                const list = this.listTotal
                list.forEach(item => {
                    if(item.name.includes(value)) console.log("Good")
                    console.log(item.name)
                })
            },
            activate(event){
                const current = this.listTitle.filter(item => item.name === event.target.textContent)
                console.log('activate', current)
                this.$emit('setItemCurrent', current[0])
            }
        }
    }
</script>