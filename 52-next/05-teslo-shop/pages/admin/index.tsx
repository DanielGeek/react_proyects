import React from 'react'
import { AttachMoneyOutlined, CreditCardOffOutlined, DashboardOutlined, GroupOutlined, CategoryOutlined, ProductionQuantityLimitsOutlined, CancelPresentationOutlined, AccessTimeOutlined } from '@mui/icons-material';
import { AdminLayout } from '../../components/layouts';
import { Grid } from '@mui/material';
import { SummaryTitle } from '../../components/admin';

const DashboardPage = () => {
  return (
    <AdminLayout
        title='Dashboard'
        subTitle='General statistics'
        icon={ <DashboardOutlined />}
    >
        <Grid container spacing={2}>
            
            <SummaryTitle
                title={ 1 }
                subTitle="Total orders"
                icon={ <CreditCardOffOutlined color="secondary" sx={{ fontSize: 40 }} />}
            />

            <SummaryTitle
                title={ 2 }
                subTitle="Paid orders"
                icon={ <AttachMoneyOutlined color="success" sx={{ fontSize: 40 }} />}
            />

            <SummaryTitle
                title={ 3 }
                subTitle="Pending orders"
                icon={ <CreditCardOffOutlined color="error" sx={{ fontSize: 40 }} />}
            />

            <SummaryTitle
                title={ 4 }
                subTitle="Clients"
                icon={ <GroupOutlined color="primary" sx={{ fontSize: 40 }} />}
            />

            <SummaryTitle
                title={ 5 }
                subTitle="Products"
                icon={ <CategoryOutlined color="warning" sx={{ fontSize: 40 }} />}
            />
            
            <SummaryTitle
                title={ 6 }
                subTitle="Without existence"
                icon={ <CancelPresentationOutlined color="error" sx={{ fontSize: 40 }} />}
            />

            <SummaryTitle
                title={ 7 }
                subTitle="Low inventory"
                icon={ <ProductionQuantityLimitsOutlined color="warning" sx={{ fontSize: 40 }} />}
            />

            <SummaryTitle
                title={ 8 }
                subTitle="Update on"
                icon={ <AccessTimeOutlined color="secondary" sx={{ fontSize: 40 }} />}
            />
        </Grid>
    </AdminLayout>
  )
}

export default DashboardPage