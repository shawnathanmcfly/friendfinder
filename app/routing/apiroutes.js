var dat = require('../data/friends');

module.exports = (app) => {

    app.get( '/api/friends', (req, res) => {
        res.json( dat.module );
        
    }),

    app.post( '/api/friends', (req, res) => {

        let t = [];
        
        //get difference amount from other users
        for( let i = 0; i < dat.module.length; i++ ){

            t.push( {name: dat.module[i].name, pic: dat.module[i].pic, diff: 0})

            for( let ii = 0; ii < dat.module[i].q.length; ii++ )
                if( dat.module[i].q[ii] != req.body.q[ii] )
                    t[i].diff++;
        }

        //find lowest amount of diff
        let lowest = t[0];
        for( let i = 1; i < t.length; i++ )
            if( t[i].diff < lowest.diff )
                lowest = t[i];

        res.json( JSON.stringify( lowest ) );
        
        dat.module.push( req.body );
        
    })
}