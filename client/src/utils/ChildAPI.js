import axios from "axios"

export default {
    // save child data
    saveChild: function (childData){
        return axios.post("/api/child", childData)
    },
    getChild: function(){
        return axios.get("/api/child" + id)
    }

}