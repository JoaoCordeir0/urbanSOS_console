const consoleErr = async () => {
    const reponse = await fetch('/console/err')
    const data = await reponse.json()

    $('#json-err').html('')
    $('#json-err').append('<pre>' + JSON.stringify(data, null, 2) + '</pre>')
}

const consoleAccess = async () => {
    const reponse = await fetch('/console/access')
    const data = await reponse.json()

    $('#json-access').html('')
    $('#json-access').append('<pre>' + JSON.stringify(data, null, 2) + '</pre>')   
}

setInterval(() => {
    if (!$('#json-err').is(':hover')){       
        consoleErr()        
        var objDivErr = document.getElementById("json-err");
        objDivErr.scrollTop = objDivErr.scrollHeight;        
    }  
    if (!$('#json-access').is(':hover')){               
        consoleAccess()        
        var objDivAccess = document.getElementById("json-access");              
        objDivAccess.scrollTop = objDivAccess.scrollHeight;
    }   
}, 1000)
