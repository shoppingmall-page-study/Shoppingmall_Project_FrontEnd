//액션 타입 선언
const LOGIN = 'Header/LOGIN' as const
const UPDATE = 'Header/UPDATE' as const
const LOGOUT = 'Header/LOGOUT' as const

//액션 생성함수 선어
export const login = (username: string) => ({
    type: LOGIN,
    payload: username
})

export const update = (username: string) => ({
    type: UPDATE,
    payload: username
})

export const logout =() => ({
    type: LOGOUT
})

//모든 액션 객체들에 대한 타입을 준비
type UserAction = | ReturnType<typeof login> | ReturnType<typeof update> | ReturnType<typeof logout>

//이 리덕스 모듈에서 관리 할 상태의 타입을 선언
type UserState = {
    username: string
}

//초기상태를 선언합니다.
const initialState: UserState = {
    username: ""
};

//리듀서를 작성
function UserReducer(state: UserState = initialState, action: UserAction): UserState{
    switch(action.type){
        case LOGIN:
            return{ username: action.payload}
        case UPDATE:
            return{ username: action.payload}
        case LOGOUT:
            return{username: ''}
        default:
            return state
    }
}

export default UserReducer