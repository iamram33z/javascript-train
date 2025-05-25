console.log("Hello, World!");
console.log("This is a simple JavaScript file.");
// This script logs messages to the console //
/*Block comment
    This is a multi-line comment.
    It can span multiple lines.
    */

// Create an example Object for Student Details
const student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am studying ${this.major}.`);
    }
};

// Call the greet method of the student object
student.greet();

// Call the object's properties
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
// Log the student's major
console.log(`Major: ${student.major}`);