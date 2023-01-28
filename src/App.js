import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Feed,NavBar,VideoDetail,ChannelDetail,SearchFeed} from './components'

const App = () => (
    <BrowserRouter>
        <Box>
            <NavBar/>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;