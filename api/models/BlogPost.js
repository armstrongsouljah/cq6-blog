const posts = []; // fake database

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
        posts.push(data);
        return posts;
    }

    static getOne(id) {
       return posts.find(post => post.id === id);
    }
}

module.exports = {
    Post,
    posts
}