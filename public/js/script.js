const consoleErr = async () => {
    const reponse = await fetch('/console/err')
    const data = await reponse.json()

    $('#json-err').html('')
    $('#json-err').append('<pre>' + JSON.stringify(data, null, 2) + '</pre>')
    $('#json-err').animate({
        scrollTop: $(this).height() 
    }, 100);
}

const consoleAccess = async () => {
    const reponse = await fetch('/console/access')
    const data = await reponse.json()

    $('#json-access').html('')
    $('#json-access').append('<pre>' + JSON.stringify(data, null, 2) + '</pre>')
    $('#json-access').animate({
        scrollTop: $(this).height() 
    }, 100);
}

// setInterval(() => {
//     consoleErr()
//     consoleAccess()
// }, 2000)
