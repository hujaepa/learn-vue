new Vue({
    el:"#app",//better name a specific widget
    data:{
        asset:false,
        service:false,
    },
    methods:{
        showAsset: function(){
            this.asset=true;
            this.service=false;
        },
        showService: function(){
            this.asset=false;
            this.service=true;
        }
    }
});