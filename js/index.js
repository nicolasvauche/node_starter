window.addEventListener('DOMContentLoaded', e => {
    let prenom

    if(prenom = window.prompt('Ton prénom ?')){
        fetch('http://localhost:3000/api/coucou/' + prenom)
        .then(response => response.json())
        .then(response => {
          console.log(typeof response)
          const messageElt = document.getElementById('message')
          messageElt.innerText = response
        })
    }
})
