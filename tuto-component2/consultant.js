export default {
    name:"ConsultantComponent",
    template:"<p>My name is {{name}}, I am a {{position}}</p>",
    data: function() {
        return{
            name:"Jack",
            position: "consultant"
        }
    }
};