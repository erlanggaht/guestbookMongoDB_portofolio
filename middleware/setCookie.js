export async function setCookie (req,res,next)  {

    res.cookie('limit','1',{
        maxAge : 60000,
        httpOnly : true,
        secure : false
    })

    next()

}