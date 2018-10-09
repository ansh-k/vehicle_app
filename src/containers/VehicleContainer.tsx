import * as React from 'react';
import * as Loader from 'react-loader';
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
      <Loader loaded={this.props.loaded} className="spinner">
        <VehicleComponent {...this.props}/>
      </Loader>
    )
  }
}

const mapDispatchToProps = {
  allMakes
};

const mapStateToProps = (state: IState) => {
  return {
    loaded: state.vehicle.loaded,
    makes: state.vehicle.makes
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);