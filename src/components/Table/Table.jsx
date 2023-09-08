import React from 'react';
import PropTypes from 'prop-types';

const Table = ({data}) => {
    return (
        <Table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </Table>
    );
};

Table.propTypes = {
    
};

export default Table;