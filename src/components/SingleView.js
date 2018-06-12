import React from 'react';
import StarRating from './StarRating';
import SalongInfoSection from './SalongInfoSection';
import Background from '../images/linear.svg';

class SingleView extends React.Component {
  state = {
    hover: false,
    sectionView: true,
  };
  toggleSection = () => {
    this.setState({ sectionView: !this.state.sectionView });
  };

  render() {
    return this.props.salongs.map((salong) => {
      if (salong.id === this.props.salongId) {
        const imgURL = require('../images/headerImg.svg');
        const background = {
          width: '100%',
          height: '250px',
          backgroundImage: `url(${imgURL}), url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundBlendMode: 'darken',
        };

        return (
          <div className="singleView-container" key={salong.id}>
            <header style={background}>
              <span
                className="singleViewBackIcon"
                onClick={this.props.listView}
              >
                <i className="fa fa-chevron-left" />
              </span>
              <h2 className="singleViewName"> {salong.name} </h2>
        
              <span className="singleViewAmountRating">
                {`(${salong.amountRating})`}
              </span>
            </header>
            <nav className="singleViewNav">
              <span
                className={this.state.sectionView ? 'singleViewBorderBottom' : ''}
                onClick={this.toggleSection}
              >
                Info
              </span>
              <span
                className={this.state.sectionView ? '' : 'singleViewBorderBottom'}
                onClick={this.toggleSection}
              >
                Schema
              </span>
            </nav>
            {this.state.sectionView ? (
              <SalongInfoSection salong={salong} />
            ) : (
              <div />
            )}
          </div>
        );
      }
      return null;
    });
  }
}

export default SingleView;
