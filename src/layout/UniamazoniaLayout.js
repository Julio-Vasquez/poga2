import { useState, useEffect } from 'react'
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
import { useMediaQuery } from '../hooks/useMediaQuery'

export const UniamazoniaLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { mobile, handleMobile } = useMediaQuery({ breakPoint: 600 })
  const { Header, Sider, Content, Footer } = Layout
  const { Item } = Menu

  const toggle = () => setCollapsed(!collapsed)

  useEffect(() => {
    window.addEventListener('resize', handleMobile)
    return () => window.removeEventListener('resize', handleMobile)
  }, [handleMobile])

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} trigger={null}>
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
            <a
              href="https://www.uniamazonia.edu.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`bg-uniamazonia ${mobile ? 'img300' : ''}`}></div>
            </a>
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
