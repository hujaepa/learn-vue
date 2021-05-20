Vue.component("admin",{
    template:"<p>My name is {{name}}, I am an {{position}}</p>",
    data:function(){
        return {
            name:"jack",
            position:"admin"
        }
    }
});

Vue.component("dean",{
    template:"<p>My name is {{name}}, I am an {{position}}</p>",
    data:function(){
        return {
            name:"jimmy",
            position:"dean"
        }
    }
});

new Vue({
    el: '#app'
});

