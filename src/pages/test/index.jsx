import React, { PureComponent } from 'react'
import styles from './index.less'
import { Button, Input, Row, Col } from 'antd';
import { connect } from 'umi';

class Test extends PureComponent {

  constructor(props) {
    super(props);
  }

  buttonClick () {
    this.props.dispatch({type: 'shopcart/getData', payload: '一个没有用的参数'})
  }

  render() {
    return (
      <div className={styles.test}>
        <Row gutter={16}>
          <Col span={6}>
            <Input
              placeholder="Basic usage"
              value={this.props.info}
            />
          </Col>
          <Col span={6}>
            <Button
              type="primary"
              onClick={this.buttonClick.bind(this)}
            >查询</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.shopcart.data
  }
}

export default connect(mapStateToProps)(Test)
