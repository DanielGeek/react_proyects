import React from 'react'
import { DashboardOutlined } from '@mui/icons-material';
import { AdminLayout } from '../../components/layouts';

const DashboardPage = () => {
  return (
    <AdminLayout
        title='Dashboard'
        subTitle='General statistics'
        icon={ <DashboardOutlined />}
    >
        <h3>Hello World</h3>
    </AdminLayout>
  )
}

export default DashboardPage