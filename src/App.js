import logo from './logo.svg'
import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import * as React from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, createTheme, Divider, Grid, IconButton, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'

import LaptopIcon from '@mui/icons-material/Laptop'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import ApartmentIcon from '@mui/icons-material/Apartment'
import SchoolIcon from '@mui/icons-material/School'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import { Stack } from '@mui/system'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const pages = ['About Me', 'Background', 'Projects']

const theme = createTheme({
  palette: {
    primary: {
      main: '#661005',
    },
    secondary: {
      main: '#f0e0bb'
      // main: '#270038',
    }
  }
})

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [tab, setTab] = React.useState('About Me')

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }

  const moveTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <main className="App">
      <Grid container direction="row" justifyContent="center" alignItems="center" marginY={3}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h1"
            color="#f0e0bb"
            textAlign={'center'}
            sx={{
              [theme.breakpoints.between('xs', 'md')]: {
                fontSize: '4rem',
              },
            }}
          >
            Abizar Leman
          </Typography>
        </Grid>
        <Grid item xs={8} md={6} marginTop={1} marginBottom={0}>
          <Typography
            variant="overline"
            color="#f0e0bb"
            textAlign={'center'}
            paragraph
          >
            Aspiring software developer with interests in languages and mathematics.
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={0} marginBottom={1}>
        <Grid item xs={5} md={1} marginX={1}>
          <CardActions sx={{ justifyContent: "center" }}>
            <Avatar sx={{ backgroundColor: '#270038' }}>
              <IconButton size="large" sx={{ color: '#f0e0bb' }} onClick={() => window.open("https://github.com/AbizarLeman", "_blank")}>
                <GitHubIcon />
              </IconButton>
            </Avatar>
            <Avatar sx={{ backgroundColor: '#270038' }}>
              <IconButton size="large" sx={{ color: '#f0e0bb' }} onClick={() => window.open("https://www.linkedin.com/in/abizar-leman", "_blank")}>
                <LinkedInIcon />
              </IconButton>
            </Avatar>
          </CardActions>
        </Grid>
      </Grid>
      <Paper sx={{ backgroundColor: '#f0e0bb', borderRadius: 0 }} elevation={0}>
        <TabContext value={tab}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <TabList onChange={handleTabChange} variant="fullWidth" textColor='primary' sx={{ marginX: 2 }}>
                {pages.map((page) => (
                  <Tab key={page} label={page} value={page} />
                ))}
              </TabList>
            </Grid>
          </Grid>
          <TabPanel value="About Me">
            <Grid container direction="row" justifyContent="center" alignItems="center" marginY={1}>
              <Grid item xs={12} md={8} marginY={1}>
                <Typography
                  variant="body1"
                  color="black"
                  textAlign={'center'}
                  paragraph
                >
                  Hi, my name is Abizar Leman. I'm a computer science student expected to graduate in 2023. I have experience in building web APIs and web UIs using various frontend and backend technology stacks. I enjoy introducing solutions to business problems and learning software development best practices.
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} marginY={1}>
                <Card
                  elevation={5}
                  sx={{
                    border: 2,
                    borderRadius: 5,
                    borderColor: '#270038'
                  }}
                >
                  <CardContent>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                      <Grid item xs={12} md={6} marginY={1}>
                        <Typography
                          variant="h2"
                          color="secondary"
                          textAlign={'center'}
                          paragraph
                          sx={{
                            [theme.breakpoints.between('xs', 'md')]: {
                              fontSize: '2rem',
                            },
                          }}
                        >
                          <LaptopIcon style={{ verticalAlign: "middle", fontSize: '6rem' }} /> Front-End
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6} marginY={1}>
                        <CardMedia
                          component={"img"}
                          src={'frontend.png'}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8} marginY={1}>
                <Card
                  elevation={5}
                  sx={{
                    border: 2,
                    borderRadius: 5,
                    borderColor: '#270038',
                    '&:hover': {
                      margin: '0.1rem !important'
                    }
                  }}
                >
                  <CardContent>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                      <Grid item xs={12} md={6} marginY={1}>
                        <Typography
                          variant="h2"
                          color="secondary"
                          textAlign={'center'}
                          paragraph
                          sx={{
                            [theme.breakpoints.between('xs', 'md')]: {
                              fontSize: '2rem',
                            },
                          }}
                        >
                          <CodeIcon style={{ verticalAlign: "middle", fontSize: '6rem' }} /> Back-End
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6} marginY={1}>
                        <CardMedia
                          component={"img"}
                          src={'backend.png'}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={8} marginY={1}>
                <Card
                  elevation={5}
                  sx={{
                    border: 2,
                    borderRadius: 5,
                    borderColor: '#270038',
                  }}
                >
                  <CardContent>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                      <Grid item xs={12} md={6} marginY={1}>
                        <Typography
                          variant="h2"
                          color="secondary"
                          textAlign={'center'}
                          paragraph
                          sx={{
                            [theme.breakpoints.between('xs', 'md')]: {
                              fontSize: '2rem',
                            },
                          }}
                        >
                          <StorageIcon style={{ verticalAlign: "middle", fontSize: '6rem' }} /> Database
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6} marginY={1}>
                        <CardMedia
                          component={"img"}
                          src={'database.png'}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="Background">
            <Grid container direction="row" justifyContent="center" alignItems="center" marginY={1}>
              <Grid item xs={12} md={4} marginY={1}>
                <Stepper activeStep={1} orientation="vertical">
                  <Step>
                    <StepLabel icon={<SchoolIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Expected to Graduate with Bsc. in Computer Science, UBD
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        August 2023
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel icon={<SchoolIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Submitted Final Year Project and Completed Final Exam
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        November 2022
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel icon={<ApartmentIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Internship at SynapseBN as Trainee Software Engineer
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        From August 2021 to December 2021
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel icon={<ApartmentIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Internship at Dynamik Technologies as Application Development Analyst
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        From January 2021 to July 2021
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel icon={<ApartmentIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Working Part-Time at Bata Store as Shop Assistant
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        From May 2018 to April 2019
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel icon={<SchoolIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Enrolled at University of Brunei Darussalam, Majoring in Computer Science
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        August 2018
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel icon={<ApartmentIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Employed at Goldenbake Sdn Bhd as Clerk
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        From March 2017 to October 2017
                      </Typography>
                    </StepLabel>
                  </Step>
                  <Step>
                    <StepLabel icon={<SchoolIcon style={{ verticalAlign: "middle", fontSize: '2rem', color: '#661005' }} />}>
                      <Typography
                        variant="overline"
                        color="primary"
                        paragraph
                      >
                        Completed A-Level Examination
                      </Typography>
                      <Typography color={"black"} fontStyle="italic" variant="caption">
                        November 2015
                      </Typography>
                    </StepLabel>
                  </Step>
                </Stepper>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="Projects">
            <Grid container direction="row" justifyContent="center" alignItems="center" marginY={1}>
              <Grid item xs={12} md={8} marginY={1}>
                <Card
                  elevation={5}
                  sx={{
                    border: 2,
                    borderRadius: 5,
                    borderColor: '#270038',
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ backgroundColor: '#270038' }}>
                        <TravelExploreIcon />
                      </Avatar>
                    }
                    title="Discovery Year Management System"
                    subheader="January 2022 to November 2022"
                  />
                  <CardContent>
                    <Grid item xs={12} marginY={1}>
                      <Typography
                        variant="body1"
                        color="black"
                        textAlign={'left'}
                        paragraph
                      >
                        Submitted a final year project titled “Discovery Year Management System for School of Digital Science, University of Brunei Darussalam”. This project is presented as a solution for administration problem in the UBD Discovery Year Programme:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="black"
                        textAlign={'left'}
                      >
                        <ol>
                          <li>Streamlined the administration and assessment process of internships, student exchange programmes and other activities conducted in the UBD Discovery Year Programme.</li>
                          <li>Provided centralised information propagation system for participating students.</li>
                          <li>The implementation of the system constitutes of a .NET Core web API and a React single-page application web client.</li>
                        </ol>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} marginY={1}>
                      <CardMedia
                        component={"img"}
                        src={'dymsposter.png'}
                      />
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginY={1}>
                      <Grid item xs={12} md={3}>
                        <Button
                          onClick={() => window.open("http://dy.sds.ubd.edu.bn", "_blank")}
                          fullWidth
                          variant="text"
                          size="large"
                          endIcon={<OpenInNewIcon />}
                          color="secondary"
                        >
                          View Project
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={8} marginY={1}>
                <Card
                  elevation={5}
                  sx={{
                    border: 2,
                    borderRadius: 5,
                    borderColor: '#270038',
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ backgroundColor: '#270038' }}>
                        <AgricultureIcon />
                      </Avatar>
                    }
                    title="Farm Record Tracking System"
                    subheader="December 2021"
                  />
                  <CardContent>
                    <Grid item xs={12} marginY={1}>
                      <Typography
                        variant="body1"
                        color="black"
                        textAlign={'left'}
                        paragraph
                      >
                        Participated in a hackathon hosted by Universiti Teknologi Brunei and facilitated by Grominda Sdn Bhd. Our team developed a solution for real-time agricultural output data collection, titled 'Farm Record Tracking System'. The would-be users of the system are farmers who will submit the farm output data and the statisticians in the back office who will be able to see the submitted output and generate customised reports. The solution was a web application developed using the Laravel framework.
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid container direction="row" justifyContent="center" alignItems="center" marginY={1}>
                      <Grid item xs={12} md={3}>
                        <Button
                          onClick={() => window.open("https://github.com/AbizarLeman/frts", "_blank")}
                          fullWidth
                          variant="text"
                          size="large"
                          endIcon={<OpenInNewIcon />}
                          color="secondary"
                        >
                          View Project
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: '#270038' }} padding={3}>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="#f0e0bb"
              textAlign={'center'}
              paragraph
            >
              Copyright &copy; {new Date().getFullYear()}.
            </Typography>
          </Grid>
        </Grid>
        <Avatar sx={{ backgroundColor: '#661005', position: 'fixed', bottom: '5vh', right: '5vh', border: 3, borderColor: '#270038' }}>
          <IconButton size="large" sx={{ color: '#f0e0bb' }} onClick={moveTop}>
            <ArrowUpwardIcon />
          </IconButton>
        </Avatar>
      </Paper>
    </main>
  )
}

export default App
