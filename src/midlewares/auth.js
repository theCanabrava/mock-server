module.exports = auth = (req, res, next) =>
{
    console.log('Hit auth');
    next();
    //if(req.headers['authorization'] === 'Bearer token') next();
    //else res.status(403).json({status: 403, data: "Unauthorized"});
}  