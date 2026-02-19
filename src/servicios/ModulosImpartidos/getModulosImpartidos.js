function getModulosImpartidos(){
    return fetch("https://699634e57d1786436573b9a3.mockapi.io/api/v1/modulosImpartidos").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosImpartidos;