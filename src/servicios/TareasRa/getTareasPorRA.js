function getTareasPorRA(){
    return fetch("https://mocki.io/v1/5929fa98-b387-466c-8245-7a8947ca0e92").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getTareasPorRA;