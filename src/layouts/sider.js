import {Layout, Menu, Icon} from 'antd'
import React, {Component} from 'react'
import * as MM from 'dva/router'
import {menu} from './menu.json'
import NavLink from 'umi/navlink'
import {connect} from 'dva'
const {Sider} = Layout
const { SubMenu } = Menu
const menuIcons = ["table", "message","setting"];
class MySider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('MM:',MM)
    console.log('props:', this.props)
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
              mode="inline"
              defaultSelectedKeys={['00']}
              defaultOpenKeys={['0']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                menu.map((menuItem, key) => {
                  return (
                    <SubMenu key={`${key}`} title={
                      <span>
                        <Icon type={menuIcons[key]}/>
                        {menuItem.name}
                      </span>
                    }>
                      {
                        menuItem.children.map((child, childKey) => {
                          return (
                            <Menu.Item key={`${key}${childKey}`}>
                              <NavLink to={child.link}>{child.name}</NavLink>
                            </Menu.Item>
                          )
                        })
                      }
                    </SubMenu>
                  )
                })
              }
            </Menu>
      </Sider>
      )
    } 
}
export default  connect()(MySider)