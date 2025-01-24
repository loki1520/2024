import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIReadonly = (state: StateSchema) =>
    state.profile?.readonly;
