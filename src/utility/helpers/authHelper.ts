import { User } from '../classes/user'

export default function authHelper() {

    let user: User = JSON.parse(localStorage.getItem('user')!);

    if (user && user.authdata) {
        return {'Auth ':  user.authdata + ' ' + user.header};
    } else return {}

}