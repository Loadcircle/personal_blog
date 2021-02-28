import { db } from "../firebase/firebase-config"



export const loadPosts =  async(uid)=>{
    
    const postsSnap = await db.collection(`${uid}/blog/posts`).get();
     
    const posts = [];

    postsSnap.forEach(snapHijo=>{
        
        posts.push({
            id: snapHijo.id,
            ...snapHijo.data()
        });
    });

    return posts;
}



export const loadPublicPosts =  async()=>{
    
    const postsSnap = await db.collection(`QruOXxexCPVYH6VflCYhQ6kZFwB3/blog/posts`).where('publish', '==', true).get();
     
    const posts = [];

    postsSnap.forEach(snapHijo=>{
        
        posts.push({
            id: snapHijo.id,
            ...snapHijo.data()
        });
    });

    return posts;
}

export const loadPublicMainPosts = async()=>{
    const post = await db.collection(`QruOXxexCPVYH6VflCYhQ6kZFwB3/blog/posts`).where('publish', '==', true).limit(1).get();

    if(!post.empty){
        return {id: post.docs[0].id, ...post.docs[0].data()}
    }

    return null

}

export const getPost = async(uid, slug)=>{
    
    const post = await db.collection(`${uid}/blog/posts`)
                        .where('slug', '==', slug).limit(1).get();

    if(!post.empty){
        return {id: post.docs[0].id, ...post.docs[0].data()}
    }

    return null
}