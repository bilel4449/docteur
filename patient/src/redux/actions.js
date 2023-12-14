import axios from "axios"
import { DELETE_RDV, DELETE_RDV_FAIL, DELETE_RDV_SUCESS, EDIT_PROFIL, EDIT_PROFIL_FAIL, EDIT_PROFIL_SUCCES, GET_ONE, GET_ONE_FAIL, GET_ONE_SUCCES, GET_PROFIL, GET_PROFIL_FAIL, GET_PROFIL_MED, GET_PROFIL_MED_FAIL, GET_PROFIL_MED_SUCCES, GET_PROFIL_SUCCES, GET_RDV, GET_RDV_FAIL, GET_RDV_SUCCES, LOGIN, LOGIN_FAIL, LOGIN_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_R, REGISTER_R_FAIL, REGISTER_R_SUCCES, REGISTER_SUCCES } from "./actionTypes";
export const registerUser=(newUser)=>async(dispatch)=>{
dispatch({
    type:REGISTER
})
try {
    const{data}=await axios.post('/user/register',newUser);
    dispatch({
        type:REGISTER_SUCCES,
        payload:data
    })
} catch (error) {
    dispatch({
        type:REGISTER_FAIL,
        payload:error.response.data
    })
}
};
export const loginUser=(user)=>async(dispatch)=>{
    dispatch({
        type:LOGIN,
    })
    try {
        const {data}=await axios.post('/user/login',user)
        localStorage.setItem('token',data.token)
        dispatch({
            type:LOGIN_SUCCES,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
    }
}
export const getProfil=()=>async(dispatch)=>{

    dispatch({
        type:GET_PROFIL
    })
    const token=localStorage.getItem("token");
    const config={
        headers:{
            Authorization:token
        }
    }
    try {
        const {data}=await axios.get('/user/auth',config)
        dispatch({
            type:GET_PROFIL_SUCCES,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:GET_PROFIL_FAIL,
            payload:error.response.data
        })
    }
};
export const registerRdv=(newRdv)=>async(dispatch)=>{
    dispatch({
        type:REGISTER_R
    })
    try {
        const{data}=await axios.post('/rdv/register',newRdv);
        dispatch({
            type:REGISTER_R_SUCCES,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:REGISTER_R_FAIL,
            payload:error.response.data
        })
    }
    };
    export const editProfil=(modifUser)=>async(dispatch)=>{

        dispatch({
            type:EDIT_PROFIL
        })
        
        // const token=localStorage.getItem("token");

        try {
            const {data}=await axios.put(`/user/edit/${modifUser._id}`,modifUser)
            dispatch({
                type:EDIT_PROFIL_SUCCES,
                payload:data
            })
            
        } catch (error) {
            dispatch({
                type:EDIT_PROFIL_FAIL,
                payload:error.response.data
            })
        }
    };
    export const getall=()=>async(dispatch)=>{
        dispatch({
            type:GET_PROFIL_MED
        })
        try {
            const{data}=await axios.get('/user/getall');
            dispatch({
                type:GET_PROFIL_MED_SUCCES,
                payload:data
            })
        } catch (error) {
            dispatch({
                type:GET_PROFIL_MED_FAIL,
                payload:error.response.data
            })
        }
        };
        export const getOne=(_id)=>async(dispatch)=>{
            dispatch({type:GET_ONE})
           
            try {
                const{data}=await axios.get(`/user/getOneMedecin/${_id}`);
                dispatch({
                    type:GET_ONE_SUCCES,
                    payload:data
                })
            } catch (error) {
                dispatch({
                    type:GET_ONE_FAIL,
                    payload:error.response.data
                })
            
            }
            };
            export const getallrdv=()=>async(dispatch)=>{
                dispatch({
                    type:GET_RDV
                })
                try {
                    const{data}=await axios.get('/rdv/getallrdv');
                    dispatch({
                        type:GET_RDV_SUCCES,
                        payload:data
                    })
                } catch (error) {
                    dispatch({
                        type:GET_RDV_FAIL,
                        payload:error.response.data
                    })
                }
                };
                export const deleterdv=(_id)=>async(dispatch)=>{
                    dispatch({type:DELETE_RDV})
                   
                    try {
                        const{data}=await axios.delete(`/rdv/deleterdv/${_id}`);
                        dispatch({
                            type:DELETE_RDV_SUCESS,
                            payload:data
                        })
                    } catch (error) {
                        dispatch({
                            type:DELETE_RDV_FAIL,
                            payload:error.response.data
                        })
                    
                    }
                    };
    
    
