import React from 'react'
import { array } from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderCollapse: 'collapse',
    '& td': {
      padding: '0 20px',
      verticalAlign: 'middle',
    },
    '& td:nth-child(2)': {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.6em',
      backgroundColor: '#ff0',
    },
    '& tr': {
      backgroundColor: '#ddd',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#fff',
      padding: '0',
    },
    '& tr:nth-child(odd) > td:nth-child(2)': {
      backgroundColor: '#dd0',
    },
    '& thead > tr:nth-child(odd)': {
      '& td': {
        backgroundColor: '#444',
        color: '#fff',
        textTransform: 'uppercase',
      },
      '& td:nth-child(2)': {
        backgroundColor: '#330',
        color: '#ff0',
      },
    },
  },
})

const Table = ({ header, data }) => {
  const classes = useStyles()

  return (
    <table className={classes.root}>
      <thead>
        <tr>
          {header.map((cell, i) => (
            <td key={i}>{cell}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  header: array.isRequired,
  data: array.isRequired,
}

export default Table
