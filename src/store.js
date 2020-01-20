import Vue from "vue";
import Vuex from "vuex";

const fb = require('./firebaseConfig')

Vue.use(Vuex);

fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
        store.dispatch('fetchUserProfile')

        //realtime updates from our projects collection
        fb.projectsCollection.orderBy('createdOn', 'desc').onSnapshot(querySnapshot => {
            let projectsArray = []
            querySnapshot.forEach(doc => {
                console.log(doc)
                let project = doc.data()
                project.id = doc.id
                projectsArray.push(project)
            })
            store.commit('setProjects', projectsArray)
        })
        //realtime updates from our tasks collection
    }
})

// realtime updates from our tasks collection 
export const store = new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {},
        projects: [],
        tasks: []
    },
    actions: {
        clearData({ commit }) {
            commit('setCurrentUser', null)
            commit('setUserProfile', {})
            commit('setProjects', null)
        },
        fetchUserProfile({ commit, state }) {
            fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data())
            }).catch(err => {
                console.log(err)
            })
        }
        
       
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        },
        setProjects(state, val){
            state.projects = val
        },
        setCurrentProject(state, val){
            state.currentProject = val
        },
        setTasks(state, val) {
            state.tasks = val
        }
    }
});
