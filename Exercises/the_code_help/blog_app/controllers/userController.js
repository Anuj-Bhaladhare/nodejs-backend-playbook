const bcrypt = require("bcrypt");

const { 
    loginUserModule, 
    registerUserModule, 
    checkUserExistModule 
} = require("./../module/userModule.js");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if ( !email || !password ) {
            return res.status(404).json({
                "success": false,
                "message": "Please fill all the details properlly"
            });
        }

        const find_user_db = await checkUserExistModule(email);

        if ( find_user_db !== false ) {

            const pass_is_match = await bcrypt.compare(password, find_user_db.password_hash);

            if (pass_is_match) {
                return res.status(404).json({
                    "success": true,
                    "message": "User Login Successfully",
                    "user_data": {
                        "id": find_user_db.id,
                        "username": find_user_db.username,
                        "email": find_user_db.email,
                        "first_name": find_user_db.first_name,
                        "last_name": find_user_db.last_name,
                        "profile_image": find_user_db.profile_image,
                        "bio": find_user_db.bio,
                        "is_verified": find_user_db.is_verified,
                        "is_active": find_user_db.is_active
                    }
                });
            } else {
                return res.status(404).json({
                    "success": false,
                    "message": "Password is In InCorrect, please enter correct password"
                });  
            }

        } else {
            return res.status(404).json({
                "success": false,
                "message": "User Not Available Please Register First"
            });  
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "success": false,
            "message": "Internal server error",
            "error": error
        });
    }
}

const registerUser = async (req, res) => {
    try {

        const { username, email, password, first_name, last_name } = req.body;

        if ( !username || !email || !password || !first_name || !last_name ) {
            return res.status(404).json({
                "success": false,
                "message": "Please fill all the details properlly"
            });
        }

        // check user allready exist
        const check_user_exist = await checkUserExistModule(email);
        if ( check_user_exist !== false ) {
            console.log("User Allready Exist");
            return res.status(404).json({
                "success": false,
                "message": "User Allready Exist"
            });  
        }

        // hash password
        const hash_password = await bcrypt.hash(password, 10);
        console.log(hash_password);
        if ( !hash_password ) {
            return res.status(404).json({
                "success": false,
                "message": "Error in password hashing"
            });  
        }

        // register user
        const create_db_entry = await registerUserModule(username, email, hash_password, first_name, last_name);

        if (create_db_entry === true) {
            return res.status(200).json({
                "success": true,
                "message": "User Register Successfully"
            });  
        } else {
            return res.status(404).json({
                "success": false,
                "message": "User Unable to Register"
            });  
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "success": false,
            "message": "Internal server error",
            "error": error
        });
    }
} 

module.exports = { loginUser, registerUser };
