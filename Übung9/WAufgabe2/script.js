let daten = [
    { lang: "Python", rating: 9.704 },
    { lang: "JavaScript", rating: 2.451 },
    { lang: "C", rating: 15.773 },
    { lang: "Java", rating: 16.896 },
    { lang: "Visual Basic .NET", rating: 5.287 },
    { lang: "C++", rating: 5.574 },
    ];
    // Erstellt ein td-Element mit dem gegebenen Textinhalt
    let createTd = function(content) {
    let td = document.createElement("td");
    td.textContent = content;
    return td;
    };

    let tbody = document.querySelector('tbody');
    daten.sort((a,b) => b.rating-a.rating);
    for(let i =0; i<daten.length; i++){
        let tr = document.createElement('tr');
        tbody.append(tr);
        tr.append(i+1, createTd(daten[i].lang), createTd(daten[i].rating));
    }
    