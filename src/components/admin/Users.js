import React from "react";
import Sidebar from './Sidebar';
import { useTable } from 'react-table'
import '../../css/tailwind1.css';

function Users()  {
    const data = React.useMemo(
     () => [
       {
         col1: '1',col2: 'john',col3: 'John Doe',col4: 'john@gmail.com',col5: '7485968574',col6: ' Edit'
       },
       {
         col1: '2',col2: 'john',col3: 'John Doe',col4: 'john@gmail.com',col5: '7485968574',col6: ' Edit'
       },
       {
         col1: '3',col2: 'john',col3: 'John Doe',col4: 'john@gmail.com',col5: '7485968574',col6: ' Edit'
       },
       {
         col1: '4',col2: 'john',col3: 'John Doe',col4: 'john@gmail.com',col5: '7485968574',col6: ' Edit'
       },
     ],
     []
   )
   const columns = React.useMemo(
     () => [
       {
         Header: 'Sr.no.',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Username',
         accessor: 'col2',
       },
       {
         Header: 'Full name',
         accessor: 'col3',
       },
       {
         Header: 'Email',
         accessor: 'col4',
       },
       {
         Header: 'Contact',
         accessor: 'col5',
       },
       {
         Header: 'Action',
         accessor: 'col6',
       },
     ],
     []
   )
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
    return (
        <>
        <Sidebar/>
        <div className="relative md:ml-64" style={{background: '#F6F7F8'}}>
          {/* <AdminNavbar /> */}
          {/* Header */}
          {/* <HeaderStats /> */}
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <div className="flex flex-wrap mt-4">
                  <div className="w-full mb-12 px-4">
                    <br/>
                    <div>
                      <i className="fas fa-home"></i>
                      <span style={{margin: '0 8px'}}>/</span>
                      <span>Users</span>
                    </div>
                    <div>
                      <h3>Users</h3>
                    </div>
                    <table {...getTableProps()} className='users_tabl'>
                      <thead>
                        {headerGroups.map(headerGroup => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                              <th
                                {...column.getHeaderProps()}
                              >
                                {column.render('Header')}
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                          prepareRow(row)
                          return (
                            <tr {...row.getRowProps()}>
                              {row.cells.map(cell => {
                                return (
                                  <td
                                    {...cell.getCellProps()}
                                  >
                                    {cell.render('Cell')}
                                  </td>
                                )
                              })}
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
              </div>
          </div>
        </div>
        </>
    );
}
export default Users;
