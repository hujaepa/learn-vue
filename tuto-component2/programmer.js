export default {
    name:"ProgrammerComponent",
    template:"<p>My name is {{name}}, I am a {{position}}</p>",
    data: function() {
        return{
            name:"Jimmy",
            position: "programmer"
        }
    }
};