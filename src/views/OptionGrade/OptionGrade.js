import { Select } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getRole } from '../../services/Role/RoleSlice'

import { getPerson } from './../../services/Person/PersonSlice'

const OptionGrade = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerson())
  }, [dispatch])

  useEffect(() => {
    dispatch(getRole())
  }, [dispatch])

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

  return (
    <div>
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
    </div>
  )
}

export default OptionGrade
