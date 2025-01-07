

const sendJwtToken = (user , statusCode , res) =>{


    //create jwt token using user data 

    const token = user.getJWTToken();

    //cookies options
    const options = {
        
        //cookies ki expiry date

        expires: new Date(

            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),

        httpOnly: true, //cookie srf http request ke liye accesble ho
    }

    res.status(statusCode).cookie("token",token,options).json({
        success: true, 
        user,          
        token,         
    });
}

module.exports = sendJwtToken;