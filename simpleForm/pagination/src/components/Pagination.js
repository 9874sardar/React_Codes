import React from 'react'
import { number } from 'yup';

export const Pagination = ({postPerPage, totalPosts ,paginate}) => {
    const pageNumbers = [];

    for(let i=1;i<= Math.ceil(totalPosts / postPerPage);i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map( number => (
                   <div key={number} >
                       <a onClick={() => paginate(number)} href="!#" className="page-link">
                           {number}
                       </a>

                   </div> 
                ))}

            </ul>
            
        </nav>
    )
}
export default Pagination