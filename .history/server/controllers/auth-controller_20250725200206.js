const home = async (res,res) =>{
    try {
        res.send('Hello World!, ABHAY by router')

    } catch (error) {
        console.error(error)
    }
}

module.exports = home;