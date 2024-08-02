const total = 100;
const allResponses = [{"id":"R_4lDjUcOzJ368wCg79203398","returnValue":"571.75","returnPercentage":"14.35","startDate":"2024-04-02 8:34:18","strategy":"Tech","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Female","age":"30"},{"id":"R_42LTDCpDU9OHjIL6937109","returnValue":"567.45","returnPercentage":"13.49","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Female","age":"16"},{"id":"R_42LTDCpDU9OHjIM61989058","returnValue":"514.45","returnPercentage":"2.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"38"},{"id":"R_42LTDCpDU9OHjIN10556321","returnValue":"463.3","returnPercentage":"-7.34","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Male","age":"16"},{"id":"R_42LTDCpDU9OHjIO36827033","returnValue":"479.4","returnPercentage":"-4.12","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Female","age":"31"},{"id":"R_42LTDCpDU9OHjIP85186631","returnValue":"561.7","returnPercentage":"12.34","startDate":"2024-04-02 8:37:27","strategy":"II","race":"American Indian or Alaska Native","otherRace":"","gender":"Female","age":"36"},{"id":"R_42LTDCpDU9OHjIQ78893395","returnValue":"514.45","returnPercentage":"2.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"34"},{"id":"R_42LTDCpDU9OHjIG33816802","returnValue":"427.25","returnPercentage":"-14.55","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Male","age":"15"},{"id":"R_42LTDCpDU9OHjIH87921710","returnValue":"493.85","returnPercentage":"-1.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"American Indian or Alaska Native","otherRace":"","gender":"Female","age":"39"},{"id":"R_42LTDCpDU9OHjII19701543","returnValue":"493.85","returnPercentage":"-1.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"12"},{"id":"R_42LTDCpDU9OHjIJ83048885","returnValue":"438.85","returnPercentage":"-12.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Female","age":"20"},{"id":"R_42LTDCpDU9OHjIK33982355","returnValue":"522.8","returnPercentage":"4.56","startDate":"2024-04-02 8:37:27","strategy":"II","race":"American Indian or Alaska Native","otherRace":"","gender":"Female","age":"30"},{"id":"R_4lDjUcOzJ368wCg28216344","returnValue":"502.85","returnPercentage":"0.57","startDate":"2024-04-02 8:34:18","strategy":"Tech","race":"American Indian or Alaska Native","otherRace":"","gender":"Male","age":"19"},{"id":"R_42LTDCpDU9OHjIL60214659","returnValue":"493.85","returnPercentage":"-1.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Female","age":"30"},{"id":"R_42LTDCpDU9OHjIM71859434","returnValue":"438.85","returnPercentage":"-12.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Male","age":"40"},{"id":"R_42LTDCpDU9OHjIN63265826","returnValue":"522.8","returnPercentage":"4.56","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Female","age":"12"},{"id":"R_42LTDCpDU9OHjIO78030304","returnValue":"514.45","returnPercentage":"2.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Male","age":"38"},{"id":"R_42LTDCpDU9OHjIP26344680","returnValue":"502.85","returnPercentage":"0.57","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Female","age":"17"},{"id":"R_42LTDCpDU9OHjIQ54384101","returnValue":"502.85","returnPercentage":"0.57","startDate":"2024-04-02 8:37:27","strategy":"II","race":"African American","otherRace":"","gender":"Male","age":"38"},{"id":"R_42LTDCpDU9OHjIG38163852","returnValue":"550.6","returnPercentage":"10.12","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Female","age":"14"},{"id":"R_42LTDCpDU9OHjIH80476248","returnValue":"479.4","returnPercentage":"-4.12","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Female","age":"31"},{"id":"R_42LTDCpDU9OHjII64153907","returnValue":"567.4","returnPercentage":"13.48","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Asian American","otherRace":"","gender":"Female","age":"37"},{"id":"R_42LTDCpDU9OHjIJ5020455","returnValue":"558.35","returnPercentage":"11.67","startDate":"2024-04-02 8:37:27","strategy":"II","race":"African American","otherRace":"","gender":"Male","age":"34"},{"id":"R_42LTDCpDU9OHjIK80363813","returnValue":"567.45","returnPercentage":"13.49","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"40"},{"id":"R_4lDjUcOzJ368wCg86615200","returnValue":"442.2","returnPercentage":"-11.56","startDate":"2024-04-02 8:34:18","strategy":"Tech","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"13"},{"id":"R_42LTDCpDU9OHjIL92314105","returnValue":"514.45","returnPercentage":"2.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Asian American","otherRace":"","gender":"Female","age":"16"},{"id":"R_42LTDCpDU9OHjIM66975975","returnValue":"561.7","returnPercentage":"12.34","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"33"},{"id":"R_42LTDCpDU9OHjIN95076438","returnValue":"518.35","returnPercentage":"3.67","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Male","age":"35"},{"id":"R_42LTDCpDU9OHjIO87541878","returnValue":"450.8","returnPercentage":"-9.84","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"45"},{"id":"R_42LTDCpDU9OHjIP75100156","returnValue":"514.45","returnPercentage":"2.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"40"},{"id":"R_42LTDCpDU9OHjIQ71325537","returnValue":"438.85","returnPercentage":"-12.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"American Indian or Alaska Native","otherRace":"","gender":"Male","age":"40"},{"id":"R_42LTDCpDU9OHjIG2799209","returnValue":"514.45","returnPercentage":"2.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Asian American","otherRace":"","gender":"Female","age":"37"},{"id":"R_42LTDCpDU9OHjIH93102485","returnValue":"548.9","returnPercentage":"9.78","startDate":"2024-04-02 8:37:27","strategy":"II","race":"American Indian or Alaska Native","otherRace":"","gender":"Male","age":"38"},{"id":"R_42LTDCpDU9OHjII18875892","returnValue":"502.85","returnPercentage":"0.57","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Female","age":"32"},{"id":"R_42LTDCpDU9OHjIJ71173284","returnValue":"509.45","returnPercentage":"1.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Male","age":"19"},{"id":"R_42LTDCpDU9OHjIK99700581","returnValue":"447.75","returnPercentage":"-10.45","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Male","age":"35"},{"id":"R_4lDjUcOzJ368wCg69021451","returnValue":"485.55","returnPercentage":"-2.89","startDate":"2024-04-02 8:34:18","strategy":"Tech","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"16"},{"id":"R_42LTDCpDU9OHjIL99727133","returnValue":"558.35","returnPercentage":"11.67","startDate":"2024-04-02 8:37:27","strategy":"II","race":"African American","otherRace":"","gender":"Female","age":"33"},{"id":"R_42LTDCpDU9OHjIM44573251","returnValue":"522.8","returnPercentage":"4.56","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Female","age":"17"},{"id":"R_42LTDCpDU9OHjIN39555224","returnValue":"471.65","returnPercentage":"-5.67","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Female","age":"39"},{"id":"R_42LTDCpDU9OHjIO30922677","returnValue":"528.8","returnPercentage":"5.76","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Female","age":"34"},{"id":"R_42LTDCpDU9OHjIP38161934","returnValue":"468.85","returnPercentage":"-6.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"American Indian or Alaska Native","otherRace":"","gender":"Female","age":"34"},{"id":"R_42LTDCpDU9OHjIQ76114745","returnValue":"427.25","returnPercentage":"-14.55","startDate":"2024-04-02 8:37:27","strategy":"II","race":"American Indian or Alaska Native","otherRace":"","gender":"Female","age":"13"},{"id":"R_42LTDCpDU9OHjIG21378693","returnValue":"442.2","returnPercentage":"-11.56","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Male","age":"33"},{"id":"R_42LTDCpDU9OHjIH97845380","returnValue":"550.6","returnPercentage":"10.12","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Male","age":"39"},{"id":"R_42LTDCpDU9OHjII46720345","returnValue":"509.45","returnPercentage":"1.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"African American","otherRace":"","gender":"Male","age":"30"},{"id":"R_42LTDCpDU9OHjIJ95385276","returnValue":"522.8","returnPercentage":"4.56","startDate":"2024-04-02 8:37:27","strategy":"II","race":"African American","otherRace":"","gender":"Female","age":"38"},{"id":"R_42LTDCpDU9OHjIK68974824","returnValue":"458.85","returnPercentage":"-8.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Male","age":"37"},{"id":"R_4lDjUcOzJ368wCg29505140","returnValue":"509.45","returnPercentage":"1.89","startDate":"2024-04-02 8:34:18","strategy":"Tech","race":"American Indian or Alaska Native","otherRace":"","gender":"Female","age":"36"},{"id":"R_42LTDCpDU9OHjIL37563908","returnValue":"518.35","returnPercentage":"3.67","startDate":"2024-04-02 8:37:27","strategy":"II","race":"European American","otherRace":"","gender":"Female","age":"36"},{"id":"R_42LTDCpDU9OHjIM29683212","returnValue":"468.85","returnPercentage":"-6.23","startDate":"2024-04-02 8:37:27","strategy":"II","race":"African American","otherRace":"","gender":"Female","age":"40"},{"id":"R_42LTDCpDU9OHjIN40201895","returnValue":"509.45","returnPercentage":"1.89","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Male","age":"32"},{"id":"R_42LTDCpDU9OHjIO25503322","returnValue":"567.45","returnPercentage":"13.49","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Asian American","otherRace":"","gender":"Female","age":"34"},{"id":"R_42LTDCpDU9OHjIP7640624","returnValue":"442.2","returnPercentage":"-11.56","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Asian American","otherRace":"","gender":"Male","age":"14"},{"id":"R_42LTDCpDU9OHjIQ13149489","returnValue":"482.75","returnPercentage":"-3.45","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Asian American","otherRace":"","gender":"Female","age":"15"},{"id":"R_42LTDCpDU9OHjIG22939095","returnValue":"528.8","returnPercentage":"5.76","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Asian American","otherRace":"","gender":"Female","age":"37"},{"id":"R_42LTDCpDU9OHjIH77215105","returnValue":"447.75","returnPercentage":"-10.45","startDate":"2024-04-02 8:37:27","strategy":"II","race":"","otherRace":"TEST OTHER RACE","gender":"Male","age":"32"},{"id":"R_42LTDCpDU9OHjII94202460","returnValue":"431.05","returnPercentage":"-13.79","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"","gender":"Male","age":"15"},{"id":"R_42LTDCpDU9OHjIJ27157050","returnValue":"528.8","returnPercentage":"5.76","startDate":"2024-04-02 8:37:27","strategy":"II","race":"African American","otherRace":"","gender":"Male","age":"45"},{"id":"R_42LTDCpDU9OHjIK90612642","returnValue":"471.65","returnPercentage":"-5.67","startDate":"2024-04-02 8:37:27","strategy":"II","race":"Native Hawaiian or Other Pacific Islander","otherRace":"TEST OTHER RACE","gender":"Male","age":"16"}];

const investorsToSelect = 6;
const selectScreensAndResponses = (allResponsesNew) => {
  let pageWhite = 3;
  let pageBlack = 3;

  let whiteInvestors = allResponsesNew.filter((inv) =>
    inv.race.toLowerCase().includes("european")
  );
  let blackInvestors = allResponsesNew.filter((inv) =>
    inv.race.toLowerCase().includes("african")
  );
  let otherInvestors = allResponsesNew.filter(
    (inv) =>
      !inv.race.toLowerCase().includes("african") &&
      !inv.race.toLowerCase().includes("european")
  );

  const investorsToBeShown = [];
  let selectedInvestor = undefined;

  const removeItemFromGlobalAndLocal = (id, local) => {
    allResponsesNew = allResponsesNew.filter(
      (item) => item.id != id
    );
    if (local === "white")
      whiteInvestors = whiteInvestors.filter((item) => item.id != id);
    else if (local === "black")
      blackInvestors = blackInvestors.filter((item) => item.id != id);
    else otherInvestors = otherInvestors.filter((item) => item.id != id);
  };
  const shuffleArray = (array) => {
    let len = array.length,
      currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
      let randIndex = Math.floor(Math.random() * (currentIndex + 1));
      var temp = array[currentIndex];
      array[currentIndex] = array[randIndex];
      array[randIndex] = temp;
    }
  };


  for (var i = 0; i < investorsToSelect; i++) {
    let selectedItem;
    if (pageWhite != 0 && whiteInvestors.length) {
      const randomIndex = Math.floor(Math.random() * whiteInvestors.length);
      selectedItem = whiteInvestors[randomIndex];
      pageWhite--;
      removeItemFromGlobalAndLocal(selectedItem.id, "white");
    } else if (pageBlack != 0 && blackInvestors.length) {
      const randomIndex = Math.floor(Math.random() * blackInvestors.length);
      selectedItem = blackInvestors[randomIndex];
      pageBlack--;
      removeItemFromGlobalAndLocal(selectedItem.id, "black");
    } else if (otherInvestors.length) {
      const randomIndex = Math.floor(Math.random() * otherInvestors.length);
      selectedItem = otherInvestors[randomIndex];
      removeItemFromGlobalAndLocal(selectedItem.id, "other");
    }
    selectedItem && investorsToBeShown.push(selectedItem);

    // Shuffle array more:
    shuffleArray(investorsToBeShown);
  }

      //Select Investors
      const selectIndex = Math.floor(Math.random() * investorsToSelect);
      const finalChoice = investorsToBeShown[selectIndex];
      return {
        chosen: finalChoice.id,
        choices: JSON.stringify(investorsToBeShown.map(inv=>inv.id)),
        bA: finalChoice.race.toLowerCase().includes('african') ? 500 : 0,
        wA:finalChoice.race.toLowerCase().includes('european') ? 500 : 0,
        oA: !finalChoice.race.toLowerCase().includes('european') && !finalChoice.race.toLowerCase().includes('african') ? 500 : 0,
      }
};

const survey2Data = [];
const ids = [];
for (let i = 0; i < 100; i++) {
    let allResponsesNew = [...allResponses];
    let userChoices = {}

    let id;
    do {
      id = Math.floor(Math.random() * 100000000);
    } while (ids.find((item) => item == id));
    
  for (let i = 0; i < 3; i++) {
    const data = selectScreensAndResponses(allResponsesNew);
    userChoices = {
      ...userChoices,
      [`Page ${i+1} Chosen Advisor`]: data.chosen,
      [`Page ${i+1} Shown Choices`]: data.choices,
      [`Page ${i+1} total amount allocated to ethnicity=Black advisors`]: data.bA,
      [`Page ${i+1} total amount allocated to ethnicity=White advisors`]: data.wA,
      [`Page ${i+1} total amount allocated to ethnicity=Other advisors`]: data.oA,
    }
    if(i == 2){
      //Final Payoff And Final Payoff hundreds:
      let finalSelectedChoices = [userChoices["Page 1 Chosen Advisor"],userChoices["Page 2 Chosen Advisor"],userChoices["Page 3 Chosen Advisor"]]
      const selectedScreen = Math.floor(Math.random() * 3 + 1)
      const choiceForPayout = finalSelectedChoices[selectedScreen - 1]
      const selectedAdvisor = allResponses.find(respondent=>respondent.id == choiceForPayout)

      let finalPayoff = ((+selectedAdvisor.returnValue)/100).toFixed(2);

      userChoices.screenSelected =selectedScreen;
      userChoices.finalPayoffHundreds = "$" + selectedAdvisor.returnValue;
      userChoices.finalPayoff = "$" + finalPayoff; 
    }
  }
  console.log(userChoices)
  survey2Data.push({id, ...userChoices})
}

console.log(survey2Data)
console.log("******ID*****")
console.log(survey2Data.map(itm=>itm.id).join('\n'))
console.log("******Page 1 Chosen Advisor*****")
console.log(survey2Data.map(itm=>itm["Page 1 Chosen Advisor"]).join('\n'))
console.log("******Page 2 Chosen Advisor*****")
console.log(survey2Data.map(itm=>itm["Page 2 Chosen Advisor"]).join('\n'))
console.log("******Page 3 Chosen Advisor*****")
console.log(survey2Data.map(itm=>itm["Page 3 Chosen Advisor"]).join('\n'))
console.log("******Page 1 Shown Choices*****")
console.log(survey2Data.map(itm=>itm["Page 1 Shown Choices"]).join('\n'))
console.log("******Page 2 Shown Choices*****")
console.log(survey2Data.map(itm=>itm["Page 2 Shown Choices"]).join('\n'))
console.log("******Page 3 Shown Choices*****")
console.log(survey2Data.map(itm=>itm["Page 3 Shown Choices"]).join('\n'))
console.log("******Page 1 Black Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 1 total amount allocated to ethnicity=Black advisors"]).join('\n'))
console.log("******Page 2 Black Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 2 total amount allocated to ethnicity=Black advisors"]).join('\n'))
console.log("******Page 3 Black Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 3 total amount allocated to ethnicity=Black advisors"]).join('\n'))
console.log("******Page 1 White Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 1 total amount allocated to ethnicity=White advisors"]).join('\n'))
console.log("******Page 2 White Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 2 total amount allocated to ethnicity=White advisors"]).join('\n'))
console.log("******Page 3 White Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 3 total amount allocated to ethnicity=White advisors"]).join('\n'))
console.log("******Page 1 Other Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 1 total amount allocated to ethnicity=Other advisors"]).join('\n'))
console.log("******Page 2 Other Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 2 total amount allocated to ethnicity=Other advisors"]).join('\n'))
console.log("******Page 3 Other Advisors*****")
console.log(survey2Data.map(itm=>itm["Page 3 total amount allocated to ethnicity=Other advisors"]).join('\n'))
console.log("******Final Payoff*****")
console.log(survey2Data.map(itm=>itm.finalPayoff).join('\n'))
console.log("******Final Payoff Hundreds*****")
console.log(survey2Data.map(itm=>itm.finalPayoffHundreds).join('\n'))

