import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  getAgreement,
  Agreement,
} from '../../services/Agreement/AgreementSlice'
import {
  getCommittee,
  Committee,
} from '../../services/Committee/CommitteeSlice'
import { getModality, Modality } from '../../services/Modality/ModalitySlice'
import { getPerson, Person } from './../../services/Person/PersonSlice'
import { getRole, Role } from '../../services/Role/RoleSlice'
import { getSettled, Settled } from '../../services/Settled/SettledSlice'
import { getState, State } from '../../services/State/StateSlice'

import { ModalContainer } from '../../components/ModalContainer/ModalContainer'
import { CreateStateForm } from './components/CreateState'
import { CreateModalityForm } from './components/CreateModality'
import { CreatePersonForm } from './components/CreatePerson'
import { CreateSettledForm } from './components/CreateSettled'

import { useModal } from '../../hooks/useModal'
import { Poga2Form } from './components/Poga2Form/Poga2Form'

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
    dispatch(getRole())
    dispatch(getState())
    dispatch(getModality())
    dispatch(getSettled())
    dispatch(getCommittee())
    dispatch(getAgreement())
  }, [dispatch])

  return (
    <div>
      <Poga2Form
        Agreement={Agreement}
        Committee={Committee}
        Modality={Modality}
        Person={Person}
        Role={Role}
        Settled={Settled}
        State={State}
      />
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
    </div>
  )
}

export default OptionGrade
