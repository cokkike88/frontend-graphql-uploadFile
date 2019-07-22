import React, {Fragment, useState} from 'react';
import { Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { uploadFileTest } from '../mutations';

const App = () => {
    const [fileState, updateFileStatee] = useState({
        file: null,
        fileName: ''
    });

    const headledOnChange = e => {
        updateFileStatee({
            ...fileState,
            [e.target.name]: e.target.files[0]
        })
    }

    const uploadFileFunc = (e, loadFileFunction) => {
        console.log('input', file);        
        loadFileFunction().then(data => {
            console.log('File uploaded.......', data);
        })
    }

    let file = fileState.file;

    return ( 
        <Fragment>
            <Mutation mutation={uploadFileTest} variables={{file}}>
                {(loadFileFunction, {loading, error, data}) => {
                    return (
                        <Fragment>
                            <input type="file" id="file-with-current" 
                                accept=".xlsx"
                                name="file"
                                onChange={headledOnChange} />
                                    
                            <button onClick={e => uploadFileFunc(e, loadFileFunction)}>Subir</button>

                        </Fragment>
                    )
                }}
            </Mutation>
            <br/>
            {/* <Query query={getProducts}>
                {({ loading, error, data}) => {
                    if(loading) return "Cargando....";
                    if(error) return `Error: ${error.message}`;

                    console.log(data);

                    return (
                        <h1>Hola</h1>
                    );
                }}
            </Query> */}

        </Fragment>
     );
}
 
export default App;