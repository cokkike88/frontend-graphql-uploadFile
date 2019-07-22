import gql from 'graphql-tag';

export const uploadFileTest = gql`
    mutation UploadFile($file: Upload!) {
        uploadFile(file: $file)
    }
`;