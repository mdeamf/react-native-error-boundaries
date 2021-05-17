import React from 'react';
import { Text, View } from 'react-native';

export class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log('[getDerivedStateFromError]', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('[componentDidCatch error]', error);
    console.log('[componentDidCatch errorInfo]', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Ops!</Text>
          <Text>Ocorreu um erro inesperado!</Text>
        </View>
      );
    }

    return this.props.children;
  }
}
