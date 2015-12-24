function acrony(input, option) {
    "use strict";
    var bfr, index, output;
    index = 1;
    option = Number(option);
    if (typeof input === "string" && /^(0|1)$/.test(option)) {
        if (input !== "") {
            bfr = input.toString().replace(/[^A-Za-z0-9]+/g, " ").split(" ");
            bfr.forEach(function (v, i) { // get first letter ► toUpperCase.
                bfr[i] = v.substring(0, 1).toUpperCase();
            });
            if (option === 1) { // add number for same consecutive chars.
                bfr.forEach(function (v, i) {
                    if (v === bfr[i + 1]) {
                        bfr[i] = "_____"; // marker.
                    }
                });
                bfr.forEach(function (v, i) {
                    if (v === "_____") { // count same occurrence.
                        index += 1;
                    } else {
                        if (index > 1) {
                            bfr[i] = v + index; // put occurrence.
                        }
                        index = 1;
                    }
                });
                bfr.forEach(function (v, i) {
                    if (v === "_____") {
                        bfr[i] = ""; // remove marker.
                    }
                });
                index = 1;
            }
            output = bfr.join("");
        } else {
            output = "ERROR: input is empty.";
        }
    } else {
        output = "ERROR: acrony(input_string, option [0 or 1])";
    }
    return output;
}
