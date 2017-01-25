import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Recipes from './recipes';
import Featured from './featured';
import * as actionCreators from '../action-creators';

class App extends React.Component {

  componentDidMount() {
    //this.props.actions e' creato da mapDispatchToProps
    //Invoca acrtion creator getHomePageData()
    this.props.actions.getHomePageData();
  }

  render() { 
      return (  
          <div>
            <div className="ui fixed inverted menu">
              <div className="ui contianer">
                <a href="/" className="header item">Recipes Example App</a>
              </div>
            </div>
            <div className="ui padded grid">
              <Recipes {...this.props}/>
              <Featured {...this.props.featuredRecipe}/>
            </div>
            <div className="ui inverted vertical footer segment">
            Footer
            </div>
          </div>
      );
  }
}

//Invocata ogni volta che state cambia.Deve ritornare nuove updated props del component.
function mapStateToProps(state) {
  let { recipes, featuredRecipe } = state.recipes;
  return {
    recipes,
    featuredRecipe
  }
}


//Crea una props.actions con stessi metodi di actionCreators
//wrappati in una dispatch call cosicche possono essere invocati direttamente.
//Altrimenti non hanno dispact() e non possono inviare actions allo store.
function mapDispatchToProps(dispatch) {
  //http://redux.js.org/docs/api/bindActionCreators.html#bindactioncreatorsactioncreators-dispatch
  let boundActionCreators=bindActionCreators(actionCreators, dispatch);
  return { actions: boundActionCreators }
}

//Connectto ed esporto App a redux
//https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
export default connect(mapStateToProps, mapDispatchToProps)(App)

//connect(mapStateToProps, mapDispatchToProps) ritorna un connectAdvanced() 
//connectAdvanced(App) ritorna il component integrato con redux 
