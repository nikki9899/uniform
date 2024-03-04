import React from 'react';

const Specifications = ({ data }) => {
  return (
    <div>
      <table className="table-auto">
        <tbody>
          {[
            { key: 'Style', value: data.Style },
            { key: 'Industry', value: data.Industry },
            { key: 'Material', value: data.Material },
            { key: 'MPN', value: data.MPN },
            { key: 'SKU', value: data.SKU },
            { key: 'Department', value: data.Department },
          ].map(({ key, value }) => (
            // Check if value is not null or undefined
            value !== null && value !== undefined && (
              <tr key={key}>
                <td className="pr-4 font-semibold">{key}</td>
                <td>
                  {typeof value === 'object'
                    ? JSON.stringify(value)
                    : String(value)}
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;



