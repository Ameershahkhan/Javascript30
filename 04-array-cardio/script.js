
const people = [
    "Beck, Glenn", "Becker, Carl", "Backet, Samuel", "Beddoes, Mick", "Beecher, Henry",
    "Beethoven, lodwick", "Begin, Manachem", "Beloc, Hilaire", "Bellow, Saul", "Benchley, Robert",
    "Beneson, Peter", "Ben-Gurion, David", "Benjamin, Walter", "Ben, Tony", "Benington, Chester",
    "Benson, Leana", "Bent, Silas", "Benson, Lloyd", "Berger, Ric", "Bergmen, Ingmar",
    "Burio, Luciano", "Berle, Milton", "Berlin, Irving", "Berne, Eric", "Bernhard, sandra",
    "Berra, Yogi", "Berry, Halle", "Berry, Wendell", "Bethea, Erin", "Bewan, Aneurin",
    "Bewwl, Ken", "Biden, Joseph", "Bierce, Embroce", "Biko, Steve", "Billings, Josh",
    "Biondo, Frank", "Birrell, Augustine", "Black, Elt", "Blaire, Robert", "Blaire, Tony", 
    "Blake, William"
]


const inventors = [
    {first: "Albert", last: "Einstien", year: 1879, passed: 1955},
    {first: "Issac", last: "Newton", year: 1643, passed: 1727},
    {first: "Galileo", last: "Galilei", year:1564 , passed: 1642},
    {first: "Marie", last: "Curie", year: 1867, passed: 1934},
    {first: "Johannes", last: "Kepler", year: 1571, passed: 1630},
    {first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543},
    {first: "Max", last: "Planck", year: 1858, passed: 1947},
]

// .filter()
// filter the list of inventors for those who were born in the 1500's..

const fifteenCentury = inventors.filter(inventor => inventor.year >= 1500 & inventor.year <= 1600);
console.table(fifteenCentury)


// .map()
// give us an array of inventors first and last names..

const introOfInventors = inventors.map(inventor => `${inventor.first}, ${inventor.last}`)

console.table(introOfInventors)

// .sort()
// sort the inventors by birth-date, oldest to youngest

const sorted = inventors.sort((a,b) => {
    if (a.year >  b.year){
        return 1
    }else{
        return -1
    }
});

// using ternary operator...

const ordered = inventors.sort((a, b) =>  a.year > b.year ? 1 : -1)

console.table(sorted)
console.table(ordered)


// .reduce()
// how many years did all the inventors live..

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
},0)

console.table(totalYears)

// sort the inventors by years lived...

const sortedByLived = inventors.sort((a,b) => {
    if ((a.passed - a.year) > (b.passed - b.year)){
        return -1
    }else{
        return 1
    }
});

console.table(sortedByLived)


// some up the instances of each..

const data = ["car", "car", "car", "bike", "bike", "remote", "engine", "engine"]

const countData = data.reduce(function(record, d){
    if(!record[d]){
        record[d] = 0
    }
    record[d] += 1;
    return record
}, {})

console.log(countData)