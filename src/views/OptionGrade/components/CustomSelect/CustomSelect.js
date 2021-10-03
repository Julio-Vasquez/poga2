import { Select } from 'antd'
import { string, any, bool, shape, func } from 'prop-types'

export const CustomSelect = ({
  placeholder,
  data,
  loading,
  error,
  dataText,
  dataValue,
  state,
}) => {
  if (loading) {
    return 'waiting' //falta componente
  } else if (error) return 'error'

  const { Option } = Select

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={state.onChangeSelect}
      onFocus={state.onFocusSelect}
      onBlur={state.onBlurSelect}
      onSearch={state.onSearchSelect}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {data.map((item, key) => (
        <Option key={key} value={item[dataValue]}>
          {item[dataText]}
        </Option>
      ))}
    </Select>
  )
}

CustomSelect.propTypes = {
  placeholder: string.isRequired,
  data: any.isRequired,
  loading: bool.isRequired,
  error: bool.isRequired,
  dataText: any.isRequired,
  dataValue: any.isRequired,
  state: shape({
    value: any.isRequired,
    onChangeSelect: func.isRequired,
    onBlurSelect: func.isRequired,
    onFocusSelect: func.isRequired,
    onSearchSelect: func.isRequired,
  }),
}
