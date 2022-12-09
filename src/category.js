import React, { Component } from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <Dropdown item text='카테고리' style={{fontSize: 17, marginLeft:50, marginRight:50}}>
        <Dropdown.Menu>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '20px'}}>        
            <div style={{textAlign: 'center', marginRight:'30px'}}>
            <Dropdown.Header style={{fontSize: 20, textAlign: 'center', marginBottom:'20px'}}>드로잉</Dropdown.Header>
            <Link to="/searchpage"><Dropdown.Item>일러스트</Dropdown.Item></Link>

            <Dropdown.Item>인물 드로잉</Dropdown.Item>
            <Dropdown.Item>캘리그라피</Dropdown.Item>
            <Dropdown.Item>수채화</Dropdown.Item>
            <Dropdown.Item>디자인</Dropdown.Item>
            </div>
            
            <div style={{textAlign: 'center', marginRight:'30px'}}>
            <Dropdown.Header style={{fontSize: 20, textAlign: 'center', marginBottom:'20px'}}>공예</Dropdown.Header>
            <Dropdown.Item>뜨개질</Dropdown.Item>
            <Dropdown.Item>비즈공예</Dropdown.Item>
            </div>
            
            <div style={{textAlign: 'center', marginRight:'30px'}}>
            <Dropdown.Header style={{fontSize: 20,  textAlign: 'center', marginBottom:'20px'}}>사진/영상</Dropdown.Header>
            <Dropdown.Item>사진</Dropdown.Item>
            <Dropdown.Item>영상</Dropdown.Item>
            </div>
            
            <div style={{textAlign: 'center', marginRight:'30px'}}>
            <Dropdown.Header style={{fontSize: 20, textAlign: 'center', marginBottom:'20px'}}>프로그래밍</Dropdown.Header>
            <Dropdown.Item>IT교양</Dropdown.Item>
            <Dropdown.Item>프론트엔드</Dropdown.Item>
            <Dropdown.Item>백엔드</Dropdown.Item>
            <Dropdown.Item>APP</Dropdown.Item>
            <Dropdown.Item>게임</Dropdown.Item>
            </div>
            
            <div style={{textAlign: 'center', marginRight:'30px'}}>
            <Dropdown.Header style={{fontSize: 20, textAlign: 'center', marginBottom:'20px'}}>음악</Dropdown.Header>
            <Dropdown.Item>악기</Dropdown.Item>
            <Dropdown.Item>보컬/랩</Dropdown.Item>
            <Dropdown.Item>작곡</Dropdown.Item>
            </div>
            
            <div style={{textAlign: 'center', marginRight:'30px'}}>
            <Dropdown.Header style={{fontSize: 20, textAlign: 'center', marginBottom:'20px'}}>운동</Dropdown.Header>
            <Dropdown.Item>스포츠</Dropdown.Item>
            <Dropdown.Item>피트니스</Dropdown.Item>
            <Dropdown.Item>스트레칭</Dropdown.Item>
            </div>
            
            <div style={{textAlign: 'center', marginRight:'30px'}}>
            <Dropdown.Header style={{fontSize: 20, textAlign: 'center', marginBottom:'20px'}}>외국어</Dropdown.Header>
            <Dropdown.Item>영어</Dropdown.Item>
            <Dropdown.Item>외국어 시험</Dropdown.Item>
            <Dropdown.Item>제2외국어</Dropdown.Item>
            </div>
        </div>

        

      </Dropdown.Menu>
        </Dropdown>
          <Link to="/searchpage">
          <Menu.Item
            name='CLASS 스토어'
            active={activeItem === 'CLASS 스토어'}
            onClick={this.handleItemClick}
            style={{fontSize: 17, marginLeft:50, marginRight:50}}
          /></Link>
          <Menu.Item
            name='BEST CLASS'
            active={activeItem === 'BEST CLASS'}
            onClick={this.handleItemClick}
            style={{fontSize: 17, marginLeft:50, marginRight:50}}
          />
          <Menu.Item
            name='신규 CLASS'
            active={activeItem === '신규 CLASS'}
            onClick={this.handleItemClick}
            style={{fontSize: 17, marginLeft:50, marginRight:50}}
          />
          <Menu.Item
            name='이벤트'
            active={activeItem === '이벤트'}
            onClick={this.handleItemClick}
            style={{fontSize: 17, marginLeft:50, marginRight:50}}
          />
        </Menu>

      </div>
    )
  }
}
