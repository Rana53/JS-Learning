let toDo = {
    name: 'Rana',
    meeting: 0,
    addMeeting: function(num){
        this.meeting += num;
    },
    summary: function() {
      return `you have ${this.meeting} today`;
    }
}

toDo.addMeeting(4);
console.log(toDo.summary());
