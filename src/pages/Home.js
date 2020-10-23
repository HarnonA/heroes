import React, { useState } from 'react';

import {
  StyleSheet,
  Text, View, Image
} from 'react-native';
import axios from 'axios'
import Card from '../components/Card'

import { BASE_URL, API_KEY, HASH, TIMESTAMP } from '@env';


function Comp() {
  const [listOfHeroes, setHeroes] = useState([])

  function getHeroesFromCloud() {
    if(listOfHeroes.length == 0)
    try {
      var names = [];
      axios.get(`${BASE_URL}/characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIMESTAMP}&nameStartsWith=A&limit=100`)
        .then(res => {

          // create a object with id, name and a image path
          // then adds to a list of heroes
          res.data.data.results.map(obj => {
            let myOjb = {
              id: obj.id,
              name: obj.name,
              img: `${obj.thumbnail.path}.${obj.thumbnail.extension}`
            };
            names.push(myOjb)
          }
          )
          setHeroes(names)
        })
        .catch( err => {
          console.log(err)
          // setHeroes([{id: -1, name: "error"}])
          
      })
    } catch (e) {
      console.log("error")
    }

  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of heroes with first letter A</Text>
      { getHeroesFromCloud()}
      <View style={styles.list}>
        { listOfHeroes.map(e => 
          <Card key={e.id} name={e.name} img={e.img} />
        )}
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 16
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

});

export default Comp;