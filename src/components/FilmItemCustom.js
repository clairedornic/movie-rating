import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
 
class FilmItemCustom extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      const { film, displayDetailForFilmCustom } = this.props
    return (
      <TouchableOpacity onPress={() => displayDetailForFilmCustom(film.title, film.vote_average, film.overview, film.comments, film.release_date)} style={styles.main_container}>
       <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            {/* <Text style={styles.description_text}>My comment : {film.comments}</Text> */}
          </View>
          {/* <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View> */}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 220,
    width: '90%',
    flexDirection: 'row',
    margin: 20, 
    backgroundColor: '#fff',
    padding: 15,
  },
  image: {
    width: 50,
    height: 100,
    margin: 10
  }, 
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7,
    width: '90%'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FilmItemCustom