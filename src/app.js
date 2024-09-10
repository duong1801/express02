/** @format */
const express = require("express")

const routerWeb = require("./routes/web")

const expressLayouts = require('express-ejs-layouts');

const authMiddleware = require('./middlewares/auth.middlewares')

const app = express()

const port = 3000

app.use(express.static('public'))

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use(express.urlencoded({ extended: true }))
//

app.use(express.json())
//

app.use(expressLayouts);

// app.use(authMiddleware)

app.use(routerWeb)


app.use(( req, res, next) => {
	// console.error(err.stack)
	res.status(404)
	res.render('errors/error',{error:"Không tìm thấy trang",layout:false})
  })
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
