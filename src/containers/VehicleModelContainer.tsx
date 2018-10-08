import * as React from 'react';
import { connect } from 'react-redux';
import { modelsByMake } from '../actions/vehicle.action';
import VehicleModelComponent from '../components/VehicleModelComponent';
import IState from '../interfaces/state';

class VehicleModelContainer extends React.Component<any, any> {
  public async componentDidMount() {
    await this.props.modelsByMake(this.props.match.params.id);
  }

  public render() {
    return(
      <VehicleModelComponent {...this.props}/>
    )
  }
}

const mapDispatchToProps = {
  modelsByMake
};

const mapStateToProps = (state: IState) => {
  return {
    models: state.vehicle.models
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VehicleModelContainer);