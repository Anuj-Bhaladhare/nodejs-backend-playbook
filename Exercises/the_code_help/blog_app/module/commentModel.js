const pool = require("./../config/pgConnect.js");

const commentModule = async () => {
    try {
        console.log("commentModule");
    } catch (error) {
        throw error;
    }
}


const unCommentModule = async () => {
    try {
        console.log("unCommentModule");
    } catch (error) {
        throw error;
    }
}

module.exports = { commentModule, unCommentModule };
