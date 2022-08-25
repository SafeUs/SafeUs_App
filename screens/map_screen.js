import React, {useCallback, useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import 'react-native-dotenv'
import { XMLParser} from 'fast-xml-parser'

let data;
const Map = () => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true)

  console.log("map")
  const getMarker = useCallback(() => {
    try {
      const xhr = new XMLHttpRequest();
      const url = `http://openapi.seoul.go.kr:8088/${process.env.API_KEY}/xml/IotVdata021/1/5/`;
      xhr.open('GET', url);
      xhr.onreadystatechange = function () {
        if (this.readyState == xhr.DONE) {
        if(xhr.status == 200||xhr.status == 201){
          let parser = new XMLParser();
          let xmlDoc = parser.parse(this.responseText,"text/xml");
          xmlDoc.IotVdata021.row.forEach(item => {
            console.log(`이름: ${item.COLUMN1}`)
            console.log(`위도: ${item.COLUMN2}`)
            console.log(`경도: ${item.COLUMN3}`)
            console.log(`밝기: ${item.COLUMN4}`)
            console.log(`불량 여부(정상:0 불량:1): ${item.COLUMN5}`)
          })
          data = xmlDoc.IotVdata021.row;
          setLoading(false);
          }
        }
      };
      xhr.send('');
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getMarker();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {!loading ? (
        <>
          {data.map((marker, i) => (
            <MapView.Marker
              key={i}
              coordinate={{
                latitude: marker.COLUMN2,
                longitude: marker.COLUMN3,
              }}
            />
          ))}
        </>
        ) : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;