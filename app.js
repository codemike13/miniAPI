const test = "\tThis is a test of the Mike-Boy system . . . . . . . . . . . . . . . . ..... .\n Dots test successful . . . . . .\nSuccessful-ish .. .. .. .. .. \n This Pip-Boy has been modified to give you a survivability Ass(ess)ment to\n To \n to \t toOOo \n toooo \n (FATAL ERROR)\n\n\n\n\n Is what will happen If you dont take Mike-Boy seriously \n\n\n\n\n\n Entering : Monitor MODE \n   - Haptics active 555\n - Magnetomer calibrating:\t\n North: Good\t\n South: Good\t\n East: Good \t\n West..(side): YUP \n\n Current Coordinates: \nlat: 73.9712° W \n long: 40.7831° N \n State: NY \n City: Manhattan \n  ... \n8th ave ..... \n9th floor. ....\n DFA......\n Sitting in Yurys chair presenting \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Click something below already you didn't have to wait for all of this. \n\n\n\n\n\n\n\n\n";
const display = document.getElementById("display");

const img = 'url("/blackUSA.jpg")';

function start() {
    let i = 0
    let picTimer = setInterval(() => {
        i++
        if (i === 3) {
            display.style.backgroundImage = "none"
                ;
            charByCharPrint(test)
            clearInterval(picTimer)
        }
    }, 1000);
}
function charByCharPrint(str) {
    let oneBone = ""
    let i = 0;
    if (i < str.length) {
        let timer = setInterval(() => {
            oneBone += str[i]
            display.innerText = oneBone;
            display.scrollTop = display.scrollHeight;
            i++
            if (i === str.length) {
                display.innerText = "";
                locate();
                clearInterval(timer)
            };
        }, 70);
    }
}
function locate() {
    setTimeout(() => {
        let xhttp = new XMLHttpRequest();
        let url = "https://api.airvisual.com/v2/cities?state=New York&country=USA&key=b8677816-a154-4ca1-9c31-584dfb80001a";
        xhttp.open("GET", url, true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const location = JSON.parse(xhttp.responseText);
                let state = location.data;
                display.innerText += " Here is A list of Citys in NYC to Check survivability LEvel\n"
                for (city in state) display.innerText += "\n" + state[city].city
            } else if (this.status == 404) {
                console.log("Not Found!");
            }

        };
    }, 1000);
}

start();


// charByCharPrint(test)


// xhttp.open("GET", url1, true);
// xhttp.send();
// setTimeout(() => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const whatToDo = JSON.parse(xhttp.responseText);

//             document.getElementById("result").innerText =
//                 whatToDo.activity

//         } else if (this.status == 404) {
//             console.log("Not Found!");
//         }

//     };
// }, 1000);

