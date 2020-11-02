import axios from "axios"

export default {
    // save child data
    saveChild: function (childData){
        return axios.post("/api/child", childData)
    },
    getChild: function(id){
        return axios.get("/api/child" + id)
    },
    getChildren: function(childData){
        return axios.get("/api/child", childData)
    },
    updateChild: function(id){
        return axios.get("/api/child" + id) 
    }

}