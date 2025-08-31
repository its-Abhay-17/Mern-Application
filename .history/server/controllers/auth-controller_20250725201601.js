const home = async (req,res) =>{
    try {
        res.send('Hello I am a home page')

    } catch (error) {
        console.error(error)
    }
};

const register = async (req,res) =>{
    try {
        res.send("Hello I am Register page")
    } catch (error) {
        console.log(error)
    }
};

module.exports = {home, register};