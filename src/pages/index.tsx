import React, { PureComponent } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
import styles from './index.less'
import { history } from 'umi';

class SiderDemo extends PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse () {
    this.state.collapsed ? this.setState({collapsed: false}) : this.setState({collapsed: true})
  }

  menuHandleClick(e:any) {
    history.push(e.key)
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse.bind(this)}
        >
          <div className={styles.logo}>react</div>
          <Menu
            theme="dark"
            defaultSelectedKeys={['tableList']}
            mode="inline"
            onClick={this.menuHandleClick.bind(this)}
          >
            <Menu.Item key="tableList" icon={<PieChartOutlined />}>表格</Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>表单</Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="TEST">
              <Menu.Item key="test">test</Menu.Item>
              <Menu.Item key="test2">test2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>Files</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.siteLayoutBackground} style={{ padding: 0, background: '#001529' }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>快将尘埃掸落</Breadcrumb.Item>
              <Breadcrumb.Item>别将你眼眸弄脏</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.siteLayoutBackground} style={{ minHeight: 800 }}>
              { this.props.children }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo
