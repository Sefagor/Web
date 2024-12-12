/*function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
   }

   console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel.`);
*/
class Tutorial{

    constructor(name, sprache, beschreibung, dauer, datum, url, embedCode, bild){
        this.name = name;
        this.sprache = sprache;
        this.beschreibung = beschreibung;
        this.dauer = dauer;
        this.datum = new Date(datum);
        this.url = url;
        this.embedCode = embedCode;
        this.bild = bild;
        this.kategorien =[];
        this.kapitelliste =[];
    }

    fuegeKategorieHinzu(kategorie){
        this.kategorien.push(kategorie);
    }

    fuegeKapitelHinzu(kapitel){
        this.kapitelliste.push(kapitel);
    }
    
}

class Kategorie{
    constructor(name, bild){
        this.name = name;
        this.bild = bild;
    }
}

class Kapitel{
    constructor(name, beschreibung, dauer){
        this.name = name;
        this.beschreibung = beschreibung;
        this.dauer = dauer;
    }
}

class Bild{
    constructor(url, name){
        this.url = url;
        this.name = name;
    }
}

function getDauerInStundenUndMinuten(dauer){
    const [stunden, minuten] = dauer.split(':').map(Number);
    return `${stunden} Std. ${minuten} Min.`;
}

const bild1 = new Bild("../img/webanwendungen.png", "webanwendungen");
const bild2 = new Bild("../img/datenbanken-1200-960x502.png", "datenbanken")
const bild3 = new Bild("../img/codes_image.jpg", "code");

const kategorie1 = new Kategorie("Web-Entwicklung",bild1);
const kategorie2 = new Kategorie("Programmierung",bild3);
const kategorie3 = new Kategorie("Datenbanken",bild2);
const kategorie4 = new Kategorie("Programmierung",bild3);

const kapitel1 = new Kapitel("Einleitung", "Einleitende Worte zum Thema sowie das Aufsetzen der Entwicklungsumgebung", "00:10");
const kapitel2 = new Kapitel('"Hello World"', "Erstes Testprogramm inklusive Laufzeitumgebung", "00:20");
const kapitel3 = new Kapitel('Modulsystem', "Erorterung des Modulsystems zur Strukturierung von Quellcode", "00:30");
const kapitel4 = new Kapitel('Abschluss', "Vorstellung von Erganzenden Materiallien", "00:05");

const tutorial1 = new Tutorial(
    "Einführung in Java",
    "DE",
    "Ein schnelles Tutorial, um java kennenzulernen und in die Entwicklung einzusteigen.",
    "01:05",
    "2024-10-01",
    "<iframe src=''></iframe>",
    bild1
);

const tutorial2 = new Tutorial(
    "Einführung in C++",
    "DE",
    "Ein schnelles Tutorial, um java kennenzulernen und in die Entwicklung einzusteigen.",
    "01:05",
    "2024-10-01",
    "<iframe src=''></iframe>",
    bild2
);

tutorial1.fuegeKategorieHinzu(kategorie1);
tutorial1.fuegeKategorieHinzu(kategorie2);
tutorial1.fuegeKapitelHinzu(kapitel1);

tutorial1.fuegeKategorieHinzu(kategorie3);
tutorial1.fuegeKategorieHinzu(kategorie4);
tutorial1.fuegeKapitelHinzu(kapitel2);

const kategorien = [kategorie1, kategorie2, kategorie3, kategorie4];
kategorien.sort((a,b) => a.name.localeCompare(b.name));

let tutorials = [tutorial1, tutorial2];

function getTutorialsZuKategorie(kategorieName){
    let newTutorials = [];
    for(let i=0; i<tutorials.length; i++){
        for(let j=0; j<tutorials[i].kategorien.length; j++){
            if(tutorials[i].kategorien[j].name == kategorieName){
                newTutorials.push(tutorials[i]);
            }
        }
    }
    return newTutorials;
}

kategorien.forEach(kategorie => {
    console.log(`Kategorie: ${kategorie.name}`);
    console.log(`Bild: ${kategorie.bild.name}`);
    const zugehoerigeTutorials = getTutorialsZuKategorie(kategorie.name);
    zugehoerigeTutorials.forEach(tutorial => {
        console.log(`    ${tutorial.name} (${tutorial.sprache})    ${tutorial.datum.toLocaleDateString()}`);
        console.log(`    ${tutorial.beschreibung}`);
        console.log(`    ${getDauerInStundenUndMinuten(tutorial.dauer)}`);
        console.log(`    ${tutorial.embedCodeOrUrl}`);
        tutorial.kapitelliste.forEach(kapitel => {
            console.log(`        ${kapitel.dauer}   ${kapitel.name}:`);
            console.log(`            ↳${kapitel.beschreibung}`);
        });
    });
});
