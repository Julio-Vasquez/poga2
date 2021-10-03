import { Typography, Form } from 'antd'
//import {} from '@ant-design/icons'
import { string } from 'prop-types'

import { useData } from './../../../../hooks/useData'
import { useSelect } from './../../../../hooks/useSelect'
import { CustomSelect } from '../CustomSelect/CustomSelect'

export const Poga2Form = ({
  Agreement,
  Committee,
  Modality,
  Person,
  Role,
  Settled,
  State,
}) => {
  const { Title, Text } = Typography
  const { Item } = Form

  const data = {
    [Agreement]: useData({ reducer: Agreement }),
    [Committee]: useData({ reducer: Committee }),
    [Modality]: useData({ reducer: Modality }),
    [Person]: useData({ reducer: Person }),
    [Role]: useData({ reducer: Role }),
    [Settled]: useData({ reducer: Settled }),
    [State]: useData({ reducer: State }),
  }

  const form = {
    [Agreement]: useSelect(),
    [Committee]: useSelect(),
    [Modality]: useSelect(),
    [Person]: useSelect(),
    [Role]: useSelect(),
    [Settled]: useSelect(),
    [State]: useSelect(),
  }

  return (
    <div>
      <Title>Formulario poga2</Title>
      <Text>texto referente</Text>
      <Form>
        <Item noStyle>
          <CustomSelect
            placeholder="Seleccione una persona"
            error={data[Person]?.error.get}
            loading={data[Person].loadingPerson}
            data={data[Person].dataPerson}
            dataText="name"
            dataValue="identification"
            state={form[Person]}
          />
        </Item>
        <Item noStyle>
          <CustomSelect
            placeholder="Seleccione un Rol"
            error={data[Role]?.error}
            loading={data[Role].loadingRole}
            data={data[Role].dataRole}
            dataText="role"
            dataValue="role"
            state={form[Role]}
          />
        </Item>
      </Form>
    </div>
  )
}

Poga2Form.propTypes = {
  Agreement: string.isRequired,
  Committee: string.isRequired,
  Modality: string.isRequired,
  Person: string.isRequired,
  Role: string.isRequired,
  Settled: string.isRequired,
  State: string.isRequired,
}
