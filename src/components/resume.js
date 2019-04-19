import React from 'react'
import styled from 'styled-components'
import resumedata from './resume-data'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: grid;
  font-weight: normal;
  grid-gap: 1vw;
  grid-template-columns: max-content 1fr;
  margin-bottom: 0.5vw;
`

const Name = styled.span`
  font-weight: bold;
`

const Resume = () => (
  <>
    {resumedata.map(({ id, title, work }) => (
      <div key={id}>
        <p>{title}</p>
        <List>
          {work.map(({ id: workID, date, name, location }) => (
            <ListItem key={workID}>
              <span>{date}</span>
              <span>
                <Name>{name}</Name> - {location}
              </span>
            </ListItem>
          ))}
        </List>
      </div>
    ))}
  </>
)

export default Resume
