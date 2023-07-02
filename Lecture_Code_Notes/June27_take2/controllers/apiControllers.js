module.exports = {
    api: (req, res) => {response.json({message:"Hello, World!"})},
    greeting: (req,res) => {res.json({message:"Greetings from Planet Earth"})}
}