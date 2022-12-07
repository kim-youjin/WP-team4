import React, { Component } from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'

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
        <Dropdown.Header style={{fontSize: 20, marginRight:100}}>드로잉</Dropdown.Header>
        <Dropdown.Item>일러스트</Dropdown.Item>
        <Dropdown.Item>인물 드로잉</Dropdown.Item>
        <Dropdown.Item>캘리그라피</Dropdown.Item>
        <Dropdown.Item>수채화</Dropdown.Item>
        <Dropdown.Item>디자인</Dropdown.Item>

        <Dropdown.Header style={{fontSize: 20, marginRight:100}}>공예</Dropdown.Header>
        <Dropdown.Item>뜨개질</Dropdown.Item>
        <Dropdown.Item>비즈공예</Dropdown.Item>

        <Dropdown.Header style={{fontSize: 20,  marginRight:100}}>사진/영상</Dropdown.Header>
        <Dropdown.Item>사진</Dropdown.Item>
        <Dropdown.Item>영상</Dropdown.Item>

        <Dropdown.Header style={{fontSize: 20, marginRight:100}}>프로그래밍</Dropdown.Header>
        <Dropdown.Item>IT교양</Dropdown.Item>
        <Dropdown.Item>프론트엔드</Dropdown.Item>
        <Dropdown.Item>백엔드</Dropdown.Item>
        <Dropdown.Item>APP</Dropdown.Item>
        <Dropdown.Item>게임</Dropdown.Item>

        <Dropdown.Header style={{fontSize: 20, marginRight:100}}>음악</Dropdown.Header>
        <Dropdown.Item>악기</Dropdown.Item>
        <Dropdown.Item>보컬/랩</Dropdown.Item>
        <Dropdown.Item>작곡</Dropdown.Item>

        <Dropdown.Header style={{fontSize: 20, marginRight:100}}>운동</Dropdown.Header>
        <Dropdown.Item>스포츠</Dropdown.Item>
        <Dropdown.Item>피트니스</Dropdown.Item>
        <Dropdown.Item>스트레칭</Dropdown.Item>

        <Dropdown.Header style={{fontSize: 20, marginRight:100}}>라이프 스타일</Dropdown.Header>
        <Dropdown.Item>뷰티</Dropdown.Item>
        <Dropdown.Item>타로/사주/운세</Dropdown.Item>
        <Dropdown.Item>게임/e스포츠	</Dropdown.Item>
        <Dropdown.Item>댄스/무용</Dropdown.Item>

        <Dropdown.Header style={{fontSize: 20, marginRight:100}}>외국어</Dropdown.Header>
        <Dropdown.Item>영어</Dropdown.Item>
        <Dropdown.Item>외국어 시험</Dropdown.Item>
        <Dropdown.Item>제2외국어</Dropdown.Item>

      </Dropdown.Menu>
        </Dropdown>

          <Menu.Item
            name='CLASS 스토어'
            active={activeItem === 'CLASS 스토어'}
            onClick={this.handleItemClick}
            style={{fontSize: 17, marginLeft:50, marginRight:50}}
          />
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
