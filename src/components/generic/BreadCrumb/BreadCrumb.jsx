import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { BASE_URL, NAME_APP } from 'utilities/constants';


const prepareBreadCrumb = (pathname) => {
  if (pathname === '/') return <Breadcrumbs aria-label="breadcrumb"><Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary"><HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />{NAME_APP}</Typography></Breadcrumbs>
  if (!pathname.match('/detail/')) return (<Breadcrumbs aria-label="breadcrumb">
      <Link to={BASE_URL}
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href={BASE_URL}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        {NAME_APP}
    </Link></Breadcrumbs>)
  const splitPath = pathname.split('/')
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to={BASE_URL}
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href="/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        {NAME_APP}
      </Link>
      <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <PhoneAndroidIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Product: {splitPath[2]}
        </Typography>
    </Breadcrumbs>)
}

export default function BreadCrumb() {

  const {pathname} = useLocation()

  return (

    <div role="presentation">
      {prepareBreadCrumb(pathname)}
    </div>
  )
}



/*

const prepareBreadCrumb = (pathname) => {
  if (pathname === '/') return <span>Home</span>
  const splitPath = pathname.split('/')
  return <div><span><Link to='/'>Home</Link></span> - Product: {splitPath[2]} </div>
}

const BreadCrumb = () => {
  const {pathname} = useLocation()


  return (
    <div>{prepareBreadCrumb(pathname)}</div>
  )
}

export default BreadCrumb*/