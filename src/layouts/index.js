import styles from './index.css';
import {Layout} from 'antd'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
function BasicLayout(props) {
  return (
    // <div className={styles.normal}>
    //   {props.children}
    // </div>
    <Layout>
      <Header></Header>
      <Layout>
        <Sider></Sider>
        <Content></Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
}
export default BasicLayout;
