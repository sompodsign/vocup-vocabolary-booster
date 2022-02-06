/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import {useState} from "react";

export default function DictInput(props) {
    // const [value, setValue] = useState('')

    return (
        <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                English Word
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                </div>
                <input
                    type="text"
                    name="Enter Word"
                    id="word"
                    value={props.inputValue}
                    onChange={event => props.func(event.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter word here"
                />
            </div>
        </div>
    )
}
