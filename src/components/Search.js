import React from 'react'
import { StyleSheet, View, TextInput, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.page = 0
        this.totalPages = 0
        this.state = {
          films: [],
          isLoading: false
        }
    }

    _searchFilms() {
      this.page = 0
      this.totalPages = 0
      this.setState({
        films: []
      }, () => {
        console.log("Page :"+ this.page + " / Total pages : " + this.totalPages + " / Nombres de films : " + this.state.films.length)
        this._loadFilms()
      })
      
    }
  
    _displayDetailForFilm = (idFilm) => { 
      console.log("ID : " + idFilm);
      this.props.navigation.navigate("Film details", {idFilm : idFilm})
    }
  
    _loadFilms() {
      if (this.searchedText.length > 0) {
        this.setState({ isLoading: true })
        getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
          this.page = data.page,
          this.totalPages = data.total_pages
            this.setState({ 
              films: [...this.state.films, ...data.results],
              isLoading: false  
            })
        })
      }
  }
  
    _searchTextInputChanged(text) {
      this.searchedText = text
    }
  
    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
    }

  render() {
    return ( 
        <View style={styles.main_container}>
          <Text style={styles.title2}>Search in API</Text>
          <TextInput
            style={styles.textinput}
            placeholder='Titre du film'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._searchFilms()}
          />
          <TouchableOpacity
                    accessibilityLabel="Rechercher"
                    onPress={() => this._searchFilms()}
                    style={styles.btn}
          >
            <Text style={styles.btnText}>Rechercher</Text>
          </TouchableOpacity>
          <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if(this.page < this.totalPages) {
                this._loadFilms();
              }
            }}
            style={styles.list}
          />
          {this._displayLoading()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title2: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
    padding: 25
  },

  textinput: {
    width: "90%",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    color: "#000",
    height: 50,
},

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btn: {
    padding: 10,
    backgroundColor: '#ff4d01',
    textAlign: 'center'
  },

  btnText: {
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: '600'
  },

  list: {
    width: '100%',
    margin: 10,
  }
})

export default Search