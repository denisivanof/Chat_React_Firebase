import React from 'react';
import {Container, Grid} from "@material-ui/core";
import loader from './../img/loader.svg'

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justify={'center'}
            >
                <div>
                    <img src={loader}/>
                </div>
            </Grid>
        </Container>
    );
};

export default Loader;