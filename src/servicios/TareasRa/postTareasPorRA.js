function postTareasPorRA() {
    return fetch('')
    .then((response => { return (response.json()) })
    ).catch((error) => "Error")
} 

export default postTareasPorRA