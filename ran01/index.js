const myvue = new Vue({
    el:"#vue-app",
    data: {
        info: "huzai",
        header_id: "greeting"
    },
    mounted: function(){
        document.getElementById("greeting").innerHTML=this.info.charAt(0).toUpperCase()+this.info.substr(1,this.info.length);
    }
});