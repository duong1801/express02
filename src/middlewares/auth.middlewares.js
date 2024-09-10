//trong express ==> middleware là 1 function


module.exports = (req,res,next)=> {
   const isAuthenticated = true
   if(!isAuthenticated){
    return res.redirect("/dang-nhap")
   }
   req.user = "Lê Tùng Dương"
   next()
}