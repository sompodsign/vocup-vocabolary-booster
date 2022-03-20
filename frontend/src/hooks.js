import {useState, useEffect} from "react";


export const useTags = () => {
    const [tags, setTags] = useState([]);
    const addPost = post => setPosts(allPosts => [post, ...posts]);

    useEffect(() => {
        newsFeed.subscibe(addPost);
        return () => newsFeed.unsubscribe(addPost)
    }, []);

    useEffect(() => {
        welcomeChine.play();
        return () => goodByeChime.play();
    }, []);

    return posts;
}
