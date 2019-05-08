import React from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import { getEmployeeList } from '../../actions/DashboardAction';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    if (this.props.dashboard.compainInfo && !this.props.dashboard.compainInfo.length) {
      this.getEmployeeList();
    }
  }
  componentDidMount() {
  }
  getEmployeeList = () => {
    this.props.dispatch(
      getEmployeeList(this.props.dashboard.compainInfo)
    );
  }
  render() {
    console.log(this.props, 'RES');
    const response = [];
    if (this.props.dashboard.compainInfo && this.props.dashboard.compainInfo.length !== 0) {
      this.props.dashboard.compainInfo.map((keySub) => {
        response.push(<tr><td className="app-wrapper1">
          {keySub.id}
        </td>
          <td className="app-wrapper1">
            {keySub.name}
          </td>
          <td className="app-wrapper1">
            {keySub.age}
          </td>
          <td className="app-wrapper1">
            {keySub.gender}
          </td>
          <td className="app-wrapper1">
            {keySub.email}
          </td>
          <td className="app-wrapper1">
            {keySub.phoneNo}
          </td>
        </tr>
        );
        return 1;
      });
    }
    return (
      <div className="page-panel">
        <table className="app-wrapper5 responce">
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>AGE</td>
            <td>GENDER</td>
            <td>EMAIL</td>
            <td>PHONE</td>
          </tr>
          {response}
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'sate');
  return { dashboard: state.dashboard };
}

export default connect(mapStateToProps)(Dashboard);
