new Vue({
    el:"#app",//better name a specific widget
    data:{
        link:"https://github.com/hujaepa/learn-vue",
        name:""
    },
    methods:{
        addName: function() {
            let nameList = document.querySelector(".name-list");
            let createLi = document.createElement('li');
            createLi.innerHTML = "<b>"+this.name+"</b>";
            nameList.append(createLi);
        }
    }
});