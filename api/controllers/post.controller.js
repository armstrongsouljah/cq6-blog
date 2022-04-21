const {Post, posts} = require('../models/BlogPost');

const addPost = (data) => {
    // let post  = new Post(...data);
    const {title, content, author} = data;
    let post  = new Post(title, author, content);
    // console.log("**** ", post);
    return Post.addPost({
     ...post
    });
}

const fetchAll = () => Post.getPosts();

const fetchOne = (id) => {
  return Post.getOne(id);
}


module.exports = {
    addPost,
    fetchAll,
    fetchOne
}