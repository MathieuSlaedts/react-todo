import React, {useEffect} from "react";
import './Users.scss';

const Users = (props) => {

    const handleDelete = (id, ev) => {
        ev.preventDefault();
        console.log(id);
    }

    useEffect(() => {
        console.log(props);
      }, []);

    return (
        <ul>
            {props.users.map((el, index) =>
                <li key={el+'_'+index} className={"user"}>
                    <p className={"user-title"}>{el}</p>
                </li>
            )}
        </ul>
    );
}

export default Users;