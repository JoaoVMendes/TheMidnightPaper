var request  = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

// request('https://www.reddit.com/r/nosleep/', function(err, req, body){
//     if(err){
//         console.log('Erro: ' + err)
//     }
//     var $ = cheerio.load(body)
// })


request('https://www.reddit.com/r/nosleep/comments/yyv149/i_recorded_something_very_strange/', function(err, req, body){
    if(err){
        console.log('Erro: ' + err)
    }

    var $ = cheerio.load(body)

    var posts = []

    var texts = []
    var title = ''
    var upvotes = 0

    var html = $('._3xX726aBn29LDbsDtzr_6E._1Ap4F5maDtT1E1YuCiaO0r.D3IL3FD0RFy_mkKLPwL4').find('._1qeIAgB0cPwnLhDF9XSiJM').each(function(){
        texts.push($(this).text())
    })

    title = $('.y8HYJ-y_lTUHkQIc1mdCq._2INHSNB8V5eaWp4P0rY_mE').text()

    upvotes = $('._23h0-EcaBUorIHC-JZyh6J').text()

    posts.push({
        postTitle: title,
        postUpvotes: upvotes,
        postText: texts
    })

    console.log(JSON.stringify(posts))

})