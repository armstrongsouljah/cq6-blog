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


module.exports = {
    addPost,
    fetchAll,
    fetchOne
}