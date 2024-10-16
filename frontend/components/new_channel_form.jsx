import React from 'react'

class NewChannelForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      channel_type: 'public',
      users: [],
      channel_or_dm: 'channel',
    }

    this.handleSubmit = this.handleSubmit.bind(this)

    this.togglePrivate = this.togglePrivate.bind(this)
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const channel = Object.assign({}, this.state)
    this.props.createChannel(channel).then((res) => {
      this.props.history.push(`/channels/${res.channel.id}`)
      this.props.closeModal()
    })
  }

  togglePrivate() {
    if (this.state.channel_type === 'public') {
      this.setState({ channel_type: 'private' })
      document.getElementById('new-channel-form-h1').innerHTML =
        'Create a private channel'
    } else {
      this.setState({ channel_type: 'public' })
      document.getElementById('new-channel-form-h1').innerHTML =
        'Create a channel'
    }
  }

  componentDidUpdate() {
    const createButton = document.getElementById('new-channel-submit-button')
    if (this.state.title) {
      createButton.classList.add('enabled-button')
      createButton.classList.remove('disabled-button')
    } else {
      createButton.classList.add('disabled-button')
      createButton.classList.remove('enabled-button')
    }
  }

  render() {
    return (
      <div>
        <div id="modal-header">
          <h1 id="new-channel-form-h1">Create a channel</h1>
          <button id="modal-closer" onClick={() => this.props.closeModal()}>
            &times;
          </button>
        </div>

        <div id="modal-body">
          <p>
            Channels are where your team collaborates. They’re best when
            organized around a topic — #hiphop, for example.
          </p>

          <div>
            Name
            <br />
            <input
              autoFocus="on"
              autoComplete="off"
              id="new-channel-title"
              className="new-channel-input"
              type="text"
              onChange={this.handleInput('title')}
              onFocus={() => {
                document.getElementById('new-channel-title').style =
                  'box-shadow: 0 0 0 4px #bee2f1;'
              }}
              onBlur={() => {
                document.getElementById('new-channel-title').style =
                  'box-shadow: none;'
              }}
              placeholder="# e.g. plan-album-release"
            />
          </div>

          <div>
            Description
            <span> (optional)</span>
            <br />
            <input
              id="new-channel-desc"
              className="new-channel-input"
              type="text"
              onChange={this.handleInput('description')}
              onFocus={() => {
                document.getElementById('new-channel-desc').style =
                  'box-shadow: 0 0 0 4px #bee2f1;'
              }}
              onBlur={() => {
                document.getElementById('new-channel-desc').style =
                  'box-shadow: none;'
              }}
            />
            <span id="description-span">What's this channel about?</span>
          </div>

          <div id="modal-footer">
            <div>
              <h4>Make private</h4>

              <div id="private-description">
                When a channel is set to private, it can only be viewed or
                joined by invitation.
              </div>
            </div>

            <div id="switch-div">
              <label className="switch">
                <input type="checkbox" onChange={this.togglePrivate} />

                <span className="slider round">
                  <span id="check">
                    <i className="fas fa-check"></i>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>

        <button
          className="disabled-button"
          id="new-channel-submit-button"
          style={this.style}
          onClick={this.handleSubmit}
        >
          Create
        </button>
        {/* {this.renderErrors()} */}
      </div>
    )
  }
}

export default NewChannelForm
