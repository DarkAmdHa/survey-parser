import { DocumentIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import Papa from "papaparse";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import Copy from "../components/Copy";
import JsonFormatter from "react-json-formatter";

function FirstSurveyExPost() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [parsedContent, setParsedContent] = useState(null);

  const fileInputRef = useRef(null);

  const generateRandomValues = (finalData) => {
    const races = [
      "African American",
      "European American",
      "Asian American",
      "American Indian or Alaska Native",
      "Native Hawaiian or Other Pacific Islander",
    ];
    const genders = ["Male", "Female"];
    const ages = [
      12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 35, 45, 40, 39, 38, 37, 36, 35,
      34, 33, 32, 31,
    ];

    const ids = [];
    const finalDataParsed = finalData.map((item, index) => {
      //Randomize:
      let id;
      do {
        id = Math.floor(Math.random() * 100000000);
      } while (ids.find((item) => item == id));
      let otherRaceFactor = false;
      if (Math.floor(Math.random() * 1000) >= 750) {
        otherRaceFactor = true;
      }

      // return ({
      //   id: item.ResponseId,
      //   returnValue: item.returnValue ?? "",
      //   returnPercentage: item.returnPercentage ?? "",
      //   startDate: item.StartDate,
      //   strategy: item.Q32,
      //   race: item.Q12,
      //   otherRace: item.Q8 ?? "",
      //   gender: item.Q7,
      //   age: item.Q10,
      // })

      const returnPercs = [
        13.48, -4.12, 11.67, -14.55, 8.92, -7.34, 2.89, -10.45, 5.76, -6.23,
        14.35, -9.84, 0.57, 7.65, -1.23, 3.67, -13.79, 6.89, -3.45, 12.34,
        -11.56, 1.89, 9.78, -5.67, 4.56, -8.23, 10.12, -2.89, 13.49, -12.23,
      ];

      const returnInd = Math.floor(Math.random() * returnPercs.length);
      return {
        id: item.ResponseId + id,
        returnValue: 500 * (1 + returnPercs[returnInd] / 100),
        returnPercentage: returnPercs[returnInd],
        startDate: item.StartDate,
        strategy: item.Q32 + " " + "NUMBER: " + index,
        race: otherRaceFactor
          ? ""
          : races[Math.floor(Math.random() * races.length)],
        otherRace: otherRaceFactor ? "TEST OTHER RACE" : "",
        gender: genders[Math.floor(Math.random() * genders.length)],
        age: ages[Math.floor(Math.random() * ages.length)],
      };
    });

    const finalRaces = finalDataParsed.map((itm) => itm.race);
    const finalOtherRaces = finalDataParsed.map((itm) => itm.otherRace);
    const finalStrat = finalDataParsed.map((itm) => itm.strategy);
    const finalAges = finalDataParsed.map((itm) => itm.age);
    const finalIds = finalDataParsed.map((itm) => itm.id);
    const finalReturnsVals = finalDataParsed.map((itm) => itm.returnValue);
    const finalReturnsPerc = finalDataParsed.map((itm) => itm.returnPercentage);
    const finalGenders = finalDataParsed.map((itm) => itm.gender);

    return finalDataParsed;
  };

  const handleFileChange = (e) => {
    setIsLoading(true);
    try {
      const newFile = e.target.files[0];
      if (newFile) {
        if (newFile.type === "text/csv" && newFile.size <= 10 * 1024 * 1024) {
          Papa.parse(newFile, {
            complete: (results) => {
              const headers = results.data[0];
              const finalData = results.data.slice(2);

              //Make sure data has return percentage and return value for all:
              const issueItem = finalData.find(
                (item) =>
                  !item.returnPercentage ||
                  !item.returnValue ||
                  !item.ResponseId
              );
              if (issueItem) {
                alert(
                  "One of the responses has the return value, return percentage or the response ID empty"
                );
                fileInputRef.current.value = null;
                return;
              }

              // const finalDataParsed = generateRandomValues(finalData);
              const finalDataParsed = finalData.map((item, index) => ({
                id: item.ResponseId,
                returnValue: item.returnValue ?? "",
                returnPercentage: item.returnPercentage ?? "",
                startDate: item.StartDate,
                strategy: item.Q32,
                race: item.Q12,
                otherRace: item.Q8 ?? "",
                gender: item.Q7,
                age: item.Q10,
              }));

              //Used to get console data for CSV: console.log(finalReturnsVals.join('\n')) etc

              //   if (
              //     Object.keys(headers).includes("Business Name") &&
              //     Object.keys(headers).includes("Business URL")
              //   ) {
              setFile(newFile);
              setFileName(newFile.name);
              setIsValid(true);
              setParsedContent(finalDataParsed);
              //   } else {
              //     setFile(null);
              //     setFileName("");
              //     setIsValid(false);
              //     toast.error(
              //       "CSV must contain 'Business Name' and 'Business URL' columns."
              //     );
              //   }
            },
            header: true,
          });
        } else {
          setFile(null);
          setFileName("");
          setIsValid(false);
          toast.error("Please upload a valid CSV file less than 5MB in size.");
        }
      }
    } catch (error) {
      console.error("Something went wrong while parsing the file:", error);
      toast.error("Something went wrong while parsing the file.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileRemove = () => {
    setFile(null);
    setFileName("");
    setIsValid(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const jsonStyle = {
    propertyStyle: { color: "white" },
    stringStyle: { color: "red" },
    numberStyle: { color: "darkorange" },
  };

  return (
    <div className="">
      <div className="border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <form className="bg-gray-800 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-white"
              >
                Exported Data
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10 relative overflow-hidden">
                {isLoading && (
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center z-20">
                    <Spinner />
                  </div>
                )}

                <div className="text-center">
                  <DocumentIcon
                    aria-hidden="true"
                    className="mx-auto h-12 w-12 text-gray-500"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-400 items-center">
                    <label
                      htmlFor="bulk-import-csv"
                      className="relative cursor-pointer rounded-md p-2 bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="bulk-import-csv"
                        name="bulk-import-csv"
                        type="file"
                        accept=".csv"
                        className="sr-only"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  {fileName && (
                    <div className="mt-2 text-gray-400 flex items-center">
                      <p>{fileName}</p>
                      <button
                        type="button"
                        onClick={handleFileRemove}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <XCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                  <p className="text-xs leading-5 text-gray-400">
                    CSV of size up to 5MB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-6 sm:p-8">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-white"
              >
                Parsed Data
              </label>
              <div className="mt-2 flex rounded-lg  p-0 relative overflow-hidden  border border-gray-700 bg-gray-700">
                <div className=" w-full h-96 overflow-auto">
                  <div className=" flex text-sm leading-6 text-gray-400 w-full h-full  ">
                    <div className="bg-transparent color-white w-full whitespace-break-spaces break-words p-8">
                      {parsedContent ? (
                        <JsonFormatter
                          json={parsedContent}
                          tabWith={4}
                          jsonStyle={jsonStyle}
                        />
                      ) : (
                        "N/A"
                      )}
                    </div>
                  </div>
                </div>
                {parsedContent && <Copy text={JSON.stringify(parsedContent)} />}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FirstSurveyExPost;
