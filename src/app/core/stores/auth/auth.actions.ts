import { createAction, props } from '@ngrx/store';

const login = createAction('[Auth] Login init', props<{ username: string; password: string }>());

const loginSuccess = createAction('[Auth] Login Success', props<{ token: string; username: string }>());

const loginFailure = createAction('[Auth] Login Failure', props<{ error: unknown }>());

export const AuthActions = { login, loginSuccess, loginFailure };
