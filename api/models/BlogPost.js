const posts = []; // fake database
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    dateCreated: {
        type: String,
        default: new Date().toISOString()
    } 
})
/*
class Post {
    constructor(title, author, content){
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date().toISOString(),
        this.id = this.getId()
    }
    static getPosts() {
        // if (!posts.length) return {message: "No posts yet"}
        return posts;
    }

    getId() {
        if (!posts.length) 1
        return posts.length+=1
    }

    static addPost(data) {
        if (data) {
            posts.push(data);
            return posts
        }
        return []
    }

    static getOne(id) {
       return posts.find(post => post.id === id);
    }
}
*/

const Post = mongoose.model('post', postSchema)

module.exports = {
    Post
}