import { UniamazoniaLayout } from './layout/UniamazoniaLayout'

import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <div className="App">
      <UniamazoniaLayout>
        <AppRoutes />
      </UniamazoniaLayout>
    </div>
  )
}

export default App
