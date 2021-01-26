const fs = require('fs');

const apiController = 
{
    load: (req, res) =>
    {
        try
        {    
            const json = JSON.parse(fs.readFileSync(`./public/docs${req.url}.json`, 'utf-8'));
            res.status(json.status).json(json.data);
        }
        catch(err)
        {
            res.status(404).json({message: "Not found"});
        }
    }
}

module.exports = apiController