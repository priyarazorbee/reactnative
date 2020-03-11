import  React from 'react';
import { Platform, FlatList, ActivityIndicator,  View , Text, Image  } from 'react-native';
import { Card, IconButton, List , Button, Paragraph, Menu, Divider, Provider, Title } from 'react-native-paper';

export default class FetchExample extends React.Component {
 constructor(props) {
    super(props);

    this.state = { isLoading: true, dataSource: [],  expanded: true};
  }

   _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  componentDidMount() {
    return fetch("http://project.razorbee.com/youtube/reactfetch.php")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.items
        });

      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
    <Provider>
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) =>
              <Card.Title

                                          title={item.snippet.title}
                                          subtitle={item.snippet.description}
                                          left={(props) => <Image
                                                                                          source={{
                                                                                            uri: item.snippet.thumbnails.default.url
                                                                                          }}
                                                                                          style={{ width: 40, height: 40 }}
                                                                                        />}
                                          right={(props) => <List.Accordion left={props => <List.Icon {...props} icon="dots-vertical" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

                                                                 }
                                        />}
             keyExtractor={(item, index) => index.toString()}
            />
          </View>
           </Provider>
        );


      }
    }
