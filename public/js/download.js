document.getElementById('downButton').onclick = function(){

    var title = document.getElementById('vidTitle').innerHTML;
    var link = document.getElementById('downLink');
    if (title != "Enter URL" && title != "Invalid URL") {
        var x = "../tmp/" + title + ".mp3";
        link.href = x;
        link.download = title + ".mp3";
    }
};

document.getElementById('searchButton').onclick = function() {
    var f = document.getElementById('vidTitle').innerHTML;
    switch(f) {
        case 0:
            f = "sha256 d6f0c71ef0c88e45e4b3a2118fcb83b0def392d759c901e9d755d0e879028727"
            break
        case 1:
            document.getElementById('icon').href = "/img/D.png"
    }
}