
const { 
    createPostModule, 
    deletePostModule
} = require("./../module/postModel.js");

const createPost = async (req, res) => {
    try {
        console.log("createPost");
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "success": false,
            "message": "Internal server error",
            "error": error
        });
    }
}

const deletePost = async (req, res) => {
    try {
        console.log("deletePost");
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "success": false,
            "message": "Internal server error",
            "error": error
        });
    }
}

module.exports = { createPost, deletePost };
