import * as React from 'react';
import { connect } from 'react-redux';
import { allMakes } from '../actions/vehicle.action';
import VehicleComponent from '../components/VehicleComponent';
import IState from '../interfaces/state';

class VehicleContainer extends React.Component<any, any> {
  public async componentDidMount() {
    await this.props.allMakes();
  }

  public render() {
    return(
      <VehicleComponent {...this.props}/>
    )
  }
}

const mapDispatchToProps = {
  allMakes
};

const mapStateToProps = (state: IState) => {
  return {
    makes: state.vehicle.makes
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);