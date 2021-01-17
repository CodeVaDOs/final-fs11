import React from 'react';
import { Button, Container, Typography } from "@material-ui/core";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stackShow: false,
      hasError: false,
      stack: null,
      message: null,

    };
    this.stackShow = this.stackShow.bind(this);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      stack: error.stack,
      message: error.message
    };
  }

  stackShow() {
    this.setState({ stackShow: !this.state.stackShow });
  }

  // componentDidCatch(error, errorInfo) {
  //   beckend.push(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <h1 color={'primary'}>Что-то пошло не так, сори...</h1>
          <Button
            color={"primary"}
            onClick={() => window.location.reload()}>
            Перезагрузить страницу
          </Button><br/>
          <Button
            color={"secondary"}
            onClick={this.stackShow}>Показать техническую информацию</Button>
          {this.state.stackShow ?
            <Container>
              <Typography>
                {this.state.stack}
              </Typography>
            </Container> :
            ''}
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;