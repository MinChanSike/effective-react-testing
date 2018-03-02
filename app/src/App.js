import React, { Component } from 'react'
import Album from './Album'
import Albums from './Albums'
import Loading from './Loading'
import * as RemoteData from './remoteData'

class App extends Component {
  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const {
      filter,
      selectedAlbum,
      sorter,
      onFilter,
      onGoBack,
      onRateAlbum,
      onReviewAlbum,
      onSearchArtist,
      onSelectAlbum,
      onSortBy,
    } = this.props

    return RemoteData.check(
      {
        [RemoteData.Ready]: () => <Loading />,
        [RemoteData.Loading]: () => <Loading />,
        [RemoteData.Success]: albums =>
          selectedAlbum ? (
            <Album
              album={selectedAlbum}
              onGoBack={onGoBack}
              onRate={onRateAlbum}
              onReview={onReviewAlbum}
            />
          ) : (
            <Albums
              albums={albums}
              filter={filter}
              sorter={sorter}
              onFilter={onFilter}
              onSearchArtist={onSearchArtist}
              onSelectAlbum={onSelectAlbum}
              onSortBy={onSortBy}
            />
          ),
        [RemoteData.Fail]: error => <div>Got an error: {error.message}</div>,
        // [RemoteData.Fail]: () => <div>Got an error</div>,
      },
      this.props.albums,
    )
  }
}

export default App
