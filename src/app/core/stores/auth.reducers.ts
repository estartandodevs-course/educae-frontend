// import { createReducer, on } from "@ngrx/store";
// import { AuthActions } from "./auth/auth.actions";

// export interface AuthState{
//     token: string;
//     username: string;
//     error: unknown;
//     loading: boolean;
// }

// const initialState: Nullable<AuthState> = {
//     error: null;
//     token: null;
//     loading: null;
//     username: null;

// };

// export const authReducer = createReducer{
//     initialState,

//     on{
//         AuthActions.login,
//         (state): Nullable<AuthState> =>({
//             ...state,
//             loading: false,
//             token,
//             username,
//         }),
//     },
// }
