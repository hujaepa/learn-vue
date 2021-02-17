const myvue = new Vue({
    el:"#vue-app",
    data: {
        password:"",
        message:""
    },
    methods:{
        checkPassword: function(){
            if(this.password.length<8){
                this.message="Your password must not be less than 8 characters";            
                
            }
            else
                this.message="";
            //check capital letters
            for (let index = 0; index < this.password.length; index++) {
                if(this.password.charAt(index)!==this.password.charAt(index).toUpperCase())
                    this.message="Your password must at least contains 1 upper case character";
            }
            document.getElementById("status").innerHTML=this.message;
        }
    }
});