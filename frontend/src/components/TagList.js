import {useContext} from 'react';
import {TagContext} from "./tagcontext";
import { useDispatch } from 'react-redux';
import { listTutorials }from "../redux/actions/tutorialActions";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import "../styles/tutorialsStyle.css";


export const TagList = () => {

    const tags = useContext(TagContext);


    return (<div className="pb-4">
                        <Link to={`/tutorials/`}>
            <a href="#" ><span
                                  className="hover:bg-stone-400 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-teal-500 bg-stone-200 rounded-full">All</span></a></Link>
            {tags &&
                tags.tags.map((tag, index) =>
                <Link to={`/tutorials/filter/${tag}`} key={index}>
                <a href="#" key={index}>
            <span
                className={`${tags.param === tag && "selected-tag"} hover:bg-stone-400 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-stone-700 bg-emerald-200 rounded-full`}>{tag}</span></a>
                 </Link>
                )}
        </div>
    );
};


