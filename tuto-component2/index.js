import ProgrammerComponent from "./programmer.js";
import ConsultantComponent from "./consultant.js";

new Vue({
    el: '#app',
    components:{
        "programmer": ProgrammerComponent,
        "consultant": ConsultantComponent
    }
});

