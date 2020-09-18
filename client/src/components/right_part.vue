<template>
    <div class="right_part">
        <p class="label">{{title}}</p>
        <p class="label">{{currentItem.name}}</p>
        <img :src="currentItem.thumbnail" class="thumbnail">
        <p class="label">Детали казино</p>
        <ul class="list">
            <li class="list-item" >{{currentItem.bonuses | listFromArr}}</li>
            <li class="list-item" >{{currentItem.country | listFromArr}}</li>
            <li class="list-item" >{{currentItem.vendors | listFromArr}}</li>
        </ul>
        <button class="btn">Перейти в казино</button>
        <button class="btn">Показать сайт производителя</button>
    </div>
</template>
<script>
    export default {
        name: 'right_part',
        props: ['currentItem'],
        data(){
            return {
                title: 'Выбор казино',
            }
        },
        mounted(){
            console.log(this.currentItem)
        },
        filters: {
            listFromArr(arr){
                if(arr.length !== 0) {
                    const newArr = JSON.parse(arr)
                    return newArr.join(', ')
                }
                else {
                    return 'empty'
                }
            }
        }
    }
</script>