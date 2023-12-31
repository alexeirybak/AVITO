import { configureStore } from '@reduxjs/toolkit';
import { ads } from './services/getAds';
import { me } from './services/getMe';
import { userToken } from './services/getToken';
import { advId } from './services/getAdvId';
import { myAds } from './services/getMyAds';
import { comments } from './services/getComments';
import { users } from './services/getUsers';

export const store = configureStore({
  reducer: {
    [ads.reducerPath]: ads.reducer,
    [me.reducerPath]: me.reducer,
    [userToken.reducerPath]: userToken.reducer,
    [advId.reducerPath]: advId.reducer,
    [myAds.reducerPath]: myAds.reducer,
    [comments.reducerPath]: comments.reducer,
    [users.reducerPath]: users.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(ads.middleware)
      .concat(me.middleware)
      .concat(userToken.middleware)
      .concat(advId.middleware)
      .concat(myAds.middleware)
      .concat(comments.middleware)
      .concat(users.middleware),
});
