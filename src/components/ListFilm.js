import React from 'react'
import { StyleSheet, View, Button, Text, FlatList } from 'react-native'

import FilmItemCustom from './FilmItemCustom' 

class ListFilm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: [],
    }   
  }

  addFilm = (film) => {
    this.setState(prevState => ({
      films: [...prevState.films, film]
    }))
    console.log(this.state.films);
  }

  renderItemFilm = ({item}) => {
    console.log(item);
    return <FilmItemCustom film={item}></FilmItemCustom>
  }

  displayDetailForFilmCustom = (title, grade, overview, comment, releaseDate) => {
    console.log("Name : " + title)
    this.props.navigation.navigate("Film details", {
      title : title,
      grade : grade,
      overview : overview,
      comment : comment,
      releaseDate : releaseDate
    })
  }

  keyExtractor = (item, index) => index.toString()

  render() {

    return ( 
      <View style={styles.main_container}>
        <View style={styles.btn_container}>
          <Text style={styles.title2}>My films</Text>
          <Button color="#ff4d01" title='Add a film' onPress={() => this.props.navigation.navigate("AddFilm", {
           addFilm: film => this.addFilm(film)
          })}/>
        </View>
        
        <FlatList 
          data={this.state.films}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => <FilmItemCustom film={item} displayDetailForFilmCustom={this.displayDetailForFilmCustom} />}
          style={styles.liste_container}
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
    // justifyContent: "center",
    alignItems: "center"
  },

  title2: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    padding: 25
  },

  btn_container: { 
    width: "80%"
  },

  liste_container : {
    width: "90%"
  }
})

export default ListFilm