
/*
set the refs attriubute at html. then you can access it
*/
new Vue({
    el: '#app',
    data:{
        output:""
    },
    methods:{
        readRefs: function(){
            console.log(this.$refs.input.value);
        },
        getVal:function(){
            if(this.$refs.input.value.length >1){
                this.output = this.$refs.input.value;
            }
        }
    }

});

