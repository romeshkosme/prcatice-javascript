const fs = require("fs");
const CsvReadableStream = require("csv-reader");
const fsWrite = fs.createWriteStream("./report.txt");
const fsRead = fs.createReadStream("temp.csv", "utf8");
const reports = [];
fsRead
  .on("error", (error) => {
    console.log(error);
  })
  .pipe(
    new CsvReadableStream({
      parseNumbers: true,
      parseBooleans: true,
      trim: true,
      asObject: true,
    })
  )
  .on("data", function (row) {
    reports.push(row);
  })
  .on("end", () => {
    complete();
  });

// WRITE REPORT
function complete() {
  for (const report of reports) {
    for (const key in report) {
      fsWrite.write(report[key] + " | ");
    }
    fsWrite.write('\n')
  }
  fsWrite.on("error", (err) => console.log(err));
  fsWrite.close();
}
