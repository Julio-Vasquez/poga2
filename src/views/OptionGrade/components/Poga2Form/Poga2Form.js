import {
  Typography,
  Form,
  Divider,
  Row,
  Col,
  Space,
  Button,
  Input,
  Tooltip,
  DatePicker,
} from 'antd'
import { EditOutlined, CopyOutlined } from '@ant-design/icons'
import { string } from 'prop-types'
import { useDispatch } from 'react-redux'

import { useData } from './../../../../hooks/useData'
import { useSelect } from './../../../../hooks/useSelect'
import { useInput } from './../../../../hooks/useInput'
import { useDatePicker } from './../../../../hooks/useDatePicker'
import { CustomSelect } from '../CustomSelect/CustomSelect'

import { createPoga2 } from '../../../../services/Poga2/Poga2Slice'

import {
  space_container,
  success_btn,
  submit_form_container,
  date_especial,
  no_select_user,
} from './Poga2Form.module.scss'

export const Poga2Form = ({ Modality, Person, Settled, State }) => {
  const { Title, Text } = Typography
  const { Item } = Form

  const data = {
    [Modality]: useData({ reducer: Modality }),
    [Person]: useData({ reducer: Person }),
    [Settled]: useData({ reducer: Settled }),
    [State]: useData({ reducer: State }),
  }

  const form = {
    [Modality]: useSelect(),
    [Settled]: useSelect(),
    [State]: useSelect(),
    juryOne: useSelect(),
    juryTwo: useSelect(),
    juryThree: useSelect(),
    director: useSelect(),
    studentOne: useSelect(),
    studentTwo: useSelect(),
    title: useInput(),
    notes: useInput(),
    dateStart: useDatePicker(),
    dateEnd: useDatePicker(),
    dateSustentation: useDatePicker(),
    dateGrade: useDatePicker(),
  }

  const dispatch = useDispatch()
  const onSubmitForm = () => {
    dispatch(
      createPoga2({
        title: form['title'].value,
        notes: form['notes'].value,
        dateStart: form['dateStart'].value,
        dateEnd: form['dateEnd'].value,
        dateSustentation: form['dateSustentation'].value,
        dateGrade: form['dateGrade'].value,
        state: form[State].value,
        modality: form[Modality].value,
        settled: form[Settled].value,
        director: form['director'].value,
        studentOne: form['studentOne'].value,
        studentTwo: form['studentTwo'].value,
        juryOne: form['juryOne'].value,
        juryTwo: form['juryTwo'].value,
        juryThree: form['juryThree'].value,
      })
    )
  }

  return (
    <Col>
      <Space direction="vertical" align="center" className={space_container}>
        <Title keyboard className={no_select_user}>
          Registro de Opción de grado
        </Title>
        <Text type="secondary" className={no_select_user}>
          Diligencie el formato, para registrar una nueva opción de Grado.
        </Text>
      </Space>
      <Form onFinish={onSubmitForm}>
        <Divider>
          <Tooltip title="En esta sección se especificarán los jurados de la opción de grado">
            Jurados
          </Tooltip>
        </Divider>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Jurado 1" name="juryOne">
              <CustomSelect
                placeholder="Seleccione el Jurado #1"
                error={data[Person]?.error.get}
                loading={data[Person].loadingPerson}
                data={data[Person].dataJury}
                dataText="name"
                dataValue="identification"
                state={form['juryOne']}
              />
            </Item>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Jurado 2" name="juryTwo">
              <CustomSelect
                placeholder="Seleccione el Jurado #2"
                error={data[Person]?.error.get}
                loading={data[Person].loadingPerson}
                data={data[Person].dataJury}
                dataText="name"
                dataValue="identification"
                state={form['juryTwo']}
              />
            </Item>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Jurado 3" name="juryThree">
              <CustomSelect
                placeholder="Seleccione el Jurado #3"
                error={data[Person]?.error.get}
                loading={data[Person].loadingPerson}
                data={data[Person].dataJury}
                dataText="name"
                dataValue="identification"
                state={form['juryThree']}
              />
            </Item>
          </Col>
        </Row>

        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 16 }}>
            <Divider orientation="center">
              <Tooltip title="En esta sección se especificarán los estudiantes de la opción de grado">
                Estudiantes
              </Tooltip>
            </Divider>
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                <Item label="Estudiante" name="estudentOne">
                  <CustomSelect
                    placeholder="Seleccione el Estudiante #1"
                    error={data[Person]?.error.get}
                    loading={data[Person].loadingPerson}
                    data={data[Person].dataStudent}
                    dataText="name"
                    dataValue="identification"
                    state={form['studentOne']}
                  />
                </Item>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                <Item label="Estudiante" name="estudentTwo">
                  <CustomSelect
                    placeholder="Seleccione el Estudiante #2"
                    error={data[Person]?.error.get}
                    loading={data[Person].loadingPerson}
                    data={data[Person].dataStudent}
                    dataText="name"
                    dataValue="identification"
                    state={form['studentTwo']}
                  />
                </Item>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Divider orientation="center">
              <Tooltip title="En esta sección se especificará el director de la opción de grado">
                Director
              </Tooltip>
            </Divider>
            <Col>
              <Item label="Director OG" name="director">
                <CustomSelect
                  placeholder="Seleccione el Director"
                  error={data[Person]?.error.get}
                  loading={data[Person].loadingPerson}
                  data={data[Person].dataDirector}
                  dataText="name"
                  dataValue="identification"
                  state={form['director']}
                />
              </Item>
            </Col>
          </Col>
        </Row>
        <Divider>
          <Tooltip title="En esta sección se especificarán las parametricas de la opción de grado">
            Parametricas
          </Tooltip>
        </Divider>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Estado" name="state">
              <CustomSelect
                placeholder="Seleccione el Estado"
                error={data[State]?.error}
                loading={data[State].loadingState}
                data={data[State].dataState}
                dataText="state"
                dataValue="state"
                state={form[State]}
              />
            </Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Modalidad" name="modality">
              <CustomSelect
                placeholder="Seleccione la Modalidad"
                error={data[Modality]?.error.get}
                loading={data[Modality].loadingModality}
                data={data[Modality].dataModality}
                dataText="modality"
                dataValue="modality"
                state={form[Modality]}
              />
            </Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Radicado" name="settled">
              <CustomSelect
                placeholder="Seleccione el Radicado"
                error={data[Settled]?.error}
                loading={data[Settled].loadingSettled}
                data={data[Settled].dataSettled}
                dataText="record"
                dataValue="record"
                state={form[Settled]}
              />
            </Item>
          </Col>
        </Row>
        <Divider>
          <Tooltip title="En esta sección se especificarán los datos de la opción de grado">
            Datos de la Opción de Grado
          </Tooltip>
        </Divider>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Titulo OG" name="title">
              <Tooltip title={form.title.value}>
                <Input
                  onChange={form.title.onChange}
                  placeholder="Titulo Opción de Grado"
                  prefix={<EditOutlined />}
                />
              </Tooltip>
            </Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Notas OG" name="notes">
              <Tooltip title={form.notes.value}>
                <Input.TextArea
                  rows={1}
                  onChange={form.notes.onChange}
                  placeholder="Notas de Opción de Grado"
                />
              </Tooltip>
            </Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Fecha inicio" name="dateStart">
              <Tooltip title={form.dateStart.value}>
                <DatePicker
                  className={date_especial}
                  onChange={form.dateStart.onChangeDate}
                  placeholder="Fecha de inicio"
                />
              </Tooltip>
            </Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Fecha Fin" name="dateEnd">
              <Tooltip title={form.dateEnd.value}>
                <DatePicker
                  className={date_especial}
                  onChange={form.dateEnd.onChangeDate}
                  placeholder="Fecha de finalización"
                />
              </Tooltip>
            </Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Fecha Sustentacion" name="dateSustentation">
              <Tooltip title={form.dateSustentation.value}>
                <DatePicker
                  className={date_especial}
                  onChange={form.dateSustentation.onChangeDate}
                  placeholder="Fecha de Sustentación"
                />
              </Tooltip>
            </Item>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
            <Item label="Fecha Grado" name="dateGrade">
              <Tooltip title={form.dateGrade.value}>
                <DatePicker
                  className={date_especial}
                  onChange={form.dateGrade.onChangeDate}
                  placeholder="Fecha de Grado"
                />
              </Tooltip>
            </Item>
          </Col>
        </Row>
        <Divider />
        <Row className={submit_form_container}>
          <Button
            className={success_btn}
            htmlType="submit"
            icon={<CopyOutlined />}
          >
            Registrar Opción de grado
          </Button>
        </Row>
      </Form>
    </Col>
  )
}

Poga2Form.propTypes = {
  Modality: string.isRequired,
  Person: string.isRequired,
  Settled: string.isRequired,
  State: string.isRequired,
}
