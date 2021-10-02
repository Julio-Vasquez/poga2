import { Form, Input, Button } from 'antd'
import { TagsOutlined } from '@ant-design/icons'

import { btn_submit_state } from './CreateState.module.scss'

export const CreateStateForm = () => {
  const { Item } = Form

  const onFinish = values => console.log(values)

  return (
    <Form onFinish={onFinish} autoComplete="off">
      <Item
        label="Nombre del estado"
        name="state"
        rules={[{ required: true, min: 4 }]}
      >
        <Input prefix={<TagsOutlined />} />
      </Item>
      <div className={btn_submit_state}>
        <Button type="primary">Crear</Button>
      </div>
    </Form>
  )
}
