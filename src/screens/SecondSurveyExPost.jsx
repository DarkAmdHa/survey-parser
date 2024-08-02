import { DocumentIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Copy from "../components/Copy";
import JsonFormatter from "react-json-formatter";

function SecondSurveyExPost() {
  const [data, setData] = useState(undefined);
  const [data2, setData2] = useState(undefined);

  const [fileName, setFileName] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [winningAdvisors, setWinningAdvisors] = useState([]);

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleFileChange = (e) => {
    setIsLoading(true);
    try {
      const newFile = e.target.files[0];
      if (newFile) {
        if (newFile.type === "text/csv") {
          Papa.parse(newFile, {
            complete: (results) => {
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

              const finalDataParsed = finalData.map((item) => ({
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

              setFileName(newFile.name);

              setData(finalDataParsed);
            },
            header: true,
          });
        } else {
          setFileName("");
          setData(undefined);
          toast.error("Please add a valid CSV file");
        }
      }
    } catch (error) {
      console.error("Something went wrong while parsing the file:", error);
      toast.error("Something went wrong while parsing the file.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange2 = (e) => {
    setIsLoading(true);
    try {
      const newFile = e.target.files[0];
      if (newFile) {
        if (newFile.type === "text/csv") {
          Papa.parse(newFile, {
            complete: (results) => {
              const finalData = results.data.slice(2);
              //   if (
              //     Object.keys(headers).includes("Business Name") &&
              //     Object.keys(headers).includes("Business URL")
              //   ) {

              //Make sure data has return percentage and return value for all:

              const issueItem = finalData.find(
                (item) =>
                  (!item.ResponseId && !item.id) ||
                  !item.finalPayoff ||
                  !item.finalPayoffHundreds ||
                  !item.screenSelected ||
                  !item["Page 1 Chosen Advisor"] ||
                  !item["Page 2 Chosen Advisor"] ||
                  !item["Page 3 Chosen Advisor"] ||
                  !item["Page 1 Shown Choices"] ||
                  !item["Page 2 Shown Choices"] ||
                  !item["Page 3 Shown Choices"] ||
                  !item[
                    "Page 1 total amount allocated to ethnicity=Black advisors"
                  ] ||
                  !item[
                    "Page 2 total amount allocated to ethnicity=Black advisors"
                  ] ||
                  !item[
                    "Page 3 total amount allocated to ethnicity=Black advisors"
                  ] ||
                  !item[
                    "Page 1 total amount allocated to ethnicity=White advisors"
                  ] ||
                  !item[
                    "Page 2 total amount allocated to ethnicity=White advisors"
                  ] ||
                  !item[
                    "Page 3 total amount allocated to ethnicity=White advisors"
                  ] ||
                  !item[
                    "Page 1 total amount allocated to ethnicity=Other advisors"
                  ] ||
                  !item[
                    "Page 2 total amount allocated to ethnicity=Other advisors"
                  ] ||
                  !item[
                    "Page 3 total amount allocated to ethnicity=Other advisors"
                  ]
              );
              if (issueItem) {
                alert(
                  "One of the values required is missing in one of the rows."
                );
                fileInputRef2.current.value = null;
                return;
              }

              const finalDataParsed = finalData.map((item) => ({
                id: item.ResponseId || item.id,
                finalPayoff: item.finalPayoff,
                screenSelected: item.screenSelected,
                page1ChosenAdvisor: item["Page 1 Chosen Advisor"],
                page2ChosenAdvisor: item["Page 2 Chosen Advisor"],
                page3ChosenAdvisor: item["Page 3 Chosen Advisor"],
                page1shownChoices: JSON.parse(item["Page 1 Shown Choices"]),
                page2shownChoices: JSON.parse(item["Page 2 Shown Choices"]),
                page3shownChoices: JSON.parse(item["Page 3 Shown Choices"]),
              }));

              setFileName2(newFile.name);

              setData2(finalDataParsed);
            },
            header: true,
          });
        } else {
          setFileName2("");
          setData2(undefined);

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
    setFileName("");
    setData(undefined);
    setWinningAdvisors([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  const handleFileRemove2 = () => {
    setFileName2("");
    setData2(undefined);
    setWinningAdvisors([]);

    if (fileInputRef2.current) {
      fileInputRef2.current.value = null;
    }
  };

  useEffect(() => {
    if (data && data2) {
      //Process Data
      setIsLoading(true);
      try {
        const advisorsWithAdditionalDollar = [];
        data.forEach((advisor) => {
          const appearances = data2.filter(
            (item) =>
              item.page1shownChoices.includes(advisor.id) ||
              item.page2shownChoices.includes(advisor.id) ||
              item.page3shownChoices.includes(advisor.id)
          );
          //console.log("Appeared "+ appearances.length + " times and is " + advisor.race)
          //sum+= appearances.length;
          let additionalDollar = 0;
          if (appearances.length) {
            const randomAppearance = Math.floor(
              Math.random() * appearances.length
            );
            if (
              appearances[randomAppearance].page1ChosenAdvisor == advisor.id ||
              appearances[randomAppearance].page2ChosenAdvisor == advisor.id ||
              appearances[randomAppearance].page3ChosenAdvisor == advisor.id
            ) {
              additionalDollar = 1;
              console.log("Advisor got additional dollar !");
            }
          }
          if (additionalDollar)
            advisorsWithAdditionalDollar.push({
              id: advisor.id,
              appearances: appearances.length,
              timesSelected: appearances.filter(
                (item) =>
                  item.page1ChosenAdvisor == advisor.id ||
                  item.page2ChosenAdvisor == advisor.id ||
                  item.page3ChosenAdvisor == advisor.id
              ).length,
            });
        });

        setWinningAdvisors(advisorsWithAdditionalDollar);
      } catch {
        alert("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  }, [data, data2]);

  const jsonStyle = {
    propertyStyle: { color: "white" },
    stringStyle: { color: "red" },
    numberStyle: { color: "darkorange" },
  };

  return (
    <div className="">
      {isLoading && (
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center z-20">
          <Spinner />
        </div>
      )}
      <div className="border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <form className="bg-gray-800 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8 flex gap-8">
            <div className="w-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-white"
              >
                Exported Data 1
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10 relative overflow-hidden">
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
                  <p className="text-xs leading-5 text-gray-400">CSV</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-white"
              >
                Exported Data 2
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10 relative overflow-hidden">
                <div className="text-center">
                  <DocumentIcon
                    aria-hidden="true"
                    className="mx-auto h-12 w-12 text-gray-500"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-400 items-center">
                    <label
                      htmlFor="bulk-import-csv-2"
                      className="relative cursor-pointer rounded-md p-2 bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="bulk-import-csv-2"
                        name="bulk-import-csv-2"
                        type="file"
                        accept=".csv"
                        className="sr-only"
                        ref={fileInputRef2}
                        onChange={handleFileChange2}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  {fileName2 && (
                    <div className="mt-2 text-gray-400 flex items-center">
                      <p>{fileName2}</p>
                      <button
                        type="button"
                        onClick={handleFileRemove2}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <XCircleIcon className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                  <p className="text-xs leading-5 text-gray-400">CSV</p>
                </div>
              </div>
            </div>
          </div>
          {winningAdvisors.length && (
            <div className="px-4 py-6 sm:p-8">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Advisors with additional 1$ winnings
                </label>
                <div className="mt-2 flex rounded-lg  p-0 relative overflow-hidden  border border-gray-700 bg-gray-700">
                  <div className=" w-full h-96 overflow-auto">
                    <div className=" flex text-sm leading-6 text-gray-400 w-full h-full  ">
                      <div className="bg-transparent color-white w-full whitespace-break-spaces break-words p-8">
                        {winningAdvisors.length ? (
                          <JsonFormatter
                            json={winningAdvisors}
                            tabWith={4}
                            jsonStyle={jsonStyle}
                          />
                        ) : (
                          "N/A"
                        )}
                      </div>
                    </div>
                  </div>
                  {winningAdvisors.length && (
                    <Copy text={JSON.stringify(winningAdvisors)} />
                  )}
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SecondSurveyExPost;
