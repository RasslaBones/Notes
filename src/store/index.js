import { createStore } from 'vuex'
import Vuex from 'vuex'
const store = new Vuex.Store({
  state: {
    isAuth: false,
    user: {}
  },
  getters: {

  },
  mutations: {
    setUser(state, user){
      state.user = user;
      state.isAuth = true;
    },
    logOut(state){
      state.user = {}
      state.isAuth = false
    }
  },
  actions: {
    async registerUser ({commit},userData) {
      await fetch("http://localhost:5000/api/auth/register", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                username: userData.email,
                password: userData.password
          })
      })
    },

    async loginUser ({commit}, userData){
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                username: userData.email,
                password: userData.password
          })
      })
      commit("setUser", await response.json()) 
    }
  },
  modules: {
  }
})

export default store

// export default createStore({
//   state: {
//     isAuth: false,
//     user: {}
//   },
//   getters: {

//   },
//   mutations: {
//     setUser(state, user){
//       state.user = user;
//       state.isAuth = true;
//     }
//   },
//   actions: {
//     async registerUser ({commit},userData) {
//       await fetch("http://localhost:5000/api/auth/register", {
//         method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify( {
//                 username: userData.email,
//                 password: userData.password
//           })
//       })
//     },

//     async loginUser ({commit}, userData){
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify( {
//                 username: userData.email,
//                 password: userData.password
//           })
//       })
//       commit("setUser", await response.json()) 
//     }
//   },
//   modules: {
//   }
// })
