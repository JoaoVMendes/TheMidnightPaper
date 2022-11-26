var request  = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

request('https://www.reddit.com/r/nosleep/top/?t=week', function(err, req, body){
    if(err){
        console.log('Erro: ' + err)
    }
    //Load body's page
    var $ = cheerio.load(body)    

    //Get the href link to the posts rout
    var postUrl = $('.rpBJOHq2PR60pnwJlUyP0').find(".SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE").attr('href')
    // console.log($('.rpBJOHq2PR60pnwJlUyP0').find(".SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE").attr('href'))

    //Make a request using the link and then get the data
    request('https://www.reddit.com' + postUrl, function(err, req, body){
        if(err){
            console.log('Erro: ' + err)
        }
        var $ = cheerio.load(body)
    
        var posts = []
    
        var texts = []
        var title = ''
        var upvotes = 0
        
        //Getting al the story's paragraph
        var html = $('._3xX726aBn29LDbsDtzr_6E._1Ap4F5maDtT1E1YuCiaO0r.D3IL3FD0RFy_mkKLPwL4').find('._1qeIAgB0cPwnLhDF9XSiJM').each(function(){
            texts.push($(this).text())
        })
        
        //Getting the title
        title = $('.y8HYJ-y_lTUHkQIc1mdCq._2INHSNB8V5eaWp4P0rY_mE').text()
        
        //Getting the upvotes
        upvotes = $('._23h0-EcaBUorIHC-JZyh6J').text()
        
        //Create a object with the variables
        posts.push({
            postTitle: title,
            postUpvotes: upvotes,
            postText: texts
        })
        // console.log(posts)

        //Transfor the post obj into a json obj and save it on a file.
        var postsJson = JSON.stringify(posts)
        fs.writeFile('CreepyPastas.json', postsJson, function(err){console.log(err)})
    })
})
