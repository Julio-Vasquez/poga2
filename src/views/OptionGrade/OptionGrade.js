import { Card } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getAgreement } from '../../services/Agreement/AgreementSlice'
import { getCommittee } from '../../services/Committee/CommitteeSlice'
import { getModality, Modality } from '../../services/Modality/ModalitySlice'
import { getPerson, Person } from './../../services/Person/PersonSlice'
import { getSettled, Settled } from '../../services/Settled/SettledSlice'
import { getState, State } from '../../services/State/StateSlice'
/*
import { ModalContainer } from '../../components/ModalContainer/ModalContainer'
import { CreateStateForm } from './components/CreateState'
import { CreateModalityForm } from './components/CreateModality'
import { CreatePersonForm } from './components/CreatePerson'
import { CreateSettledForm } from './components/CreateSettled'*/

import { useModal } from '../../hooks/useModal'
import { Poga2Form } from './components/Poga2Form/Poga2Form'

import { card_option_grade } from './OptionGrade.module.scss'

const OptionGrade = () => {
  const dispatch = useDispatch()

  const modals = {
    [State]: useModal(),
    [Person]: useModal(),
    [Settled]: useModal(),
    [Modality]: useModal(),
  }

  useEffect(() => {
    dispatch(getPerson())
    dispatch(getState())
    dispatch(getModality())
    dispatch(getSettled())
    dispatch(getCommittee())
    dispatch(getAgreement())
    dispatch(getState())
  }, [dispatch])

  return (
    <Card className={card_option_grade}>
      <Poga2Form
        Modality={Modality}
        Person={Person}
        Settled={Settled}
        State={State}
      />
    </Card>
  )
}

export default OptionGrade
/*
 <ModalContainer title="Crear Nuevo Estado" modal={modals.State}>
        <CreateStateForm />
      </ModalContainer>

      <ModalContainer title="Crear Nueva Persona" modal={modals.Person}>
        <CreatePersonForm />
      </ModalContainer>

      <ModalContainer title="Crear Nuevo Radicado" modal={modals.Settled}>
        <CreateSettledForm />
      </ModalContainer>

      <ModalContainer title="Crear Nueva Modalidad" modal={modals.Modality}>
        <CreateModalityForm />
      </ModalContainer>
       */
