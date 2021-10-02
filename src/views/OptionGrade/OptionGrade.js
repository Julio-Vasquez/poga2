import { Select } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getRole } from '../../services/Role/RoleSlice'
import { getPerson } from './../../services/Person/PersonSlice'
import { getState } from '../../services/State/StateSlice'
import { getModality } from '../../services/Modality/ModalitySlice'

import { ModalContainer } from '../../components/ModalContainer/ModalContainer'
import { CreateStateForm } from './components/CreateState'
import { CreateModalityForm } from './components/CreateModality'
import { CreatePersonForm } from './components/CreatePerson'
import { CreateSettledForm } from './components/CreateSettled'

import { useModal } from '../../hooks/useModal'

const OptionGrade = () => {
  const dispatch = useDispatch()

  const modals = {
    state: useModal(),
    person: useModal(),
    settled: useModal(),
    modality: useModal(),
  }

  useEffect(() => {
    dispatch(getPerson())
    dispatch(getRole())
    dispatch(getState())
    dispatch(getModality())
  }, [dispatch])

  useEffect(() => {}, [dispatch])

  return (
    <div>
      <ModalContainer title="Crear Nuevo Estado" modal={modals.state}>
        <CreateStateForm />
      </ModalContainer>

      <ModalContainer title="Crear Nueva Persona" modal={modals.person}>
        <CreatePersonForm />
      </ModalContainer>

      <ModalContainer title="Crear Nuevo Radicado" modal={modals.settled}>
        <CreateSettledForm />
      </ModalContainer>

      <ModalContainer title="Crear Nueva Modalidad" modal={modals.modality}>
        <CreateModalityForm />
      </ModalContainer>
    </div>
  )
}

export default OptionGrade
/*
const { Option } = Select

  function onChange(value) {
    console.log(`selected ${value}`)
  }

  function onBlur() {
    console.log('blur')
  }

  function onFocus() {
    console.log('focus')
  }

  function onSearch(val) {
    console.log('search:', val)
  }
<Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option key="1" value="jack">
          Jack
        </Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
*/
