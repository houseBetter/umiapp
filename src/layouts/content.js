import {Layout } from 'antd'
const {Content } = Layout;
export default  (props) => {
  return (
    <Content
      style={{
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}>
      {props.content}
    </Content>
  )
}