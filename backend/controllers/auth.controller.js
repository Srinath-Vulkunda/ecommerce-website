export const signup = async (req, res) => {

    const {name, email, password} = req.body;
    try{

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}

export const login = async (req, res) => {
    try{

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}

export const logout = async (req, res) => {
    try{
        
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}