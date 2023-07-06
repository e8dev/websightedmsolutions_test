import {FaRankingStar} from "react-icons/fa6";
import React, {FC, useState, useContext} from "react";
import { AuthContext } from '../../Auth';

const basicList = [
  {id: 1, name: "Article 1", text: "lorem ipsum"},
  {id: 2, name: "Article 2", text: "some perfect text"},
  {id: 3, name: "Article 3", text: "interesting story"},
];


export const Table1 = () => {

  // @ts-ignore
  const { user, setIsAuthenticated } = useContext(AuthContext);

  const [list, setList] = useState(basicList);

  function search(query: string){

    let result = basicList.filter(function (el) {
      return el.name.indexOf(query) !== -1 || el.text.indexOf(query) !== -1;
      }
    );

    setList(result);

  }

  return (
    <div className={'h-full d-flex flex-column'}>
      
        
        <div className="d-flex justify-content-between">
          <div><FaRankingStar className="me-3"/> Articles</div>
          <div>
            {user.email}
            <button className="btn btn-sm btn-primary mx-3" onClick={() => {setIsAuthenticated(false)}}>Log out</button>
          </div>
        </div>

        <div className="my-6">
          <input className="form-control" placeholder="search" onChange={(e) => {search(e.target.value)}} />
        </div>
      
  
      <div className="card overflow-hidden flex-grow-1">
        <table className="table text-sm table-borderless table-striped align-middle gs-0 gy-3 m-0">
          <thead>
            <tr className="">
              <th className="text-light-gray"></th>
              <th className="text-light-gray">ID</th>
              <th className="text-light-gray">Name</th>
              <th className="text-light-gray">Text</th>
              <th className="text-light-gray">Actions</th>
            </tr>
          </thead>
          <tbody>

            { list.length > 0 && list.map((item, index) => {
              return (
                <tr key={index}>
                  <td></td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.text}</td>
                  <td>
                    {user && user.role == 1 ? (
                      <button className="btn btn-primary">Edit</button>
                    ) : (
                      <button className="btn btn-secondary">View</button>
                    )}
                  </td>
                </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}