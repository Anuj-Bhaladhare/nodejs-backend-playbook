const pool = require("./../config/pgConnect.js");

const createPostModule = async () => {
    try {
        console.log("createPostModule");
    } catch (error) {
        throw error;
    }
}


const deletePostModule = async () => {
    try {
        console.log("deletePostModule");
    } catch (error) {
        throw error;
    }
}

module.exports = { createPostModule, deletePostModule };
