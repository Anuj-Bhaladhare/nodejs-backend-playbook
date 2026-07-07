const pool = require("./../config/pgConnect.js");

const likePostModule = async () => {
    try {
        console.log("likePostModule");
    } catch (error) {
        throw error;
    }
}

const unLikePostModule = async () => {
    try {
        console.log("unLikePostModule");
    } catch (error) {
        throw error;
    }
}

module.exports = { likePostModule, unLikePostModule };
