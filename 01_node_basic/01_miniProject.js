const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "01_miniProject.txt");

// Add note
function addNote(note) {
  fs.appendFile(filePath, note + "\n", (err) => {
    if (err) {
      throw err;
    }
    console.log("Note Added");
  });
}

// Read Note
function readNotes() {
  if (!fs.existsSync(filePath)) {
    console.log("No note found!");
    return;
  }

  const stream = fs.createReadStream(filePath, { encoding: "utf8" });

  console.log("📖 All Notes:");
  stream.on("data", (chunk) => {
    console.log(chunk);
  });

  stream.on("end", () => {
    console.log("--- End of Notes ---");
  });
}

// updated file 
function updateNotes(oldText, newText){
    fs.readFile(filePath,'utf-8', (err, data) => {
        if (err) throw err;
        const updatedDate = data.replace(oldText, newText)
        
        fs.writeFile(filePath, updatedDate, (err) => {
            if (err) {
                throw err
            }
            console.log("Notes Updates")
        })
    })
}

// delete note 
function deleteNote(textToDel){
    fs.readFile(filePath, 'utf-8', (err, data) => {
        // convert lines into array 
        const lines = data.split('\n')
        const filteredLines = lines.filter(
            line => line !== textToDel
        )
        fs.writeFile(filePath, filteredLines.join('\n'), (err) => {
            if (err) throw err
            console.log("Note Delete Successfully!")
        })
    })
}

// Run function
// addNote("Imad Uddin Zia");
// addNote("Sameer Qazi")
// readNotes();
// updateNotes("Sameer", "Imad Uddin Zia")
deleteNote("Imad")