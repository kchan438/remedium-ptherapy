/*import {
  checkIfComplete,
  checkIfCompleteDouble,
  finalProgressPercentage,
} from "./pages/ReportPage";
*/
const reportpage = require("./pages/ReportPage");

test("Dummy test", () => {
  reportpage.checkIfComplete = jest.fn();
});
