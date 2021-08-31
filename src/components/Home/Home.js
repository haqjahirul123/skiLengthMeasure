import React, { useContext } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { useState } from "react";

const Home = () => {
  const [users, setUser] = useContext(UserContext);
  const [cal, setCal] = useState([]);

  // const measure=()=>{
  //   let a=parseInt(users.user.id)
  //   console.log()
  //   let b=parseInt(users.user.age_group3)
  //   return a+b
   
  // }
 
  // setCal(measure)
 



  return (
    <div>
      <Link to="/create">
        <Button className="bg cont">
          New Calcullation
        </Button>
      </Link>

      <Table striped bordered>
        <thead>
          <tr>
            <th>Body Length</th>
            <th>Age</th>
            {/* <th>Age[5-8]</th>
            <th>Age 8+</th> */}
            <th>Measurement</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const a=parseInt(user.length)
            const b=parseInt(user.age_group1)
            // const c=parseInt(user.age_group2)
            // const d=parseInt(user.age_group3)
           const abc=(a,b)=>{
             while(!NaN){
              if(b<=4 && b>=0 ){
                return 0+a+b
  
               }
                else if(b<=8 && b>=5 ){
                return 10+a+b
  
               }
               else{
                 return 20+a+b
               }

             }
              
           }
             

            

             return(
            <tr>
              <td>{user.length}</td>
              <td>{user.age_group1}</td>
              <td>{abc(a,b)}</td>
              <td>
                <Link to={"/read/"+user.length}>
                      
                      <div class='cont margin'>
                      <button class='button'>
                            <div class='blob'>
                                <svg
                                xlink='http://www.w3.org/1999/xlink'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 310 350'>
                                <path d='M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z' />
                          
                                </svg>
                              </div>
                            <div class='line'></div>
                            <div class='text'>
                              <p>R</p>
                              <p>E</p>
                              <p>A</p>
                              <p>D</p>
                              <p>!</p>
                            </div>
                        </button>  
                    </div>          
                </Link>
                <Link to={"/edit/"+user.length}>
                  <div class='cont'>
                      <button class='button'>
                            <div class='blob'>
                                <svg
                                xlink='http://www.w3.org/1999/xlink'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 310 350'>
                                <path d='M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z' />
                          
                                </svg>
                              </div>
                            <div class='line'></div>
                            <div class='text'>
                              <p>E</p>
                              <p>D</p>
                              <p>I</p>
                              <p>T</p>
                              <p>!</p>
                            </div>
                        </button>  
                    </div>          
                </Link>
                <Link to={"/delete/"+user.length}>
                <div class='cont margin'>
                      <button class='button'>
                            <div class='blob'>
                                <svg
                                xlink='http://www.w3.org/1999/xlink'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 310 350'>
                                <path d='M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z' />
                          
                                </svg>
                              </div>
                            <div class='line'></div>
                            <div class='text'>
                              <p>D</p>
                              <p>E</p>
                              <p>L</p>
                              <p>E</p>
                              <p>T</p>
                              <p>!</p>
                            </div>
                        </button>  
                    </div>          
                </Link>
              </td>
            </tr>
          )})}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
