import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema; // сделаем необязательным, чтобы потом подгружать его асинхронно
}

// const something: StateSchema = {
//     counter: {
//         value: 10,
//     },
//     user: {
//          authData: {
//              id: '1',
//              username: 'admin',
//          }
//      },
//     loginForm: {
//          username: string;
//          password: string;
//          error?: string;
//          isLoading: boolean;
//     }
// };
