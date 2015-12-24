function acrony(input, option) {
    "use strict";
    var bfr, index, output;
    index = 1;
    option = Number(option);
    if (typeof input === "string" && /^(0|1)$/.test(option)) {
        if (input !== "") {
            bfr = input.toString().replace(/(\s|[^A-Za-z0-9])/g, " ").split(" "); // this RegExp filter and the splitting reference can be modified all you want.
            bfr.forEach(function (v, i) { // get the first letter.
                bfr[i] = v.substring(0, 1).toUpperCase();
            });
            if (option === 1) { // using number to mark same consecutive chars.
                bfr.forEach(function (v, i) {
                    if (v === bfr[i + 1]) {
                        bfr[i] = "";
                    }
                });
                bfr.forEach(function (v, i) { // the thingy.
                    if (v === "") {
                        index += 1;
                    } else {
                        if (index > 1) {
                            bfr[i] = v + index;
                        }
                        index = 1;
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
