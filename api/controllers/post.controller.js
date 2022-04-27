const e = require('express');
const {Post} = require('../models/BlogPost');

const addPost = async (data) => {
    // let post  = new Post(...data);
    // const {title, content, author} = data;
    // let post  = new Post(title, author, content);
    // console.log("**** ", post);
    return await Post.create({...data})
}

// const fetchAll = () => Post.getPosts();
const fetchAll = async () => {
  return await Post.find({})
}

// const fetchAll2 =  () => {
//   return  Post.find({})
//               .then(data=> console.log(data))
//               .catch(error => console.error(error))
// }

const fetchOne = async(id) => {
  return await Post.findById(id);
}

const removeOne = async(id) => {
  // code goes here
}

const filterByAuthor = async authorName => {
   return await Post.find({author: authorName})
}

const updatePost = async (id, postContent) => {
  const {title, content} = postContent; 
  let post = await Post.findById(id);
   if (!post) {
     return {}
   } else {
     
     if(title) {
       post.title = title
     }
     if(content) {
       post.content = content;
     }
     return await post.save()
   }
}

const removePost = async id => {
  return await Post.findByIdAndDelete(id)
}

// const searchBlog = async searchKey => {
//    return await Post.find({
//      author: searchKey,
//      title: {}
//    })
// }


module.exports = {
    addPost,
    fetchAll,
    fetchOne,
    filterByAuthor,
    updatePost,
    removePost
}