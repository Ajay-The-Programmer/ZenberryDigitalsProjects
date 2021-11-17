import axios from "axios"

// export const anotherName = (name) => {

//     return {
//         type: "CHANGE_NAME",
//         payload: name
//     }

// }

export const anotherName = () => {

    return async (dispatch) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        // const result = data.json()
        dispatch({ type: "CHANGE_NAME", payload: res.data[0].name })

    }

}