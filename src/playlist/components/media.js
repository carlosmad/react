import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    state = {
        author: "Pepe"
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    // }
    handleClick = (event) =>{
        this.setState({
            author: "Ricardo"
        })
    }
    render(){
        const styles = {
            container: {
                color: 'red',
                cursor: 'pointer',
                width: 260,
                border: '1px solid black'
            }
        }
        return (
            <div className='Media' onClick={this.handleClick}>
                <div>
                    <img
                        src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}         
                    />
                    <h3>{this.props.title}</h3>
                    <p>{this.props.author}</p> 
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
}

export default Media;