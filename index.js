const requete = new XMLHttpRequest()
const methodeHttp = "GET"
const url = "https://jsonplaceholder.typicode.com/users"

requete.open(methodeHttp, url)

requete.onreadystatechange = function() {
    if(requete.readyState === 4 && requete.status === 200) {
        console.log(requete.responseText)
    }
}
requete.send()