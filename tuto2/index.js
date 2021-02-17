new Vue({
    el:"#get-age",//better name a specific widget
    data:{
        DOB:1991,
        website:"https://github.com/hujaepa/learn-vue"
    },
    methods:{
        getAge:function(){
            var date = new Date();
            var currYear =date.getFullYear();
            var age = currYear-this.DOB;
            console.log(this.DOB);
            return age;
        }
    }
});