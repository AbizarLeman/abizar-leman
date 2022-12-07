import { Alert, Avatar, Button, Card, CardContent, Snackbar, TextField, Typography } from '@mui/material'
import * as React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import emailjs from '@emailjs/browser'
import LoadingButton from '@mui/lab/LoadingButton'

function ContactForm() {
    const form = React.useRef()

    const [username, setUsername] = React.useState('')
    const [isUsernameValid, setIsUsernameValid] = React.useState(true)

    const [email, setEmail] = React.useState('')
    const [isEmailValid, setIsEmailValid] = React.useState(true)

    const [message, setMessage] = React.useState('')
    const [isMessageValid, setIsMessageValid] = React.useState(true)

    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const [severity, setSeverity] = React.useState('success')
    const [successMessage, setSuccessMessage] = React.useState('')

    const [isSendingMessage, setIsSendingMessage] = React.useState(false)

    const handleSubmitContactForm = (event) => {
        setIsSendingMessage(true)
        event.preventDefault()

        emailjs.sendForm('service_pbzoqui', 'template_t92dih4', form.current, 'user_oXgOIfGycHKuGCPoIpn1g')
            .then((result) => {
                setIsSendingMessage(false)
                setUsername('')
                setEmail('')
                setMessage('')
                setSeverity('success')
                setSuccessMessage('Your message is sent successfully!')
                setOpenSnackbar(true)
            }, (error) => {
                setSeverity('error')
                setSuccessMessage('Error, please try again later!')
                setIsSendingMessage(false)
                setOpenSnackbar(true)
            })
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false)
    }

    React.useEffect(() => {
        const emailRegex = /[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}/

        if (username === '') {
            setIsUsernameValid(false)
        } else {
            setIsUsernameValid(true)
        }

        if (email === '' || !emailRegex.test(email)) {
            setIsEmailValid(false)
        } else {
            setIsEmailValid(true)
        }

        if (message === '') {
            setIsMessageValid(false)
        } else {
            setIsMessageValid(true)
        }

    }, [username, email, message])

    return (
        <form ref={form} onSubmit={handleSubmitContactForm}>
            <Snackbar
                open={openSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {successMessage}
                </Alert>
            </Snackbar>
            <Card
                elevation={5}
                sx={{
                    border: 2,
                    borderRadius: 3,
                    borderColor: '#661005'
                }}
            >
                <CardContent>
                    <Typography
                        variant="h4"
                        color="#661005"
                        textAlign={'center'}
                        paragraph
                        marginBottom={1}
                    >
                        CONTACT FORM
                    </Typography>
                    <TextField sx={{ marginTop: 1 }} value={username} name="name" fullWidth label="Name" variant="outlined" onChange={(event) => setUsername(event.target.value)} />
                    <TextField sx={{ marginTop: 1 }} value={email} name="email" fullWidth label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
                    <TextField sx={{ marginTop: 1 }} value={message} name="message" fullWidth label="Message" variant="outlined" multiline rows={8} onChange={(event) => setMessage(event.target.value)} />
                    <LoadingButton
                        fullWidth
                        variant="contained"
                        size="large"
                        endIcon={<EmailIcon />}
                        color="primary"
                        type="submit"
                        sx={{ marginTop: 1 }}
                        loading={isSendingMessage}
                        loadingPosition="end"
                        disabled={!(isUsernameValid && isEmailValid && isMessageValid)}
                    >
                        Submit
                    </LoadingButton>
                </CardContent>
            </Card>
        </form>
    )
}

export default ContactForm