const router = require('express').Router()
const postController = require('../controllers/post.controller');

router.get('/', (req, res) => {
  let posts = postController.fetchAll();
  if(!posts.length) return res.status(404).json({message: "No posts yet"})
  return res.status(200).json({posts})
});

router.post('/new', (req,res) => {
    const {title, content, author} = req.body;
    let data =  postController.addPost({
        title,
        content,
        author
    })

   if (data) {
    return res.status(201).json({
        message: "Post created successfully",
        data
       })
   } 
   else {
       return res.status(400).json({message: "Could not create post"})
   }
    
})

router.get('/:id', (req, res) => {
    let {id} = req.params
    let post = postController.fetchOne(id);
    if (!post) return res.status(404).json({message: "Post not found"});
    return res.json({data: post})
});

module.exports = router;

