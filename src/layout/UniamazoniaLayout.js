import { useState } from 'react'
import { node } from 'prop-types'
import { Layout, Menu } from 'antd'
import { Link } from '@reach/router'
import {
  ContainerOutlined,
  CopyFilled,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'

import './UniamazoniaLayout.scss'

export const UniamazoniaLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Sider, Content, Footer } = Layout
  const { Item } = Menu

  const toggle = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{
            backgroundColor: '#0D810D',
          }}
        >
          <Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Item>
          <Item key="2" icon={<CopyFilled />}>
            <Link to="/poga2">Opciones de grado</Link>
          </Item>
          <Item key="3" icon={<ContainerOutlined />}>
            <Link to="/report">Report</Link>
          </Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggle} />
          )}

          <div className="top-menu">
            <div className="bg-uniamazonia"></div>
          </div>
        </Header>
        <Content className="site-layout-content">{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          Universidad de la Amazonia @ {new Date().getFullYear()}. Todos Los
          Derechos Reservados.
        </Footer>
      </Layout>
    </Layout>
  )
}

UniamazoniaLayout.propTypes = {
  children: node.isRequired,
}
