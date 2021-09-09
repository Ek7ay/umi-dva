import React, { PureComponent, Fragment } from 'react'
import styles from './index.less'
import { connect } from 'umi';
import { getEnsaioData } from '../../services/http';

class Test extends PureComponent {

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

  render() {
    return (
      <Fragment>
        <div className={styles.painel}>
          { this.props.info }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.model2Test.info
  }
}

export default connect(mapStateToProps)(Test)
