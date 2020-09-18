<template>
  <div id="app">
    <div class="container">
      <Title />
      <div class="wrapper">
        <LeftPart
                v-bind:listTotal="listTotal"
                v-bind:defaultItem="defaultItem"
                v-on:setCurrentItem="setCurrentItem"
        />
        <RightPart  v-bind:currentItem="currentItem"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './components/title'
import RightPart from './components/right_part'
import LeftPart from './components/left_part'
import DAL_List from './DAL/dal_list'
export default {
  name: 'App',
  components: {
    RightPart,
    Title, LeftPart
  },
  data(){
    return {
      title: 'Поиск казино',
      titleResult: 'Результаты поиска',
      filter: '',
      listTotal: [],
      listTitle: [],
      currentItem: {
              'thumbnail': 'http://sloto.loc/wp-content/themes/sloto-top_2020/image/no-image.svg',
              'bonuses': [],
              'country': [],
              'link': '',
              'name': 'Ничего не найдено',
              'rating': '',
              'site_url': '',
              'vendors': []
    },
      defaultItem: {
        'thumbnail': 'http://sloto.loc/wp-content/themes/sloto-top_2020/image/no-image.svg',
        'bonuses': [],
        'country': [],
        'link': '',
        'name': 'Ничего не найдено',
        'rating': '',
        'site_url': '',
        'vendors': []
      }
    }
  },
  mounted(){
    (async () => {
      const response = await DAL_List.getPosts()
      this.listTotal = response.data
    })()
  },
  methods: {
    setCurrentItem(item){
      this.currentItem = item
      console.log('currentItem', item)
    }
  }
}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    margin-bottom: 60px;
}
  *{
  padding: 0px;
  margin: 0px;
}
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .title_page {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .wrapper {
    display: flex;
    width: 100%;
  }
  .left_part, .right_part {
    width: 50%;
    padding: 15px;
    box-sizing: border-box;
    border:1px solid gray;
    text-align: left;
  }
  .left_part {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .right_part {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .form_control {
    width: 100%;
    box-sizing: border-box;
    height: 35px;
    border-bottom: 3px solid #2c3e50;
    padding: 5px;
    margin-bottom: 15px;
  }
  .label {
    margin-bottom: 15px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 22px;
  }
  .list {
    list-style: none;
  }
  .list li {
    margin-bottom: 15px;
    padding: 5px;
    border-bottom: 1px solid #2c3e50;
    cursor: pointer;
  }
  .active {
    background: aqua;
  }
  .thumbnail {
    width: 50%;
    margin: 15px;
    border: 1px solid gray;
  }
  .btn {
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
    background: coral;
    font-weight: bolder;
    color:white;
    border:none;
    cursor: pointer;
  }
</style>
