import React, { PureComponent, Fragment } from 'react';
import styles from './index.less'
import { Row, Col, Input, Select, Button, Table } from 'antd';
const { Option } = Select;
import { connect } from 'umi';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

class tableList extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectValue: ''
    }
  }

  handleChange (value) {
    this.setState({
      selectValue: value
    })
  }

  inputValueChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick () {
    this.props.dispatch({type:'tableDataModel/getTableData', payload: this.state})
  }

  render() {
    return(
      <Fragment>
        <div className={styles.formList}>
          <Row gutter={16}>
            <Col className="gutter-row" span={1}>
              <div className={styles.name}>姓名</div>
            </Col>
            <Col className="gutter-row" span={5}>
              <Input
                value={this.state.inputValue}
                placeholder="请输入姓名"
                onChange={this.inputValueChange.bind(this)}
              />
            </Col>
            <Col className="gutter-row" span={1}>
              <div className={styles.name}>籍贯</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <Select
                placeholder="请选择籍贯"
                style={{ width: '100%' }}
                onChange={this.handleChange.bind(this)}
              >
                <Option value="河北">河北</Option>
                <Option value="河南">河南</Option>
                <Option value="山东">山东</Option>
              </Select>
            </Col>
            <Col className="gutter-row" span={6}>
              <Button type="primary" onClick={this.handleClick.bind(this)}>查询</Button>
            </Col>
          </Row>
        </div>

        <div className={styles.tableBox}>
          <Table
            dataSource={this.props.info}
            columns={columns}
            size={'small'}
          />
        </div>
      </Fragment>
    )
  }
}

const tableStateToProps = (state) => {
  return {
    info: state.tableDataModel.tableData
  }
}

export default connect(tableStateToProps)(tableList)
