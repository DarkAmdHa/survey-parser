const s = JSON.parse(
  '[{"id":"R_4lDjUcOzJ368wCg","returnValue":"534.5689316","returnPercentage":"6.913786325","startDate":"2024-04-02 8:34:18","strategy":"Tech","race":"Some Other Race","otherRace":"African","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIL","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIM","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIN","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIO","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIP","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIQ","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIG","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIH","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjII","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIJ","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"},{"id":"R_42LTDCpDU9OHjIK","returnValue":"522.576203","returnPercentage":"4.515240599","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"22","gender":"Male","age":"12"}]'
);

const total = 250;
const races = [
  "African American",
  "European American",
  "Asian American",
  "American Indian or Alaska Native",
  "Native Hawaiian or Other Pacific Islander",
];
const genders = ["Male", "Female"];
const ages = [
  12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 35, 45, 40, 39, 38, 37, 36, 35, 34,
  33, 32, 31,
];
const newDatas = [];
const ids = [];
for (let i = 0; i < total; i++) {
  const newData = { ...s[Math.floor(Math.random() * 12)] };
  let id;
  do {
    id = Math.floor(Math.random() * 100000000);
  } while (ids.find((item) => item == id));

  newData.id = newData.id + id;
  newData.strategy = newData.strategy + " " + "NUMBER: " + i;
  if (Math.floor(Math.random() * 1000) < 750) {
    newData.otherRace = "";
    newData.race = races[Math.floor(Math.random() * races.length)];
  } else {
    newData.otherRace = "TEST OTHER RACE";
    newData.race = "Other";
  }

  newData.gender = genders[Math.floor(Math.random() * genders.length)];
  newData.age = ages[Math.floor(Math.random() * ages.length)];

  newDatas.push(newData);
}

JSON.stringify(newDatas, null, 1);
