import { Post } from "../components/adminComponents/Post";

export const getFragment = (content)=>{
    return content.substr(0, 100);
}