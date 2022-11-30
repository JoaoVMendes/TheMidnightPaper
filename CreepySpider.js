const puppeteer = require('puppeteer')
var fs = require('fs')

async function crawl(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    //open the reddit no sleep page on the filter TOP and WEEKLY.
    await page.goto('https://www.reddit.com/r/nosleep/top/?t=week')

    //Getting the first url of the top voted story of the week
    var element = await page.$('#t3_z3ls5b > div._1poyrkZ7g36PawDueRza-J._11R7M_VOgKO1RJyRSRErT3 > div._2FCtq-QzlfuN-SwVMUZMM3._3wiKjmhpIpoTE2r5KCm2o6.t3_z3ls5b > div.y8HYJ-y_lTUHkQIc1mdCq._2INHSNB8V5eaWp4P0rY_mE > a')
    const url = await element.evaluate(el => el.href)
    
    //Open the top voted post page.
    await page.goto(url, {
        waitUntil: 'networkidle2'
    })

    //Get the post Title
    element = await page.$('#t3_z3ls5b > div > div._2FCtq-QzlfuN-SwVMUZMM3._2v9pwVh0VUYrmhoMv1tHPm.t3_z3ls5b > div.y8HYJ-y_lTUHkQIc1mdCq._2INHSNB8V5eaWp4P0rY_mE > div > h1')
    const postTitle = await element.evaluate(el => el.innerText)
    //console.log(postTitle)

    //Wait for the selector to load because this one is dynamicaly inserted a few seconds later by javascript
    //Get the post Author.
    element = await page.waitForSelector('#t3_z3ls5b > div > div._14-YvdFiW5iVvfe5wdgmET > div > div._3AStxql1mQsrZuUIFP9xSg.nU4Je7n-eSXStTBAPMYt8 > div')
    const postAuthor = await element.evaluate(el => el.innerText)
    //console.log(postAuthor.substring(2, postAuthor.length))

    //Get the post Upvotes
    element = await page.$('#vote-arrows-t3_z3ls5b > div')
    const postUpvotes = await element.evaluate(el => el.innerText)
    //console.log(postUpvotes)

    //Get the text by paragraphs and save it into an array
    const postText = await page.evaluate(() =>{
        const paragraphs = Array.from(document.querySelectorAll('#t3_z3ls5b > div > div._3xX726aBn29LDbsDtzr_6E._1Ap4F5maDtT1E1YuCiaO0r.D3IL3FD0RFy_mkKLPwL4 > div > p'), x => x.innerText)
        return paragraphs
    })
    //console.log(postText)

    const post = {
        title: postTitle,
        author: postAuthor.substring(2, postAuthor.length),
        upvotes: postUpvotes,
        url: url,
        text: postText,
    }
    console.log(post)

    var jsonPost = JSON.stringify(post)
    fs.writeFile('src/CreepyPasta.json', jsonPost, function (err) { console.log(err) })

    //This gets the entire text, not usefull
    // element = await page.$('#t3_z3ls5b > div > div._3xX726aBn29LDbsDtzr_6E._1Ap4F5maDtT1E1YuCiaO0r.D3IL3FD0RFy_mkKLPwL4 > div')
    // const postText = await element.evaluate(el => el.innerText)
    // console.log(postText)

    await browser.close()
}

crawl()