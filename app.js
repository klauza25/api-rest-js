// const express = require('express')

// const { pokemon: pokemons } = require('./pokemon')

// const port = 3000

// const app = express()

// app.get('/pokemons', (req, res) => res.json(pokemons))

// app.get('/pokemons/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const pokemon = pokemons.find(p => p.id === id)
//   if (!pokemon) {
//     return res.status(404).json({ error: 'Pokemon not found' })
//   }
//   res.json({ 
//     id: pokemon.id, 
//     name: pokemon.name,
//     img: pokemon.img,
//     type: pokemon.type,
//     height: pokemon.height,
//     weight: pokemon.weight
//   })
// })

// app.listen(port, () => console.log(`App is running on http://127.0.0.1:${port}/pokemons/`))


const express = require('express')

const {success} = require('./helper.js')

const favicon = require('serve-favicon')

const pokemons = require('./pokemon.js')
const morgan = require('morgan')

const app = express()

const port = 3000


app.use(morgan('dev'))

app.use(favicon('favicon.ico'))


app.get('/api', (req,res) => {
    res.send(success(`All pokemons ${pokemons.length} `, pokemons))
})

app.get('/api/pokemons/:id', (req, res) => {
     const id = parseInt(req.params.id)
     const pokemon = pokemons.find(p => p.id === id)
    res.json(success('Pokemon found', pokemon))

}
)

app.listen(port, console.log(`App is running on http://127.0.0.1:${port}/api`))
