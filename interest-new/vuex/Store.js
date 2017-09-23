import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
	test:''
}
const getters={
	GET_SELECTED_INDEX(state){
		return state.test;
	}
}
const mutations={
	SET_SELECTED_INDEX(state,content){
		state.test=content;
	}
}
const actions={
	select_Index({commit},content){
		commit('SET_SELECTED_INDEX',content)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})