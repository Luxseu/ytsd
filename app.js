//Imports
const fs = require('fs')
const ytdl = require('ytdl-core')
const requestIp = require('request-ip')
const bodyParser = require('body-parser')
var findRemoveSync = require('find-remove');
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('', (req, res) => {
    res.render('index', { title: "Enter URL" })
    var clientIp = requestIp.getClientIp(req)
    console.log("Client connected on Ip " + clientIp.replace(/f|\:/g, ''))
})

//Main
app.post('/', async (req, res) => {
    var url = req.body.url;
    if (!ytdl.validateURL(url)) {
        switch(url) {
            case "Eve":
                C = "0"
                break
            case "Dov":
                C = "1"
                break

            default:
                C = "Invalid URL"
        }
        res.render('index', { title: C});
        console.log("Invalid url: " + url)
    } else {
        var songData = await ytdl.getInfo(url)
        var title = songData.videoDetails.title
        title = (title.replace(/\||\/|\\|\:|\*|\>|\<|\?/g, " "));
        console.log("Title: " + title)

        ytdl(url, { filter: 'audioonly', quality: 'highest' }).pipe(fs.createWriteStream('./public/tmp/' + title + '.mp3'));
        res.render('index', { title: title })
    }
});

//Listen
app.listen(port, () => console.info('Server started on IP 78.58.223.187:3000'))
