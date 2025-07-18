import React from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../images/user.png";

const CardUser = (props) => {
   const { id, name } = props.user;
   const navigate = useNavigate();

   const handleEditClick = () => {
      navigate('/edit', { state: { contact: props.user } });
   };

   return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="item" style={{
           width: '650px',
           display: 'flex',
           alignItems: 'center',
           position: 'relative',
           backgroundColor: props.backgroundColor || '#ffffff',
           padding: '12px',
           borderRadius: '5px',
           marginBottom: '5px',
           boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
           <img className="ui avatar image" src={user} alt="user" style={{ width: '50px', height: '50px', left: '25px' }} />
           <div className="content" style={{ flex: 1 }}>
              <Link
                 to={`/user/${id}`} 
                 state={{ contact: props.user }}
                 style={{ textDecoration: 'none', color: 'black' }}>
                <div className="header" style={{ fontWeight: 'bold', marginLeft: '125px', fontSize: '16px' }}>{name}</div>

              </Link>
           </div>
             <i
             className="trash alternate outline icon large" style={{ color: 'red', cursor: 'pointer', position: 'absolute', right: '30px' }}
             onClick={() => props.clickHandler(props.user.id)}
            ></i>

           <i
             className="edit alternate outline icon large" 
             style={{ color: 'blue', cursor: 'pointer', position: 'absolute', right: '115px' }}
             onClick={handleEditClick}
           ></i>
           
        </div>
      </div>
   );
}

export default CardUser;