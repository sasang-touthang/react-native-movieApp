import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
  getFamilyTV,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';

const Home = ({navigation}) => {
  const [movieImages, setMovieImages] = useState();
  const [popularMovies, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState('');
  const [familyTv, setFamilyTv] = useState('');
  const [err, setErr] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dimensions = Dimensions.get('screen');

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTV(),
      getFamilyTV(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upComingMoviesData,
          popularMoviesData,
          popularTvData,
          familyTvData,
        ]) => {
          const moviesImageArray = [];
          upComingMoviesData.forEach(movie => {
            moviesImageArray.push(
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            );
          });
          setMovieImages(moviesImageArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyTv(familyTvData);
        },
      )
      .catch(err => {
        setErr(err);
      })
      .finally(() => {
        setLoaded(true);
      });

    // // Get Upcoming Movies
    // getUpcomingMovies()
    //   .then(movies => {
    //     const moviesImageArray = [];
    //     movies.forEach(movie => {
    //       moviesImageArray.push(
    //         `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    //       );
    //     });
    //     setMovieImages(moviesImageArray);
    //   })
    //   .catch(err => {
    //     setErr(err);
    //   });

    // // Get Popular Movies
    // getPopularMovies()
    //   .then(movies => {
    //     setPopularMovies(movies);
    //   })
    //   .catch(err => {
    //     setErr(err);
    //   });

    // // Get Popular TV's
    // getPopularTV()
    //   .then(tv => {
    //     setPopularTv(tv);
    //   })
    //   .catch(err => {
    //     setErr(err);
    //   });

    // // Get Family TV's
    // getFamilyTV()
    //   .then(tv => {
    //     setFamilyTv(tv);
    //   })
    //   .catch(err => {
    //     setErr(err);
    //   });
  }, []);
  return (
    <>
      {loaded && (
        <ScrollView>
          {movieImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={movieImages}
                sliderBoxHeight={dimensions.height / 1.5}
                dotStyle={styles.sliderStyles}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}
          <View style={styles.carousel}>
            <List
              navigation={navigation}
              title="Popular Movies"
              content={popularMovies}
            />
          </View>
          <View style={styles.carousel}>
            <List
              navigation={navigation}
              title="Popular TV's"
              content={popularTv}
            />
          </View>
          <View style={styles.carousel}>
            <List
              navigation={navigation}
              title="Family TV's"
              content={familyTv}
            />
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size={'large'} />}
      {err && <Error />}
    </>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyles: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
