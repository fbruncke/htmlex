var app = (function () {

    function calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    function logPeople(a) {
        for (var i = 0; i < a.length; i++) {
            console.log(a[i].name + " is " + a[i].age() + " years old");
        }
    }

    var p1 = new Object();
    p1["name"] = "Mikkel";
    p1["birthYear"] = 2003;
    p1["age"] = calcAge;

    var p2 = new Object();
    p2.name = "Mathias";
    p2.birthYear = 2006;
    p2.age = calcAge;

    var p3 = {
        name: "Michell",
        birthYear: 1966,
        age: calcAge
    }

    var people = new Array();
    people.push(p1);
    people.push(p2);
    people.push(p3);
    people.push({
        name: "Anette",
        birthYear: 1965,
        age: calcAge
    });

    logPeople(people);
    logObject(p1);
console.log("name"+p1["name"]);
    function logObject(o) {
        for (var i in o) {
            console.log("log test:"+i);
        }
    }

})();
