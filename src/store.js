import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import localforage from 'localforage'
// import { mapState, mapGetters } from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    chartData: {
      age: 55,
      currentPensionValue: 22000,
      retireAge: 87
    },
    nav: {
      index: null
    },
    binary: {
      y: 0,
      n: 0,
      count: 0
    },
    task: {
      title: '',
      description: '',
      name: '',
      location: ''
    },
    actions: [],
    weight: {
      value: null,
      selected: null
    },
    outcome: {
      value: null,
      selected: null
    }
  },
  // Actions are where you define the calls that will commit changes to your store. A common example of this would be a call to an api to retrieve data, once it completes you call store.commit() to invoke a mutation to actually update the data in the store. Actions are called in your components via dispatch call.
  actions: {
    getStorage: function (context, state) {
      localforage.getItem('DATA')
        .then(v => {
          if (v != null || this.action) {
            context.commit('SET_DATA', v)
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    incrementYes: function (context, question) {
      context.commit('INCREMENT_YES', question)
    },
    incrementNo: function (context, question) {
      context.commit('INCREMENT_NO', question)
    },
    incrementCount: function (context, variable) {
      context.commit('INCREMENT_COUNT', variable)
    },
    pushToFirebase: function (context, data) {

    },
    reset: function (context) {
      context.commit('RESET_VALUES')
    },
    setWeight: function (context, weight, index) {
      context.commit('SET_WEIGHT', weight, index)
    },
    setOutcome: function (context, index) {
      context.commit('SET_OUTCOME', index)
    },
    selectWeight: function (context, index) {
      context.commit('SELECT_WEIGHT', index)
    },
    selectOutcome: function (context, weight, index) {
      context.commit('SELECT_OUTCOME', weight, index)
    }
  },
  // Firebase databases go here...
  // Getters are a way to grab computed data from the store. For example, if you have a project list, one component might only want to show projects that are completed:
  getters: {
    getCount: state => {
      return state.binary
    },
    getQuestionList: state => {
      return state.questions
    }
  },
  // The mutations calls are the only place that the store can be updated.
  mutations: {
    INCREMENT_YES: (state, selection) => {
      state.binary.y += 1
    },
    INCREMENT_NO: (state, selection) => {
      state.binary.x += 1
    },
    INCREMENT_COUNT: (state, selection) => {
      state.binary.count += 1
    },
    SET_WEIGHT: (state, weight) => {
      state.weight.value = weight
    },
    SET_OUTCOME: (state, outcome) => {
      state.outcome.value = outcome
    },
    SELECT_OUTCOME: (state, index) => {
      state.outcome.selected = index
    },
    SELECT_WEIGHT: (state, index) => {
      state.weight.selected = index
    },
    RESET_VALUES: (state) => {
      state.outcome.value = null
      state.weight.value = null
      state.outcome.selected = null
      state.weight.selected = null
    }
  }
})
