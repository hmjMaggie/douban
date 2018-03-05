import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Book from '../components/book/book'
import Broadcast from '../components/broadcast/broadcast'
import Group from '../components/group/group'
import Personal from '../components/personal/personal'
import detailsVideo from '../components/book/datailsVideo'

import error from '../components/error'


/*book子组件*/
import bookVideo from '../components/book/bookVideo'
import bookRead from '../components/book/bookRead'
import bookTv from '../components/book/bookTv'
import bookCity from '../components/book/bookCity'
import bookMusic from '../components/book/bookMusic'

import Details from '../components/Details'


Vue.use(Router);

export default new Router({
  mode:'history',
  routes:[
    {
      path: '/Details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book,
      children:[
        {path:'',component:bookVideo},
      	{path:'video',component:bookVideo},
      	{path:'read',name:'read',component:bookRead},
      	{path:'tv',alias:'tv11',component:bookTv},         /*改变路径名称，弄一个假的，在浏览器上方看到的是假的路径*/
      	{path:'city/:uId/:uName',component:bookCity},        /*通过这种方式传值过去*/
      	{path:'music',component:bookMusic}
      ]
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/detailsVideo',
      name: 'detailsVideo',
      component: detailsVideo
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
