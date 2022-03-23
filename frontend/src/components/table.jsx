
import {capitalize} from "../helpers/capitalize";

const WordTable = ({words=[]}) => {

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            {words ?

                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">#</th>
                            <th scope="col" class="px-6 py-3">English</th>
                            <th scope="col" class="px-6 py-3">Bengali</th>
                        </tr>
                    </thead>

                        {words ? words.map((word, index) => {
                            return (
                                <tbody>
                                <tr key={word.id} class={"border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"}>
                                    <td class="px-6 py-4">{index + 1}</td>
                                    <td class="px-6 py-4">{capitalize(word.word)}</td>
                                    <td class="px-6 py-4">{word.meaning}</td>
                                </tr>
                                </tbody>
                            );
                        }) : <h4>You've not added any words yet.</h4>}
                </table>

                :

                <h3>You have not added any words yet. Start adding</h3>
            }
        </div>

    );
}

export default WordTable;
