const URL = '/api/projects'

export default{
    async getAllProjects(){
        let result = await fetch(`${URL}`,{ 
            method: 'GET',
            headers: {
                'Content-Type':'application/json'  
            },
            mode: 'cors',
          })
        return await result.json()
    },

    async getProjectById(id){
        let result = await fetch(`${URL}/${id}`)
        return await result.json()
    }
}