import { useState } from "react";

const Content = () => {
  const [textareavalue, setTextareaValue] = useState("");
  const [displayText, setdisplayText] = useState("");

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = () => {
    setdisplayText(textareavalue);
  };

  return (
    <div className="container">
      <h1 className="text-center pt-9 pb-9 text-2xl font-semibold">
        Content Component
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 border-transparent focus:border-transparent focus:ring-0 focus:border-none dark:text-white dark:placeholder-gray-400 placeholder:italic placeholder:text-gray-400"
                placeholder="Write something here and click submit..."
                value={textareavalue}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <p className="ml-auto font-semibold text-xl sm:text-center italic">
          {displayText}
        </p>
      </div>
    </div>
  );
};

export default Content;
