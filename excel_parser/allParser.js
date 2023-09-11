const excelToJson = require('../node_modules/convert-excel-to-json');
const fs = require("fs");
const filesPath = '../files/excel/Researchinsp_2023.xlsx'

const result = excelToJson({
    sourceFile: filesPath,

    header: {
        rows: 2
    },
    sheets: [
        {
            name: 'М',
            header: {
                rows: 2
            }
        }]

})


setTimeout(() => {
    const ll = result
    console.log(ll)

    // for (key in ll.M[0]) {
    //     console.log(key)
    // }
},6000)



// function keys() {
//     const ll = result.M
//     console.log(ll)
//     for (key in ll) {
//         console.log(key)
//     }
// }
//
//
// keys()



// const resultToJSON = JSON.stringify(result)

// console.log(resultToJSON)

// fs.writeFile(`../files/json/Researchinsp.json`, resultToJSON, (err) => {
//     if (err) throw err;
//     console.log("Успешно");
// });