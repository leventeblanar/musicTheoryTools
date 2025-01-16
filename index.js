
const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/A", "A", "A#/Bb", "B"]
const chordTypes = {
    "Major": [0, 4, 7],
    "Minor": [0, 3, 7],
    "Diminished": [0, 3, 6],
    "Augmented": [0, 4, 8]
};

function findNotes(){
    const noteDropDown = document.getElementById("noteDropDown").value;
    const chordDropDown = document.getElementById("chordDropDown").value;
    const noteResults = document.getElementById("noteResults");

    const rootIndex = notes.indexOf(noteDropDown);

    const chordIntervals = chordTypes[chordDropDown];
    const chordNotes = chordIntervals.map(interval => notes[(rootIndex + interval) % notes.length]);

    resultText.innerHTML = `The notes for ${noteDropDown} ${chordDropDown} are:`
    noteResults.innerHTML =  `${chordNotes.join(", ")}`;
}