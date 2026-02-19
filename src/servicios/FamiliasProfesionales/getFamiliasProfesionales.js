function getFamiliasProfesionales() {
    return fetch('https://mocki.io/v1/dff38fa7-27bd-414d-869b-81fad27385d2')
    .then((response => { return (response.json()) })
    ).catch((error) => "Error")
} 

export default getFamiliasProfesionales;