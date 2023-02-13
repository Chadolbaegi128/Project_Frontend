import { useEffect } from 'react'
import { ELICE_AUTH_TOKEN_KEY } from '../constants/auth';
import { setItem, getItem, removeItem } from '../lib/localStorage';
import { useRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom";

import { $user } from '../store/user'


export const useLoginUser = () => {
  const [user, setUser] = useRecoilState($user)

  useEffect(() => {
    const savedToken = getItem(ELICE_AUTH_TOKEN_KEY)

    // savedToken이 있으면 로그인 되있는 상태
    if (savedToken) {
        //
        fetch("http://localhost:4000/api/account/user", {
            headers: {
                'authorization': `auth ${savedToken}`
            }
        })
        .then( res => res.json())
        .then(userRes => {
            console.log(userRes);
            console.log('^ userRes');
            setUser(userRes);
        })
    }
  }, [])

  return {
    user
  }
}