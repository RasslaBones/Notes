import Vuex from "vuex";
const store = new Vuex.Store({
  state: {
    isAuth: false,
    user: {},
  },
  getters: {
    findRedNotes(state){
      return [...state.user.notes].filter((note) => note.type == 'red')
    },
    findOrangeNotes(state){
      return [...state.user.notes].filter((note) => note.type == 'orange')
    },
    findGreenNotes(state){
      return [...state.user.notes].filter((note) => note.type == 'green')
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuth = true;
    },
    logOut(state) {
      state.user = {};
      state.isAuth = false; 
    },
    deleteNote(state, id){
      state.user.notes = state.user.notes.filter((note) => note._id !== id)
    },
  },
  actions: {
    async registerUser({ commit }, userData) {
      await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.email,
          password: userData.password,
        }),
      });
    },

    async loginUser({ commit }, userData) {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userData.email,
          password: userData.password,
        }),
      });
      commit("setUser", await response.json());
    },

    async addNoteToUser({ commit }, postData) {
      try {
        let post = await fetch(`http://localhost:5000/api/users/${store.state.user._id}/notes`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(postData),
          }
        );
        let send = await post.json();
        if (send.message) throw new Error("missing fields");
        commit("setUser", send);
      } catch (e) {
        console.log("Error: ", e);
      }
    },

    async deleteNote({ commit }, id) {
      try{
        await fetch(`http://localhost:5000/api/users/${store.state.user._id}/notes/${id}`, {
          method: "DELETE",
        });
        commit('deleteNote', id);
      } catch(e){
        console.log("Error: ", e)
      }
    },

    async updateStateOfNote({commit}, data) {
        try{
            const response = await fetch(`http://localhost:5000/api/users/${store.state.user._id}/notes/${data.id}/update`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
              done: data.putData
            })
            
        });
        console.log(await response.json())
        }catch(e){
          console.log("Error: ",e)
        }
    }
      
  },

  modules: {},
});

export default store;
