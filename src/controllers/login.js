const loginControler =
{
    login: (req, res) =>
    {
        console.log('Hit login');
        if(req.body.user === req.body.pass) res.json({token: 'token', authType: req.body.user});
        else res.status(403).json({err: 'Login failed'});
    }
}

module.exports = loginControler;