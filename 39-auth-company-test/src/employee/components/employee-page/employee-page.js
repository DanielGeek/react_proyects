import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {AuthContext} from '../../../utils/contexts/auth-context'

export const EmployeePage = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h5">
            Employee page
          </Typography>
        </Toolbar>
      </AppBar>

      <Button type="button">Delete</Button>
    </>
  )
}

export default {EmployeePage}