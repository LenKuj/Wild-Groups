let students = ["Mireia", "Sandra", "Ailin", "Akash", "Binay", "Maca", "Lena", "Rut", "Julie", "Vlada"];
let buttons = [
    {
        id: 'two-groups-button',
        size: 5
    },
    {
        id: 'three-groups-button',
        size: 3
    },
    {
        id: 'pairs-button',
        size: 2
    }
]
// when button is clicked it will grab whahever was on the input and will display it after

document.getElementById('add-person-button').addEventListener('click', () => {

    // need to acces the input
    // grab the value
    // push it to the students array

    students.push(document.getElementById('input-person').value)
    console.log(students)
    //clear the input
    document.getElementById('input-person').value = ""
    // to display
    // loop over the array of students and display them on the div
    let studentsToString = "";
    students.map( student => studentsToString += `<p>${student}</p>`)
    document.getElementById('people-container').innerHTML = studentsToString;
})

// function to give all buttons some functionality
let createButtonsFunctionality = () => {
    buttons.map( button => {
        document.getElementById(button.id).addEventListener('click', () => {
            shuffle(students)
            createAndAddGroups(students, button.size)
        })
    })
}
// call the function when JS loads
createButtonsFunctionality()





// function in charge of splitting students into groups
createAndAddGroups = (array, groupSize) => {
    let arrayCopy = [...array]; // copy of the original array
    let arrayHelper = []; // array where we work on

    // while the length is bigger than the copy, splice it in the number of groups we want
    while(arrayCopy.length > 0) arrayHelper.push(arrayCopy.splice(0, groupSize))

    // fix the problem with last item of the array if lenght % 2 != 0
    if (arrayHelper[arrayHelper.length - 1].length != arrayHelper[arrayHelper.length - 2].length) {
        let lastElementRemoved = arrayHelper.pop();
        arrayHelper[arrayHelper.length - 2] = [...arrayHelper[arrayHelper.length - 2], ...lastElementRemoved]
    }

    // display the groups on the html
    let studentsToString = "";
    arrayHelper.map( student => studentsToString += `<p>${student}</p>`)
    document.getElementById('groups-displayed').innerHTML = studentsToString;
}


// shuffle method
shuffle = array => {
    let m = array.length, t, i;
    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}


