const { REGISTER, REGISTER_SUCCES, REGISTER_FAIL, LOGIN, LOGIN_FAIL, LOGIN_SUCCES, GET_PROFIL, GET_PROFIL_FAIL, GET_PROFIL_SUCCES, REGISTER_R, REGISTER_R_FAIL, REGISTER_R_SUCCES, EDIT_PROFIL, EDIT_PROFIL_SUCCES, EDIT_PROFIL_FAIL, GET_PROFIL_MED, GET_PROFIL_MED_FAIL, GET_PROFIL_MED_SUCCES,  GET_ONE_SUCCES, GET_RDV, GET_RDV_FAIL, GET_RDV_SUCCES, DELETE_RDV, DELETE_RDV_FAIL, DELETE_RDV_SUCESS } = require("./actionTypes");

const init={
    loading:false,
    users:null,
    errors:null,
    token:null,
    isAuth:false,
    rdvs:null,
    users1:null

}
const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case REGISTER:
            case LOGIN:
                case GET_PROFIL:
                    case REGISTER_R:
                        case EDIT_PROFIL:
                            case GET_PROFIL_MED:
                                case GET_RDV:
                                    case DELETE_RDV:
            return {...state,loading:true}
        case REGISTER_SUCCES:
            return{...state,loading:false,users:payload,errors:null}
            case LOGIN_SUCCES:
                return{...state,loading:false,users:payload.users,errors:null,token:payload.token}
            
            case GET_PROFIL_SUCCES:
                return{...state,loading:false,users:payload,isAuth:true}
                case REGISTER_R_SUCCES:
                 return{...state,loading:false,rdvs:payload}
                 case EDIT_PROFIL_SUCCES:
                    return{...state,loading:false,users:payload}
                    case GET_PROFIL_MED_SUCCES:
                        return{...state,users:payload}
                        case GET_RDV_SUCCES:
                            return{...state,loading:false,rdvs:payload}
                            case DELETE_RDV_SUCESS:
                                return{...state,loading:false,rdvs:payload}
                       
            case REGISTER_FAIL:
                case LOGIN_FAIL:
                    case GET_PROFIL_FAIL:
                        case REGISTER_R_FAIL:
                            case EDIT_PROFIL_FAIL:
                                case GET_PROFIL_MED_FAIL:
                                    case GET_RDV_FAIL:
                                        case DELETE_RDV_FAIL:
                return{...state,loading:false,errors:payload}
                case GET_ONE_SUCCES:
                    return{...state,users1:payload}    
        default:
          return state
    }
}
export default reducer
