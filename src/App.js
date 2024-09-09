import "./App.css";
import Template_1 from "./templates/Template_1";
import { useRef } from "react";

function App() {
  const printResume = () => {
    // Get the HTML content of the div to print
    // const divToPrint = document.getElementById("print_temp");

    // Store the original content of the body
    // const originalContent = document.body.innerHTML;

    // Replace the body content with the content of the div to print
    // document.body.innerHTML = divToPrint.outerHTML;

    // Trigger the print dialog
    window.print();

    // Restore the original body content after printing
    // document.body.innerHTML = originalContent;

    // Optional: Re-trigger any JavaScript that was lost during body content swap
    // window.location.reload(); // Reload the page to reset everything
  };

  return (
    <div className="App">
      <div className="w-full h-20">
        <button onClick={printResume}>Download</button>
      </div>
      <div className="template_section" id="print_temp">
        <Template_1 />
      </div>
    </div>
  );
}

export default App;
