import {atom} from "nanostores"
import {nanoid} from "nanoid";

export const user = atom({
    _id : '',
    _name: '',
    _email:'',
    _password:''
})

export const users = atom([{_id:1,_name:"DacHoa"}]);

export const createAndUpdate = (userInfo) =>{
    const usersTemp = users.value;
    if(userInfo._id){
        user.set({...userInfo});
        users.set(
            usersTemp.map(item => {
                if(item._id === userInfo._id){
                    return {...userInfo};
                }else{
                    return item;
                }
            })
        )
       
    }else{
        users.set([
            ...usersTemp,
            {...userInfo,
                _id : nanoid(8)    
            }
        ])
      
    }
    user.set({
        _id : '',
        _name: '',
        _email:'',
        _password:''
    })
}

export const deleteUser = (userid) =>{
    console.log(userid);
    const usersTemp = users.value;
    if(userid){
        let useridx = usersTemp.findIndex(item => item._id === userid)
        if(useridx !== -1 ){
            usersTemp.splice(useridx,1) 
            users.set([...usersTemp])
        }
    }
}
