import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView } from 'react-native'

import { getFilmDetailFromApi } from '../API/TMDBApi'
import { getImageFromApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.route.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  displayFilm() {
    if (this.state.film != undefined) {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
          <Image
          style={styles.image}
          source={{uri: getImageFromApi(this.state.film.poster_path)}}
        />
          <Text style={styles.title}>{this.state.film.title}</Text>
          <Text style={styles.vote_text}>{this.state.film.vote_average}</Text>
          <Text style={styles.description_text}>{this.state.film.overview}</Text>
          <Text style={styles.date_text}>Released the {this.state.film.release_date}</Text>
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this.displayLoading()}
        {this.displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    display: 'flex',
    width: 150,
    height: 350,
    margin: 'auto',
    alignSelf: 'center'
  }, 
  title: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    color: '#ff4d01',
    padding: 10
  },
  vote_text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 10
  },
  description_text: {
    textAlign: 'justify',
    padding: 15
  },
  date_text: {
    textAlign: 'center',
    padding: 10,
    fontStyle: 'italic'
  }
})

export default FilmDetail