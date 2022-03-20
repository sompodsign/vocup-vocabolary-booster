import {useContext} from 'react';
import {TagContext} from "./tagcontext";
import { useDispatch } from 'react-redux';
import { listTutorials }from "../redux/actions/tutorialActions";


export const TagList = () => {

    const tags = useContext(TagContext);

    const dispatch = useDispatch();

    function handleClick(event, tag) {
        event.preventDefault()
        dispatch(listTutorials(tag))
    }


    return (<div className="pb-4">
            <a href="#"  onClick={event => handleClick(event, '')} ><span
                                  className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-500 bg-red-200 rounded-full">Clear</span></a>
            {tags && tags.length &&
                tags.map((tag, index) =>
                <a href="#" onClick={event => handleClick(event, tag)} key={index}>
            <span
                className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-stone-700 bg-emerald-200 rounded-full">{tag}</span></a>)}
        </div>
    );
};


