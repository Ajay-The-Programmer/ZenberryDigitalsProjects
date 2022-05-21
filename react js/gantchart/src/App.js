import { Chart } from 'react-google-charts'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)
function daysToMilliseconds (days) {
  return days * 24 * 60 * 60 * 1000
}
// newDate = new Date('2015, 0, 1')
const row = { name: 'Estimate' }
const columns = [
  {
    type: 'string',
    label: 'Task ID'
  },
  {
    type: 'string',
    label: 'Task Name'
  },
  {
    type: 'date',
    label: 'Start Date'
  },
  {
    type: 'date',
    label: 'End Date'
  },
  {
    type: 'number',
    label: 'Duration'
  },
  {
    type: 'number',
    label: 'Percent Complete'
  },
  {
    type: 'string',
    label: 'Dependencies'
  }
]

const rows = [
  [
    'Estimate',
    `${row.name}`,
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    80,
    null
  ],
  [
    'Quote',
    'Quotes',
    new Date(2015, 0, 5),
    null,
    daysToMilliseconds(3),
    25,
    'Estimate'
  ],
  [
    'Send Quote 1',
    'Send Quote 1',
    null,
    new Date(2015, 0, 8),
    daysToMilliseconds(1),
    100,
    'Quote'
  ],
  [
    'Send Quote 2',
    'Send Quote 2',
    null,
    new Date(2015, 0, 8),
    daysToMilliseconds(1),
    50,
    'Quote'
  ],
  [
    'Job',
    'Jobs',
    new Date(2015, 0, 6),
    null,
    daysToMilliseconds(5),
    70,
    'Quote,Estimate'
  ]
]
// const chartEvents =

export const options = {
  title: 'Gantt chart',
  palette: [
    {
      color: '#5e97f6',
      dark: '#2a56c6',
      light: '#c6dafc'
    }
  ],
  criticalPathStyle: {
    stroke: 'red',
    strokeWidth: 2
  },
  labelStyle: {
    fontSize: 14,
    color: '#fff'
  },

  arrow: {
    angle: 100,
    radius: 0
  }
}
export const data = [columns, ...rows]

function App () {
  /* it is called after graph showed */
  const [temp, setTemp] = useState(false)
  const myfunction = () => {
    console.log('Hello')
    setTemp(true)
  }

  return (
    <>
      <Chart
        chartType='Gantt'
        width='100%'
        height='300px'
        columns={columns}
        data={data}
        chartEvents={[
          {
            callback: ({ chartWrapper, google }) => {
              chartWrapper.visualization.container.addListener(
                'onmouseover',
                () => {
                  console.log('Hello')
                  alert('Mouseover event!')
                }
                // myfunction()
              )
              console.log('google', google)
              // const chart = chartWrapper.getChart()
              // chart.container.addEventListener('click', ev => console.log(ev))
            }
          }
        ]}
        options={options}
        onLoad={myfunction}
      />
      {temp && (
        <Card sx={{ maxWidth: 275, bgcolor: 'text.disabled' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant='h5' component='div'>
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              adjective
            </Typography>
            <Typography variant='body2'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      )}
    </>
  )
}

export default App
