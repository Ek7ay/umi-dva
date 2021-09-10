import React, { PureComponent, Fragment } from 'react'
import styles from './index.less'
import { connect } from 'umi';
import { getEnsaioData } from '../../services/http';
import { Row, Col, Button } from 'antd'


class Test2 extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getEnsaioDataAjax()
  }

  async getEnsaioDataAjax() {
    const res = await getEnsaioData()
    this.props.dispatch({type: 'model2Test/setModel2Data', payload: res})
  }

  handleClick () {
    this.props.dispatch({type: 'globalModel/changeGlobalInfo', payload: {globalInfo:'修改后的全局数据'}})
  }

  render() {
    return (
      <Fragment>
        <div className={styles.painel}>
          <Row gutter={16}>
            <Col span={6}>
              <p>{ this.props.info }</p>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <p>{ this.props.global }</p>
            </Col>
            <Col span={6}>
              <Button onClick={ this.handleClick.bind(this) } type="primary">查询</Button>
            </Col>
          </Row>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.model2Test.info,
    global: state.globalModel.globalInfo
  }
}

export default connect(mapStateToProps)(Test2)
