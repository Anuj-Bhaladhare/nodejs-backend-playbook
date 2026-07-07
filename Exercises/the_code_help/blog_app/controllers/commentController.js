
const { 
    commentModule, 
    unCommentModule,
} = require("./../module/commentModel.js");

const commentPost = async () => {
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

const unCommentPost = async () => {
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

module.exports = { commentPost, unCommentPost };
