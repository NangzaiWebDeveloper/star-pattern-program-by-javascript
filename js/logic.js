// for(let i=1; i<=5; i++){

//     for(let j=1; j<=i; j++){
//         document.write("*")
//     }

//     document.write("<br/>")
// }

let output = '';
for(let i=1; i<=5; i++) {
    for(let j=1; j<=i; j++) {
        output = output + '*';
    }
    output += '<br/>'; // Newline for HTML
}
document.body.innerHTML = output; // Inserts into the page