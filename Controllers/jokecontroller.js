const { Joke } = require('../models/index')


class JokeController {

    
    static getJokes(req,res){
        Joke.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json([{message:"Server Error"}])
        })
    }

    static deleteJoke(req,res){
        const id = +req.params.id
        Joke.destroy({
            where:{
                id
            },
            returning:true
        })
        .then(joke=>{
            console.log(joke)
            if(joke){
                res.status(200).json({message:'Joke success to delete'})
            }else{
                res.status(404).json({message:"Joke not found"})
            }
        })
        .catch(err => {
            res.status(500).json({message:"Server Error"})
        })
    }


}

module.exports = JokeController