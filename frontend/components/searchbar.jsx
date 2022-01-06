import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import { faHistory } from '@fortawesome/fontawesome-free-solid'

export default class Searchbar extends React.Component {
  constructor(props) {
    //https://www.blog4js.com/2020/10/07/why-is-super-deprecated-in-a-react-class-component/
    super(props)

    this.state = { searchValue: '', filteredChannelsArray: [] }
    //console.log('props channels', this.props.channels);
    // this.filteredChannelsArray
    const placeholderMessages = [
      'Search for your collaborations, find that song.',
      'Search for your collaborations, find the artist.',
      'Search all across 6lack',
      'The music is somewhere...',
      'What do you want to search for today?',
      'Type what you want to search for. 6lack will do the rest.',
    ]
    const randomNum = (max) => {
      return Math.floor(Math.random() * max + 1)
    }

    this.placeholderText =
      placeholderMessages[randomNum(placeholderMessages.length - 1)]
  }

  componentDidMount() {
    //console.log("channels list", this.props);
    //console.log("state in searchbar", this.state);
    this.setState({ filteredChannelsArray: Object.values(this.props.channels) })
  }

  componentDidUpdate(prevProps) {
    //console.log('current props', this.props);
    //console.log("prev props", prevProps);
    if (
      JSON.stringify(prevProps.channels) !== JSON.stringify(this.props.channels)
    ) {
      //console.log("UPDATING CHANNEL LIST NOWWW");
      this.setState({
        filteredChannelsArray: Object.values(this.props.channels).sort(
          (a, b) => {
            const aTitle = a.title.toUpperCase()
            const bTitle = b.title.toUpperCase()
            if (aTitle < bTitle) {
              return -1
            } else if (aTitle > bTitle) {
              return 1
            } else return 0
          },
        ),
        /* .filter((channel) => {
          return channel.users
            .map((user) => user.id)
            .includes(this.props.currentUser.id);
        }) */
      })
    }
  }

  handleInput(type) {
    return (event) => {
      this.setState({
        [type]: event.target.value,
      })
    }
  }

  displayTitle(title) {
    const channelDisplayTitleArray = title.split(', ')
    const currentUserRemoved = channelDisplayTitleArray.filter(
      (user) => user !== this.props.currentUserEmail,
    )
    return currentUserRemoved.join(', ')
  }

  render() {
    //console.log("LIST of channels", this.state.filteredChannelsArray);

    const searchResults = (
      <>
        <div id="search-filler">Results: </div>
        <ul>
          {this.state.filteredChannelsArray.map((channel) => {
            let prefix

            if (channel.channel_or_dm === 'channel') {
              if (channel.channel_type === 'public') {
                prefix = '#'
              } else prefix = <i className="fas fa-lock"></i>
            } else prefix = '#'

            //console.log("channel Search", channel);
            if (
              this.displayTitle(channel.title)
                .toLowerCase()
                .startsWith(this.state.searchValue.toLowerCase()) &&
              this.state.searchValue != ''
            ) {
              return (
                <Link
                  onClick={() => this.props.closeModal()}
                  className="search-li"
                  to={`/channels/${channel.id}`}
                >
                  {prefix}
                  {this.displayTitle(channel.title)}
                  <br></br>
                </Link>
              )
            } else return null
          })}
        </ul>
      </>
    )

    const noSearchResults = <div id="search-filler">Narrow your search</div>

    //console.log('SearchValue', this.state.searchValue);
    //console.log('filered channels array', this.state.filteredChannelsArray);
    return (
      <>
        <div className="search-container">
          {/* <div className="arrow-bar">
            <FontAwesomeIcon icon={faArrowLeft} color="gray" size="lg" />
            <FontAwesomeIcon icon={faArrowRight} color="gray" size="lg" />
          </div>

          <FontAwesomeIcon
            icon={faHistory}
            color="white"
            size="lg"
            className="history"
          /> */}
          {/* <img className="search-logo" src={window.logo} /> */}

          <form id="search-form" onSubmit={() => event.preventDefault()}>
            <i className="fas fa-search gray"></i>
            <input
              id="search-input"
              placeholder={this.placeholderText}
              type="text"
              autoComplete="off"
              onChange={this.handleInput('searchValue')}
            ></input>
            <a
              className="search-modal-closer"
              onClick={() => this.props.closeModal()}
            >
              &times;
            </a>
          </form>

          {this.state.searchValue ? searchResults : noSearchResults}
        </div>
      </>
    )
  }
}
