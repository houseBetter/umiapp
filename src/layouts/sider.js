import {Layout, Menu, Icon} from 'antd'
import React, {Component} from 'react'
import * as MM from 'dva/router'
import {menu} from './menu.json'
import NavLink from 'umi/navlink'
import {connect} from 'dva'
import {RouterContext} from './router-context'
import {mapMenuPathToKey} from 'utils'
const {Sider} = Layout
const { SubMenu } = Menu
const menuIcons = ["table", "message","setting"];
class MySider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ['00'],
      openKeys: ['0']
    }
  }
  componentDidMount() {
    console.log('--- context:', this.context)
  }

  select = ({selectedKeys}) => {
    const openKeys = [selectedKeys[0].slice(0,1)]
    this.setState({
      selectedKeys,
      openKeys
    })
  }
  render() {
    const {selectedKeys,openKeys} = this.state
    console.log('mapMenuPathToKey:', mapMenuPathToKey(menu))
    return (
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
                mode="inline"
                defaultSelectedKeys={selectedKeys}
                defaultOpenKeys={openKeys}
                style={{ height: '100%', borderRight: 0 }}
                onSelect={this.select}
              >
                {
                  menu.map((menuItem) => {
                    const {key} = menuItem
                    return (
                      <SubMenu key={key} title={
                        <span>
                          <Icon type={menuIcons[key]}/>
                          {menuItem.name}
                        </span>
                      }>
                        {
                          menuItem.children.map((child) => {
                            const {key: childKey} = child
                            return (
                              <Menu.Item key={childKey}>
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
MySider.contextType = RouterContext
export default  connect()(MySider)