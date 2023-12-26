var mainApiURL = import.meta.env.VITE_API_URL

const mainApi = {
  signIn: async (params)=> {
    let response = await fetch(`${mainApiURL}/signin`, {
      method: "POST",
      body: JSON.stringify(params)
    })
    response = response.json()
    return response
  },
  signUp: ()=> {

  },
  createCompany: ()=> {
    
  }
}

export default mainApi