import  styles from './index.less';
import {Layout, Breadcrumb} from 'antd'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import React from 'react'
import {RouterContext} from './router-context'
function BasicLayout(props) {
  return (
    <Layout className={styles.layout}>
      <RouterContext.Provider value={{routerProps: props}}>
        <Header />
        <Layout>
          <Sider/>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content content={props.children} />
          </Layout>
        </Layout>
        <Footer />
      </RouterContext.Provider>
    </Layout>
  );
}
export default BasicLayout;
