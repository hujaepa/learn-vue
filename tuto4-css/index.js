new Vue({
    el:"#app",//better name a specific widget
    data:{
        link:"https://github.com/hujaepa/learn-vue",
        name:"",
        info:true
    },
    methods:{
        addName: function() {
            let nameList = document.querySelector(".name-list");
            let createLi = document.createElement('li');
            createLi.setAttribute("class","info");
            createLi.innerHTML = this.name;
            nameList.append(createLi);
        }
    }
});