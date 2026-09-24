import React from"react";
export default function Navbar({setPage,isAuthenticated,handleLogout}) {
    return(
        <nav style={{padding:'15px',background:'#333',color:'#fff',display:'flex',justifyContent:'space-between'}}>
            <h2>Url Shortener App</h2>
            <div>
                {!isAuthenticated?(
                    <>
                        <button onClick={()=> setPage('login')} style={{marginRight:'10px'}}>login</button>
                        <buuton onClick={()=>setPage('register')}>Register</buuton>
                    </>
                ):  (
                    <>
                        <button onClick={()=>setPage('dashboard')} style={{marginRight:'10px'}}>Dashboard</button>
                        <button onClick={handleLogout} style={{background:'red',color:'white'}}>Logout</button>
                    </>
                    

                )}
            </div>
        </nav>
    );
}