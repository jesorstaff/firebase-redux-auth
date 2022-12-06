# Authentication Project

Регистрация и авторизация с использованием [Firebase Authentication](https://firebase.google.com/docs/auth/web/start)

## React Redux Toolkit

Сохранение данных пользователя [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

## Создание кастомного хука для проверки авторизованного пользователя

### `hooks/user-auth.js`

```
    import { useSelector } from "react-redux";

    export function useAuth() {
      const { email, token, id } = useSelector(state => state.user)
    
      return {
        isAuth: !!email,
        email,
        token,
        id
      }
    }
```