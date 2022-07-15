import * as React from "react"
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../css/style.css';
import Paper from '@mui/material/Paper';
import { StaticImage } from "gatsby-plugin-image"
import Chip from '@mui/material/Chip';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import { purple, red } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyle: 'none'
}));

const socialLink =  [
      {
        key: 0,
        label: 'Facebook',
        link: '',
        logo: <Icon icon="bxl:facebook"/>
      },
      {
        key: 1,
        label: 'Twitter',
        link: '',
        logo: <Icon icon="bytesize:twitter"/>
      },
      {
        key: 2,
        label: 'Instagram',
        link: '',
        logo: <Icon icon="bxl:instagram"/>
      },
      {
        key: 3,
        label: 'LinkedIn',
        link: '',
        logo: <Icon icon="bxl:linkedin"/>
      }
    ];

    const Contacts = [
        {
          key: 0,
          label: 'Téléphone',
          data: '+33 769096108',
          color: '#dc2968',
          logo: <Icon className="fs-16" icon="bi:phone" style={{color: "#dc2968"}} />
        },
        {
          key: 1,
          label: 'Email',
          data: 'yahanthony8@gmail.com',
          color: '#ffa700',
          logo: <Icon className="fs-16" icon="ci:mail" style={{color: "#ffa700"}} />
        },
        {
          key: 3,
          label: 'Localisation',
          data: 'Marseille (13)',
          color: '#ff008f',
          logo: <Icon className="fs-16" icon="bxs:map" style={{color: "#ff008f"}}/>
        },
        {
          key: 4,
          label: 'Signe astrologique',
          data: 'Belier',
          logo:  <Icon className="fs-16" icon="noto:ram"/>
        }
    ];

const NavItems = [
  {
    key: 0,
    label: 'A propos',
    icon: <Icon style={{fontSize: '20px'}} icon="charm:person" />,
    link: ''
  },
  {
    key: 1,
    label: 'Cv',
    icon: <Icon style={{fontSize: '20px'}} icon="akar-icons:file" />,
    link: ''
  },
  {
    key: 2,
    label: 'Projets',
    icon: <Icon style={{fontSize: '20px'}} icon="fa6-solid:cube" />,
    link: ''
  },
  {
    key: 3,
    label: 'Blogs',
    icon: <Icon style={{fontSize: '20px'}} icon="brandico:blogger-rect" />,
    link: ''
  },
  {
    key: 4,
    label: 'Contact',
    icon: <Icon style={{fontSize: '20px'}} icon="fa:address-book-o" />,
    link: ''
  }
]

const CustomedButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[700],
      },
}));

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="mycontainer" style={{height: '100%', 'width': '100%'}}>
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          alignItems="center"
          className="h-100"
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item style={{paddingBottom: "3ex"}}>
                <Stack direction={{ xs: "column"}}>
                      <Stack direction={{xs: "row"}} alignItems="center" justifyContent="center">
                          <div className="position-relative">
                              <Stack className="position-absolute left-0 right-0 bottom-0" justifyContent="center" alignItems="center" style={{top: '-38px'}}>
                                <Item className="p-0 round">
                                <StaticImage className="round" src="../images/mitch.jpg" alt="MITASHI OTHA" placeholder="blurred" layout="fixed" width={150} height={150}/>
                                </Item>
                              </Stack>
                          </div>
                      </Stack>
                      <Stack direction="column" alignItems="center" justifyContent="center" className="mt-5">
                        <h1 className="fs-18 text-black">
                          MITASHI OTHA Anthony
                        </h1>
                        <Chip label="Développeur web fullstack"/>
                        <div style={{display: 'flex', gap: '5px', marginTop: '1rem'}}>
                            {
                              socialLink.map(item=> {
                                return <ListItem key={item.key}>
                                      <Item className="d-flex align-items-center justify-content-center">
                                          {item.logo}
                                      </Item>
                                </ListItem>
                              })
                            }
                        </div>
                      </Stack>
                        <Item style={{marginTop: '3ex', marginLeft: '3ex', marginRight: '3ex'}}>
                          <Stack direction="column" gap="15px">
                              {
                                Contacts.map(item=> {
                                  return <ListItem key={item.key}>
                                      <Stack direction="row" gap="15px">
                                          <Item className="d-flex align-items-center justify-content-center h-30">
                                                {
                                                  item.logo
                                                }
                                          </Item>
                                          <Stack direction="column" alignItems="baseline">
                                              <small> {item.label} </small>
                                              <span> {item.data} </span>
                                          </Stack>
                                      </Stack>
                                  </ListItem>
                                })
                              }
                          </Stack>
                        </Item>
                        <Stack justifyContent="center" style={{marginTop: '3ex'}}>
                            <div>
                              <CustomedButton alignItems="center" variant="contained" style={{gap: '5px'}}> 
                                <Icon icon="fa:download" /> 
                                <span>Télécharger mon cv</span>
                              </CustomedButton>
                            </div>
                        </Stack>
                </Stack>
              </Item>
              
            </Grid>
            <Grid item xs={8}>
              <Item style={{padding: '3ex'}}>
                  <Stack direction="row" justifyContent="end">
                      {
                        NavItems.map(item=> {
                          return <ListItem>
                              <Item style={{width: '90px'}}>
                                  <Stack direction="column" alignItems="center" justifyContent="center">
                                    <span> {item.icon} </span>
                                    <span style={{marginTop: "3px"}}> {item.label} </span> 
                                  </Stack>
                              </Item>
                          </ListItem>
                        })
                      }
                  </Stack>
              </Item>
              <Item style={{marginTop: "3ex", padding: '3ex'}}>
                      <Stack direction="row" alignItems="center">
                         <h1 className="fw-bold text-black"> curriculum vitae </h1>
                         <div style={{marginLeft: '3ex'}} id="ruban"></div>
                      </Stack>
              </Item>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </React.Fragment>
  )
}

export default IndexPage
