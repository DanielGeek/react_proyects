import { ConfirmationNumberOutlined } from '@mui/icons-material'
import { AdminLayout } from '../../components/layouts'

const OrdersPage = () => {
  return (
    <AdminLayout 
        title={'Orders'} 
        subTitle={'Order maintenances'}
        icon={ <ConfirmationNumberOutlined /> }
    >

    </AdminLayout>
  )
}

export default OrdersPage