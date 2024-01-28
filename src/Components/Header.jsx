import { Avatar, Badge, Box, Grid, IconButton } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()
  //   //for set the number of notifications
  //   // const [numberOfNotifications, setNumberOfNotifications] = useState(0)

  //   //get auth context and get details from authContext

  const handleOnClick = (event) => {
    navigate('/profile')
  }

  return (
    <div>
      <Box
        component="div"
        sx={{
          '& .MuiTextField-root': { m: 1 },
          '& .MuiButton-root': { m: 1 },
          paddingLeft: '180px',
          paddingRight: '30px',
          paddingTop: '10px',
          bgcolor: '#1B4242'
        }}
        noValidate
        autoComplete="off"
        display="flex"
        //position="fixed"
        justifyContent="center"
        alignItems="center"
        height="100%"
        flexDirection="column"
      >
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <h1 style={{ color: 'white', marginLeft:'60px', marginTop:'5px' }}>Smart Collector</h1>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <IconButton aria-label="notifications" sx={{ marginRight: '40px', backgroundColor:'white', marginBottom:'10px' }}>
              <Badge badgeContent={1} color="error">
                <NotificationsActiveIcon
                  style={{ color: 'black', fontSize: 35 }}
                />
              </Badge>
            </IconButton>

            <Avatar
              sx={{ bgcolor: '#789461', cursor: 'pointer', marginRight:'20px', marginTop:'3px' }}
              //navigate to the profile page
              onClick={handleOnClick}
            >
              AN
            </Avatar>
            <div
            style={{
              height: '30px',
              marginTop: '1px',
              padding: '5px',
              color: 'white'
            }}>
              Admin
              <br />
              EID0001
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Header
