/** @format */

module.exports = {
	index: (req, res) => {
		const pageTitle = "Trang chủ"
		const title = "F8 - Trang chủ"
		const subTitle = "Hoàng An"
		const users =  ['user 1','user 2','user 3']
		res.render("home/index", { title,pageTitle,subTitle,users })
	},
}
