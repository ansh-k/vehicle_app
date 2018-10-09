import * as React from 'react';
import * as Loader from 'react-loader';
import { connect } from 'react-redux';
import { modelsByMake, modelsByMakeYear } from '../actions/vehicle.action';
import VehicleModelComponent from '../components/VehicleModelComponent';
import IState from '../interfaces/state';

class VehicleModelContainer extends React.Component<any, any> {
  public options = ['Select all', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public async componentDidMount() {
    await this.props.modelsByMake(this.props.match.params.id);
  }

  public updateFiltter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value || e.target.value === 'Select all') {
      await this.props.modelsByMake(this.props.match.params.id);
    } else {
      await this.props.modelsByMakeYear(this.props.match.params.id, +e.target.value);
    }
  }

  public render() {
    return(
      <Loader loaded={this.props.loaded} className="spinner">
        <VehicleModelComponent {...this.props}
          onChange={this.updateFiltter}
          options={this.options} />
      </Loader>
    )
  }
}

const mapDispatchToProps = {
  modelsByMake,
  modelsByMakeYear
};

const mapStateToProps = (state: IState) => {
  return {
    loaded: state.vehicle.loaded,
    models: state.vehicle.models
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VehicleModelContainer);