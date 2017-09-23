import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/Home/home'
import Add from '@/components/Add/add'
export default new Router({
  	routes: [
  		{
	  		path:'/',
	    	component:Home
	  	},
	  	{
	  		path:'/home',
	    	component:Home
	  	},
	  	{
	  		path:'/add',
	    	component:Add
	  	}
  	]
})
