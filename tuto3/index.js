new Vue({
    el:"#app",//better name a specific widget
    data:{
        link:"https://github.com/hujaepa/learn-vue",
        name:""
    },
    methods:{
        displayName:function(){
            alert(document.getElementById("test").innerText);
        }
    }
});