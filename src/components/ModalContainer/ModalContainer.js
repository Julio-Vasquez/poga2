import { Modal } from 'antd'
import { bool, func, node, shape, string } from 'prop-types'

export const ModalContainer = ({ title, children, modal }) => {
  return (
    <Modal
      title={title}
      visible={modal.visible}
      onOk={modal.showModal}
      onCancel={modal.showModal}
    >
      {children}
    </Modal>
  )
}

ModalContainer.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  modal: shape({
    visible: bool.isRequired,
    showModal: func.isRequired,
  }),
}
