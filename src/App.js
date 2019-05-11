import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import AsyncComponent from './components/AsyncComponent'
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Error from './components/Error/Error';
import Banner from './components/Banner/Banner';
import { connect } from 'react-redux';
import { setSearchField, requestCourses } from './redux/actions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './container/HomePage';
const CoursesPage = AsyncComponent(() => import('./container/CoursesPage'));
const TeachersPage = AsyncComponent(() => import('./container/TeachersPage'));
const { Content } = Layout;
const mapStateToProps = state => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCourses: () => dispatch(requestCourses())
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: '/demo',
      component: 'HomePage'
    }
  }
  onRouteChange(route) {
    this.setState({ ...this.state, route: route });
  }
  componentDidMount() {
    this.props.onRequestCourses();
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <BrowserRouter>
            <AppHeader />
            <Banner />
            <div style={{ background: '#ECECEC', padding: '10px' }}>
              <Content>
                <div>
                  <Switch>
                    <Route exact path="/demo" render={(props) => (
                      <HomePage onRouteChange={this.onRouteChange} />
                    )} />
                    <Route path="/demo/course" render={(props) => (
                      <div>
                        {
                          <CoursesPage onRouteChange={this.onRouteChange} />
                        }
                      </div>
                    )} />
                    <Route path="/demo/teachers" render={(props) => (
                      <div>
                        {
                          <TeachersPage onRouteChange={this.onRouteChange} />
                        }
                      </div>
                    )} />
                    <Route component={Error} />
                  </Switch>
                </div>
              </Content>
            </div>
          </BrowserRouter>
          < AppFooter />
        </Layout>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
