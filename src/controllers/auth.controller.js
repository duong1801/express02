module.exports = {
    login:(req,res)=> {
        res.render("auth/login", {
            layout: "auth/layout"
        })
    }
}