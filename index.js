import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app');

//const holaMundo = <h1>Hola mundo!</h1>;

render(<Playlist data={data}/>,app);