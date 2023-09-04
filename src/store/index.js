import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    card: {
      userId: null,
      items: [],
    },
    movie: {
      allMovies: [],
    },
    alluser: [],
    token: null,
    userId: null,
    role: null,
  },

  getters: {
    getMovieList(state) {
      return state.movie.allMovies;
    },

    getToken(state) {
      return state.token;
    },

    getUserCard(state) {
      return state.movie.allMovies;
    },

    getAllUsers(state) {
      return state.alluser;
    },

    getRole(state) {
      return state.role;
    },
  },

  mutations: {
    ROLE_SAVE(state, payload) {
      state.role = payload;
    },
    
    ALL_USERS(state, payload) {
      state.alluser = payload;
    },

    UPDATE_MOVIE(state, id, data) {
      state.movie.allMovies.splice(id, 1, data);
    },

    SET_MOVIE_LIST(state, payload) {
      state.movie.allMovies = payload;
      state.card.items = payload;
    },

    REMOVE_MOVIE(state, id) {
      console.log("in the mutatuion", id);
      state.movie.allMovies = state.movie.allMovies.filter(
        (movie) => movie.id !== id
      );
    },
  },

  actions: {
    async registerUser(_, payload) {
      console.log("PAyloadc in action >>>>>>>>>>", payload);
      const response = await axios.post(
        "http://localhost:3000/users/register",
        payload
      );
      console.log(response.data);
    },

    async userAuthentication({ commit }, payload) {
      console.log("PAy in action >>>>>>>>>>", payload);
      const { data } = await axios.post(
        "http://localhost:3000/users/authenticate",
        payload
      );
      this.state.userId = data.data.user._id;
      this.state.card.userId = data.data.user._id;
      console.log("hello>>>>>>>>>> ", data.data.user.role);
      commit("ROLE_SAVE", data.data.user.role);
      this.state.token = data.data.token;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.state.token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
    },

    async getAll() {
      const response = await axios.get(
        "http://localhost:3000/users/getallusers"
      );
      console.log(response.data);
    },

    async createMovies(_, payload) {
      try {
        const token = this.state.token;
        console.log("token---->", token);
        const config = {
          headers: {
            "x-access-token": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const res = await axios.post(
          "http://localhost:3000/movies",
          payload,
          config
        );
        console.log("Movie created:", res);
      } catch (error) {
        console.error("Error creating movie:", error);
      }
    },

    async fetchMovies({ commit }) {
      try {
        const token = this.state.token;
        console.log("token in the fetch----> ", token);
        const config = {
          headers: {
            "x-access-token": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.get(
          "http://localhost:3000/movies",
          config
        );
        console.log("data in action: (looking for _id) ", data);
        commit("SET_MOVIE_LIST", data.data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },

    async deleteMovie(_, payload) {
      console.log("paylod id in action", payload.id);
      try {
        const token = this.state.token;
        console.log("token---->", token);
        const config = {
          headers: {
            "x-access-token": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.delete(
          `http://localhost:3000/movies/${payload.id}`,
          config
        );
        this.state.movie.allMovies.splice(payload.index, 1);
      } catch (error) {
        console.error("Error creating movie:", error);
      }
    },

    async updateMovies({ commit }, { indx, updateMovie }) {
      console.log("idObj: ", indx);
      console.log("PAyloaad : ", updateMovie);
      try {
        const token = this.state.token;
        const config = {
          headers: {
            "x-access-token": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        await axios.put(
          `http://localhost:3000/movies/${indx}`,
          updateMovie,
          config
        );
      } catch (error) {
        console.error("Error creating movie:", error);
      }
    },

    async updatePassword(_, payload) {
      console.log("payload in acton ChngePAss : ", payload);
      const { data } = await axios.put(
        `http://localhost:3000/users/${payload.id}`,
        payload
      );
      console.log("Data in updatePAssword", data);
    },

    async allUsers({ commit }) {
      const response = await axios.get(
        "http://localhost:3000/users/getallusers"
      );
      console.log("stoe in consoler", response.data.data.users);
      commit("ALL_USERS", response.data.data.users);
    },

    async updateRole(_, payload) {
      console.log("payload in acton ChngeRole : ", payload);
      const { data } = await axios.put(
        `http://localhost:3000/users/role/${payload.indx}`,
        { data: { updateRole: payload.updateRole } }
      );
      console.log("Data in updateRole", data);
    },
  },

  modules: {},
});
