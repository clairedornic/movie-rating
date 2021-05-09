import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

class FilmDetailCustom extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
      const film = this.props.route.params;
      console.log(film);
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
            <Text style={styles.title}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.grade}</Text>
            <Text style={styles.description_text}>{film.overview}</Text>
            <Text style={styles.description_text}>My comment : {film.comment}</Text>
            <Text style={styles.date_text}>Released the {film.releaseDate}</Text>
        </ScrollView>
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

export default FilmDetailCustom