
const { 
    likePostModule, 
    unLikePostModule
} = require("./../module/likeModel.js");

const likePost = async () => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "success": false,
            "message": "Internal server error",
            "error": error
        });
    }
}

const unLikePost = async () => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "success": false,
            "message": "Internal server error",
            "error": error
        });
    }
}

module.exports = { likePost, unLikePost };
