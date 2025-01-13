import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}

// const something: StateSchema = {
//     counter: {
//         value: 10,
//     },
//      user: {
//          authData {
//              id: '1',
//              username: 'admin',
//          }
//      }
// };
