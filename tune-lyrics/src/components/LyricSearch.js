import React, { Component } from 'react'
import axios from 'axios'



class LyricSearch extends Component {
    constructor() {
        super()
        this.state = {
            artist: [],
            song: [],
            lyric: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSongChange = this.handleSongChange.bind(this)
        this.handleArtistChange = this.handleArtistChange.bind(this)
    }

    handleArtistChange(e) {
        this.setState({
            artist: e.target.value,

        });

    }


    handleSongChange(e) {
        this.setState({

            song: e.target.value
        });

    }
    handleSubmit(e) {
        e.preventDefault();
        axios.get(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.song}`).then(response => {

            this.setState({ lyric: response.data.lyrics })

        })

    }



    render() {


        return (

            <div>

                <form onSubmit={this.handleSubmit}>
                    <label className='input-labels'>
                        Artist:<br></br>
                        <input className='artist-input' onChange={this.handleArtistChange} type="text" />
                    </label> <br />
                    <label className='input-labels'>
                        Song: <br></br>
                        <input className='song-input' onChange={this.handleSongChange} type="text" />
                    </label> <br />
                    <div className='button'>
                        <input type="submit" value="Submit" />
                    </div>
                </form>



                <p className='lyrics'>{this.state.lyric}</p>

            </div>

        )
    }
}





export default LyricSearch