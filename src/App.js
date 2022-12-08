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
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, createTheme, Divider, Grid, IconButton, Link, Paper, Step, StepLabel, Stepper, Typography, Box, MobileStepper, TextField } from '@mui/material'

import LaptopIcon from '@mui/icons-material/Laptop'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import ApartmentIcon from '@mui/icons-material/Apartment'
import SchoolIcon from '@mui/icons-material/School'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import { Stack } from '@mui/system'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import ContactForm from './ContactForm'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
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

const pages = ['About Me', 'Background', 'Projects']
const images = [
  {
    label: 'Front-End',
    imgPath: 'frontend.png',
    icon: <LaptopIcon />
  },
  {
    label: 'Back-End',
    imgPath: 'backend.png',
    icon: <CodeIcon />
  },
  {
    label: 'Database',
    imgPath: 'database.png',
    icon: <StorageIcon />
  }
]

function App() {
  const contactForm = React.useRef()

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [tab, setTab] = React.useState('About Me')
  const [activeStep, setActiveStep] = React.useState(0)
  const [bannerHeight, setBannerHeight] = React.useState(0)
  const [footerHeight, setFooterHeight] = React.useState(0)
  const maxSteps = images.length

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  const moveTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  const moveToForm = () => {
    if (!contactForm.current) return
    contactForm.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    const banner = document.getElementById('banner')
    const footer = document.getElementById('footer')

    if (banner && footer) {
      setBannerHeight(banner.getBoundingClientRect().height)
      setFooterHeight(footer.getBoundingClientRect().height)
    }
  }, [])

  return (
    <main className="App">
      <Grid container direction="row" justifyContent="center" alignItems="center" marginY={3} id="banner">
        <Grid item xs={12}>
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
                {/* <Avatar sx={{ backgroundColor: '#270038' }}>
                  <IconButton size="large" sx={{ color: '#f0e0bb' }}>
                    <Typography
                      variant="overline"
                      color="#f0e0bb'"
                      textAlign={'center'}
                    >
                      CV
                    </Typography>
                  </IconButton>
                </Avatar> */}
                <Avatar sx={{ backgroundColor: '#270038' }}>
                  <IconButton size="large" sx={{ color: '#f0e0bb' }} onClick={() => moveToForm()} >
                    <EmailIcon />
                  </IconButton>
                </Avatar>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Paper sx={{ backgroundColor: '#f0e0bb', borderRadius: 0, minHeight: `calc(100vh - ${bannerHeight}px - ${footerHeight}px)` }} elevation={0}>
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
                  variant="body2"
                  color="black"
                  textAlign={'center'}
                  paragraph
                >
                  Hi, my name is Abizar Leman. I'm a computer science student expected to graduate in 2023. I have experience in building web APIs and web UIs using various frontend and backend technology stacks. I enjoy introducing solutions to business problems and learning software development best practices.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} marginY={1}>
                <Card
                  elevation={5}
                  sx={{
                    border: 2,
                    borderRadius: 3,
                    borderColor: '#270038'
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ backgroundColor: '#270038' }}>
                        {images[activeStep].icon}
                      </Avatar>
                    }
                    title={images[activeStep].label}
                  />
                  <CardContent>
                    <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                    >
                      {images.map((step, index) => (
                        <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                            <CardMedia
                              component={"img"}
                              src={step.imgPath}
                            />
                          ) : null}
                        </div>
                      ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      nextButton={
                        <Button
                          sx={{ color: '#270038' }}
                          size="large"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}
                        >
                          Next
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      }
                      backButton={
                        <Button sx={{ color: '#270038' }} size="large" onClick={handleBack} disabled={activeStep === 0}>
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                          Back
                        </Button>
                      }
                    />
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
                        <Link href="https://www.ubd.edu.bn" target="_blank" rel="noopener">University of Brunei Darussalam</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        paragraph
                      >
                        Expected to Graduate with Bsc. in Computer Science
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
                        <Link href="https://www.ubd.edu.bn" target="_blank" rel="noopener">University of Brunei Darussalam</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
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
                        <Link href="https://synapsebn.com" target="_blank" rel="noopener">SynapseBN</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        paragraph
                      >
                        Trainee Software Engineer (Internship)
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
                        <Link href="https://www.dynamiktechnologies.com.bn" target="_blank" rel="noopener">Dynamik Technologies</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        paragraph
                      >
                        Application Development Analyst (Internship)
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
                        <Link>Bata Store</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        paragraph
                      >
                        Shop Assistant (Part-time)
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
                        <Link href="https://www.ubd.edu.bn" target="_blank" rel="noopener">University of Brunei Darussalam</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        paragraph
                      >
                        Majoring in Computer Science
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
                        <Link>Goldenbake Sdn. Bhd.</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        paragraph
                      >
                        Clerk
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
                        <Link href="https://pengiranmudacollege.wixsite.com/maktabduli" target="_blank" rel="noopener">Maktab Duli Pengiran Muda Al-Muhtadee Billah</Link>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        paragraph
                      >
                        Completed A-Level Examination for Physics, Mathematics and Computer Science
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
                    borderRadius: 3,
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
                        variant="body2"
                        color="black"
                        textAlign={'left'}
                        paragraph
                      >
                        Submitted a final year project titled “Discovery Year Management System for School of Digital Science, University of Brunei Darussalam”. This project is presented as a solution for administration problem in the UBD Discovery Year Programme:
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        textAlign={'left'}
                        component="span"
                      >
                        <ol>
                          <li>Streamlined the administration and assessment process of internships, student exchange programmes and other activities conducted in the UBD Discovery Year Programme.</li>
                          <li>Provided centralised information propagation system for participating students.</li>
                          <li>The implementation of the system constitutes of a .NET Core web API and a React single-page application web client.</li>
                        </ol>
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      marginY={1}
                      sx={{
                        border: 2,
                        borderColor: '#270038',
                      }}
                    >
                      <CardMedia
                        component={"img"}
                        src={'dymsposter.png'}
                      />
                    </Grid>
                    <Grid item xs={12} marginY={1}>
                      <Typography
                        variant="caption"
                        color="black"
                        textAlign={'center'}
                        paragraph
                      >
                        Poster I created for an <Link href="https://ubdsds.substack.com/p/sds-final-year-project-showcase-to" target="_blank" rel="noopener">exposition</Link> at School of Digital Science, UBD.
                      </Typography>
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
                    borderRadius: 3,
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
                        variant="body2"
                        color="black"
                        textAlign={'left'}
                        paragraph
                      >
                        Participated in a hackathon hosted by Universiti Teknologi Brunei and facilitated by Grominda Sdn Bhd.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        textAlign={'left'}
                        paragraph
                      >
                        Our team developed a solution for real-time agricultural output data collection, titled 'Farm Record Tracking System'.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        textAlign={'left'}
                        paragraph
                      >
                        The would-be users of the system are farmers who will submit the farm output data and the statisticians in the back office who will be able to see the submitted output and generate customised reports.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="black"
                        textAlign={'left'}
                        paragraph
                      >
                        The solution was a web application developed using the Laravel framework.
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
      </Paper>
      <Avatar sx={{ backgroundColor: '#661005', position: 'fixed', bottom: '5vh', right: '5vh', border: 3, borderColor: '#270038' }}>
        <IconButton size="large" sx={{ color: '#f0e0bb' }} onClick={moveTop}>
          <ArrowUpwardIcon />
        </IconButton>
      </Avatar>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: '#270038' }} padding={3} id="footer">
        <Grid ref={contactForm} item xs={12} md={4} marginY={1}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} marginTop={3}>
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
    </main>
  )
}

export default App
