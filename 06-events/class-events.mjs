import EventEmitter from 'events';

class Post extends EventEmitter {
    constructor(autor, text) {
        super();
        this.autor = autor;
        this.text = text;
        this.likeQty = 0;
        this.on('likePost', (username) => {
            console.log(`${username} like your post`);
        });
        this.on('error', (error) => {
            console.log(error);
        });
    }
    like(username) {
        if (!username) {
            return this.emit(
                'error',
                new Error('No username in the like request!')
            );
        }
        this.likeQty += 1;
        this.emit('likePost', username);
    }
}

const myPost = new Post('Bogdan', 'My Greate post!');

// console.log(myPost.autor);
// console.log(myPost.text);
// console.log(myPost.likeQty);
myPost.like('Alice');
setTimeout(() => myPost.like(), 1000);

setTimeout(() => myPost.like('wq'), 2000);
// console.log(myPost.likeQty);
