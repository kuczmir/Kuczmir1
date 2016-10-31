import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container, Row, Col} from 'react-pure-grid';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.selectedDate;
    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
      this.setState({
          open: false,
      });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };
  handleChange = (n, o) => {
    this.selectedDate = o;
    console.log(o);
};
  render() {
    const standardActions = (

      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Container>
          <Row>
            <Col xs={6} md={4} lg={3}><Dialog
                open={this.state.open}
                title="Wybór daty"
                actions={standardActions}
                onRequestClose={this.handleRequestClose}
            ><DatePicker hintText="Kliknij, aby wybrać datę" onChange = {this.handleChange}/>
            </Dialog></Col>
          </Row>
          <Row>
            <Col xsOffset={5} xs={7}>Super fajny przycisk</Col>
          </Row>
          <Row>
            <Col xsOffset={5} xs={7}><RaisedButton
                label="Pokaż wybór daty"
                secondary={true}
                onTouchTap={this.handleTouchTap}
            /></Col>
          </Row>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default Main;
