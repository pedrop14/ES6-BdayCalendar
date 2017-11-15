"use strict";

class BdayPerson{
    constructor(nickname, bdate){
        this.nickname = nickname;
        this.bdate = bdate;
    }

    listPeople(data){
        var bdayList = document.getElementById("list-bday");
        data.forEach(function(element) {
            let person = new BdayPerson(element.nickname, element.bdate);
            var column, thumb, name, date;

            column = document.createElement("div");
            thumb = document.createElement("div");
            name = document.createElement("h2");
            date = document.createElement("h3");

            name.innerHTML = element.nickname;
            date.innerHTML = element.bdate;

            column.classList.add("col-sm-6");

            thumb.classList.add("thumbnail");

            thumb.appendChild(name);
            thumb.appendChild(date);

            column.appendChild(thumb);

            bdayList.appendChild(column);

        }, this);
    }
}

var data = [
    {
        nickname:"Pedro",
        bdate: "14-02"
    },
    {
        nickname:"Ana Luiza",
        bdate: "23-10"
    }
]

let control = new BdayPerson();
control.listPeople(data);

