import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { Layout, Menu, Breadcrumb } from 'antd';
import withRouter from 'react-router-dom/withRouter';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const {  Sider, Content } = Layout;
const { SubMenu } = Menu;

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
class MainLayout extends Component {
  render() {
    const { isLoggedIn } = this.props
    return (
      <section className="Layout-section">
      {/* {isLoggedIn && <Header isLoggedIn={isLoggedIn} /> } */}

      {isLoggedIn ? 
       <section>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider 
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          // collapsible 
          width="250px">
            
          <img src="https://stg.keepwell.clinic/static/media/logo-white.145cf3d4.png" alt="logo" class="responsive" width="100%"  className="_spacer-md" /> 
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" onClick={() => window.location = "/doctor/dashboard"} icon={<PieChartOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={() => window.location = "/doctor/schedule"} icon={<DesktopOutlined />}>
            Scheduling
          </Menu.Item>

          <Menu.Item key="3" onClick={() => {
      localStorage.clear();
            window.location = "/doctor/schedule"}
            } icon={<DesktopOutlined />}>
            Sign out
          </Menu.Item>
        </Menu>

          </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>      <main className="main-content">{this.props.children}</main></Content>
        </Layout>

       </section>
        :
       
      <main className="main-content">{this.props.children}</main>
     }
      {/* {isLoggedIn &&<Footer /> } */}
    </section>
    );
  }
}

MainLayout.propTypes = propTypes;
export default MainLayout;
