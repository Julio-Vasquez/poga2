import { Router, Redirect } from '@reach/router'
import { Suspense, lazy } from 'react'

import { Loading } from '../components/Loading'

const Report = lazy(() => import('./../views/Report'))
const OptionGrade = lazy(() => import('./../views/OptionGrade'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading message="Cargando" />}>
      <Router>
        <Report path="/" />
        <Report path="/report" />
        <OptionGrade path="/poga2" />
        <Redirect from="*" to="/" noThrow />
      </Router>
    </Suspense>
  )
}
