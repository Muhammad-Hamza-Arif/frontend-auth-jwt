import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    movie:{
      allMovies:[],
      token:null
    }
  },
  getters: {
    getMovieList(state){
      return state.movie.allMovies
    }
  },
  mutations: {
    SET_MOVIES(state,payload){
    state.movie.allMovies=payload
    }
  },
  actions: {
    async registerUser(_,payload){
      console.log('PAyloadc in action >>>>>>>>>>',payload)
   const response = await axios.post("http://localhost:3000/users/register",payload)
   console.log(response.data)
    },
    async userAuthentication(_,payload){
      console.log('PAy in action >>>>>>>>>>',payload)
   const {data} = await axios.post("http://localhost:3000/users/authenticate",payload)
   console.log("hello>>>>>>>>>> ",data);
   this.state.movie.token=data.data.token
  //  console.log('response ',response.data)
   axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.movie.token}`;
   axios.defaults.headers.common['Content-Type'] = 'application/json';
    },
    async getAll(){
      const response = await axios.get('http://localhost:3000/users/getallusers')
      console.log(response.data)
    },
    async createMovies({commit}, payload) {
      try {
        const token = this.state.movie.token;
        console.log('token---->', token)
        const config = {
          headers: {
            'x-access-token': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
        const { data } = await axios.post('http://localhost:3000/movies', payload, config);
        console.log('Movie created:', data);
        commit('SET_MOVIES',data)
      } catch (error) {
        console.error('Error creating movie:', error);
      }
    }
  },
  modules: {
  }
})
