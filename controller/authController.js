
export const registerWithMobile =async(req, res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error while creating a new user',
            success : false,
            error
        })
    }
}


export const loginWithMobile =(req, res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error while creating a new user',
            success : false,
            error
        })
    }
}