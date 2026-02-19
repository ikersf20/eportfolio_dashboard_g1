function getModulosMatriculados(){
    return fetch("https://mocki.io/v1/dd803d3f-33ca-4447-ad33-e6bd421b1ef4").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosMatriculados;