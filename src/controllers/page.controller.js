/** @format */

module.exports = {
	about: (req, res) => {
		res.send("pages/about")
	},
	contact: (req, res) => {
		const user = req.user
		console.log(user)
		res.send("pages/contact")
	},
}
