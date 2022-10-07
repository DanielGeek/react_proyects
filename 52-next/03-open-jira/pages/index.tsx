import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';

import { Layout } from '../components/layout';
import { EntryList } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="To do" />
              <EntryList />
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="Doing" />
              <EntryList />
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px )' }}>
            <CardHeader title="Done" />
              <EntryList />
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default HomePage;
